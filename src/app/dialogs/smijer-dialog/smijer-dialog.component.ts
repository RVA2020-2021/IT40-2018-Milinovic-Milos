import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Smijer } from 'src/app/models/smijer';
import { SmijerService } from 'src/app/services/smijer.service';

@Component({
  selector: 'app-smijer-dialog',
  templateUrl: './smijer-dialog.component.html',
  styleUrls: ['./smijer-dialog.component.css']
})
export class SmijerDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<SmijerDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Smijer,
              public smijerService: SmijerService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.smijerService.addSmijer(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno dodan smijer: ' + this.data.naziv, 'U redu', {
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
    this.smijerService.updateSmijer(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno modifikovan smijer: ' + this.data.naziv, 'U redu', {
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
    this.smijerService.deleteSmijer(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspijesno obrisan smijer', + this.data.id + ' U redu', {
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
