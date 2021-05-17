import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupaComponent } from './grupa/grupa.component';
import { SmijerComponent } from './smijer/smijer.component';
import { StudentComponent } from './student/student.component';
import { ProjekatComponent } from './projekat/projekat.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  {path: 'grupa', component: GrupaComponent},
  {path: 'smijer', component: SmijerComponent},
  {path: 'student', component: StudentComponent},
  {path: 'projekat', component: ProjekatComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'autor', component: AuthorComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
