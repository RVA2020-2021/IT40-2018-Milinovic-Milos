import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SmijerDialogComponent } from '../dialogs/smijer-dialog/smijer-dialog.component';
import { Smijer } from '../models/smijer';
import { SmijerService } from '../services/smijer.service';

@Component({
  selector: 'app-smijer',
  templateUrl: './smijer.component.html',
  styleUrls: ['./smijer.component.css']
})
export class SmijerComponent implements OnInit {

  displayedColumns = ['id', 'naziv' , 'oznaka' , 'actions'];
  dataSource: MatTableDataSource<Smijer>;
  subscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private smijerService: SmijerService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.smijerService.getAllSmijer()
      .subscribe(data => {
        // console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }),
      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string) {
    const dialogRef = this.dialog.open(SmijerDialogComponent, {data: {id, naziv, oznaka}});
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
