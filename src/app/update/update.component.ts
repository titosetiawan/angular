import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MasterService} from "../services/master.service";
import {Category} from "../model/category.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formCategory!: FormGroup;

  constructor(private formBuild: FormBuilder, private mast: MasterService) {
  }

  ngOnInit(): void {
    this.formCategory = this.formBuild.group({
      'category_id': [null],
      'department_id': [null],
      'name': [null],
      'description': [null]
    })
  }

  update(): void {
    let category = <Category>{};
    category.category_id = this.formCategory.controls['category_id'].value
    category.department_id = this.formCategory.controls['department_id'].value
    category.name = this.formCategory.controls['name'].value
    category.description = this.formCategory.controls['description'].value
    this.mast.updateCategory(category).subscribe({
      next: hasil => {
        alert('Update berhasil')
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
