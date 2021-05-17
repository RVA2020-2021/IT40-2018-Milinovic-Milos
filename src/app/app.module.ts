import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { GrupaComponent } from './grupa/grupa.component';
import { ProjekatComponent } from './projekat/projekat.component';
import { SmijerComponent } from './smijer/smijer.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GrupaDialogComponent } from './dialogs/grupa-dialog/grupa-dialog/grupa-dialog.component';
import { ProjekatDialogComponent } from './dialogs/projekat-dialog/projekat-dialog/projekat-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupaComponent,
    ProjekatComponent,
    SmijerComponent,
    StudentComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    GrupaDialogComponent,
    ProjekatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
