import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BerandaComponent} from "./beranda/beranda.component";
import {ShowComponent} from "./show/show.component";
import {InsertComponent} from "./insert/insert.component";
import {CategoryindukComponent} from "./categoryinduk/categoryinduk.component";

const routes: Routes = [
  {
    path  : 'home', component:BerandaComponent
  },
  {
    path  : 'show', component:ShowComponent
  },

  {
    path  : 'insert', component:InsertComponent
  },
  {
    path: 'update/:id',  component:InsertComponent
  },
  {
    path: 'induk', component: CategoryindukComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
