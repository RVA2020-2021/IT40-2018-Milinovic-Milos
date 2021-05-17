import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from '../../../models/projekat';
import { ProjekatService } from '../../../services/projekat.service';


@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProjekatDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Projekat,
              public dobavljacService: ProjekatService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.dobavljacService.addProjects(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno dodan projekat: ' + this.data.naziv, 'U redu', {
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
    this.dobavljacService.updateProjects(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno modifikovan projekat: ' + this.data.naziv, 'U redu', {
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
    this.dobavljacService.deleteProjects(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspijesno obrisan projekat', 'U redu', {
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
