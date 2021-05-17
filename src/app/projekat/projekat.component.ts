import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Projekat } from 'src/app/models/projekat';
import { ProjekatService } from 'src/app/services/projekat.service';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog/projekat-dialog.component';


@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

  displayedColumns = ['id', 'naziv' , 'oznaka' , 'actions'];
  dataSource: MatTableDataSource<Projekat>;
  subscription: Subscription;

  constructor(private projekatService: ProjekatService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.projekatService.getAllProjects()
      .subscribe(data => {
        // console.log(data);
        this.dataSource = new MatTableDataSource(data);
      }),
      // tslint:disable-next-line: no-unused-expression
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string) {
    const dialogRef = this.dialog.open(ProjekatDialogComponent, {data: {id, naziv, oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === 1) {
          this.loadData();
        }
      });

}
}
