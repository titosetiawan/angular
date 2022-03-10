import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MasterService} from "../services/master.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../model/category.model";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-categoryinduk',
  templateUrl: './categoryinduk.component.html',
  styleUrls: ['./categoryinduk.component.css']
})
export class CategoryindukComponent implements OnInit {
  formEdit!: FormGroup;
  sendMessage!: Category

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
    this.formEdit = this.formBuild.group({
      'category_id': [null],
      'department_id': [null],
      'name': [null],
      'description': [null]
    })
  }

  simpan(): void {
    let category = <Category>{};
    category.category_id = this.formEdit.controls['category_id'].value
    category.department_id = this.formEdit.controls['department_id'].value
    category.name = this.formEdit.controls['name'].value
    category.description = this.formEdit.controls['description'].value
    this.sendMessage = category;
  }

  getMessage($event: any): void{
    this.formEdit.controls['category_id'].setValue($event.category_id)
    this.formEdit.controls['department_id'].setValue($event.department_id)
    this.formEdit.controls['name'].setValue($event.name)
    this.formEdit.controls['description'].setValue($event.description)
  }
}
