import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';
import { Student } from '../models/student';
import { Grupa } from '../models/grupa';
import { Projekat } from '../models/projekat';
import { StudentService } from '../services/student.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns = ['id', 'ime' , 'prezime' , 'brojIndeksa', 'grupa', 'projekat', 'actions'];
  dataSource: MatTableDataSource<Student>;
  subscription: Subscription;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(private studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.studentService.getAllStudents()
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

  public openDialog(flag: number, id?: number, ime?: string, prezime?: string, brojIndeksa?: string, grupa?: Grupa, projekat?: Projekat) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {data: {id, ime, prezime, brojIndeksa, grupa, projekat}});
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

