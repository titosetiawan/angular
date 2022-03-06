import {Component, OnInit} from '@angular/core';
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
  list!: Category

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


  // updateCategory(id: number) {
  //   this.mast.updateCategory(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       error => console.log(error));
  // }
}
