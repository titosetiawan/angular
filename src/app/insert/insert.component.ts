import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MasterService} from "../services/master.service";
import {Category} from "../model/category.model";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  formCategory!: FormGroup;
  constructor(private formBuild: FormBuilder, private mast:MasterService) { }

  ngOnInit(): void {
    this.formCategory = this.formBuild.group({
      'category_id' : [null],
      'department_id' : [null],
      'name' : [null],
      'description' : [null]
    })
  }

  simpan(): void{
    let category = <Category>{};
    category.category_id = this.formCategory.controls['category_id'].value
    category.department_id = this.formCategory.controls['department_id'].value
    category.name = this.formCategory.controls['name'].value
    category.description = this.formCategory.controls['description'].value
    this.mast.saveCategory(category).subscribe({
        next: hasil => {
          alert('simpan berhasil')
        },
        error: err => {
          console.log(err)
        }
    });
  }
}
