import { GrupaService } from '../services/grupa.service';
import { Grupa } from '../models/grupa';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Smijer } from '../models/smijer';
import { GrupaDialogComponent } from './../dialogs/grupa-dialog/grupa-dialog/grupa-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'oznaka', 'smijer', 'actions'];
  dataSource: MatTableDataSource<Grupa>;
  subscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

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
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),

      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }
  public openDialog(flag: number, id?: number, oznaka?: string, smijer?: Smijer) {
    const dialogRef = this.dialog.open(GrupaDialogComponent, {data: {id, oznaka, smijer}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === 1) {
          this.loadData();
        }
      });
    }
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLocaleLowerCase();
      this.dataSource.filter = filterValue;
    }
}
