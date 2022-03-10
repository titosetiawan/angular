import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { ShowComponent } from './show/show.component';
import { InsertComponent } from './insert/insert.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {ToastNoAnimationModule, ToastrModule} from "ngx-toastr";
import { CategoryindukComponent } from './categoryinduk/categoryinduk.component';
import { CategorychildComponent } from './categorychild/categorychild.component';

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    ShowComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    CategoryindukComponent,
    CategorychildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
