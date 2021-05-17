import { Component, OnInit, Inject  } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrupaService } from '../../../services/grupa.service';
import { Grupa } from '../../../models/grupa';


@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<GrupaDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Grupa,
              public grupaService: GrupaService) { }

  ngOnInit(): void {
  }
  public add(): void {
    this.grupaService.addGrupa(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno dodana grupa: ' + this.data.naziv, 'U redu', {
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
    this.grupaService.updateGrupa(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspijesno modifikovana grupa: ' + this.data.naziv, 'U redu', {
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
    this.grupaService.deleteGrupa(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspijesno obrisana grupa', 'U redu', {
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
    this.snackBar.open('Odustali ste od izmena!', 'U redu', {
      duration: 1000
    });
  }



}
