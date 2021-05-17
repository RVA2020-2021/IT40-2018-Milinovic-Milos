import { GrupaService } from '../services/grupa.service';
import { Grupa } from '../models/grupa';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GrupaDialogComponent } from './../dialogs/grupa-dialog/grupa-dialog/grupa-dialog.component';


@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit, OnDestroy {


  displayedColumns = ['id', 'naziv', 'oznaka', 'smijer'];
  dataSource: MatTableDataSource<Grupa>;
  subscription: Subscription;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private GrupaService: GrupaService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.GrupaService.getAllGroups()
      // tslint:disable-next-line: deprecation
      .subscribe(data => {
        // console.log(data);
        this.dataSource = new MatTableDataSource(data);
      }),

      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }
  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string, smijer?: number) {
    const dialogRef = this.dialog.open(GrupaDialogComponent, {data: {id, naziv, oznaka, smijer}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === 1) {
          this.loadData();
        }
      });
    }


}
