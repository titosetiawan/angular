import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../model/category.model";
import {MasterService} from "../services/master.service";

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  list!: Category[]

  constructor(private mast: MasterService) { }

  ngOnInit(): void {
    this.mast.list().subscribe( {
      next: hasil => {
        this.list = hasil;
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
