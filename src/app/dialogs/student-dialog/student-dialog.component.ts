import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupa } from 'src/app/models/grupa';
import { Projekat } from 'src/app/models/projekat';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../../models/student';
import { GrupaService } from '../../services/grupa.service';
import { ProjekatService } from '../../services/projekat.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  public flag: number;
  grupe: Grupa[];
  projekti: Projekat[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StudentDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Student,
              public studentService: StudentService,
              public grupaService: GrupaService,
              public projekatService: ProjekatService) { }

  ngOnInit(): void {
    this.grupaService.getAllGroups()
    .subscribe(grupe => {
      this.grupe = grupe;
    });
    this.projekatService.getAllProjects()
    .subscribe(projekti => {
      this.projekti = projekti;
    });
  }

  compareTo(a, b) {
    // tslint:disable-next-line: triple-equals
    return a.id == b.id;
  }

  public add(): void {
    this.studentService.addStudents(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno dodan student: ' + this.data.ime + this.data.prezime, 'U redu', {
          duration: 2500
        });
      }),
      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public update(): void {
    this.studentService.updateStudents(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno modifikovan student: ' +  this.data.ime + this.data.prezime, 'U redu', {
          duration: 2500
        });
      }),
      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public delete(): void {
    this.studentService.deleteStudents(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspijesno obrisan student', 'U redu', {
          duration: 2500
        });
      }),
      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmjena!', 'U redu', {
      duration: 1000
    });
  }
}
