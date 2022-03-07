import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MasterService} from "../services/master.service";
import {Category} from "../model/category.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  formCategory!: FormGroup;
  id!: number;

  blankspaces(control: FormControl):{[s:string]: boolean}{
    if (control.value != null && control.value.trim().length === 0 ){
      return {'blankspaces': true};
    }
    return {'blankspaces': false};
  }

  constructor(private formBuild: FormBuilder,
              private mast: MasterService,
              private router: Router,
              private route: ActivatedRoute) {
    this.formCategory = this.formBuild.group({
      'category_id': new FormControl(null, [Validators.required, this.blankspaces]),
      'department_id': new FormControl(null, [Validators.required, this.blankspaces]),
      'name': new FormControl(null, [Validators.required, this.blankspaces]),
      'description': new FormControl(null, [Validators.required, this.blankspaces])
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(rute => {
      this.id = parseInt(rute['id']);
      if (this.id) {
        console.log(this.id)
        this.mast.getCategoryId(this.id).subscribe({
          next: value => {
            this.formCategory.controls['department_id'].setValue(value.department_id)
            this.formCategory.controls['name'].setValue(value.name)
            this.formCategory.controls['description'].setValue(value.description)
          }
        })
      }
    })

  }

  simpan(): void {
    if (this.formCategory.valid) {
      let category = <Category>{};
      category.category_id = this.formCategory.controls['category_id'].value
      category.department_id = this.formCategory.controls['department_id'].value
      category.name = this.formCategory.controls['name'].value
      category.description = this.formCategory.controls['description'].value
      if (this.id) {
        category.category_id = this.id;
      }
      this.mast.saveCategory(category).subscribe({
        next: hasil => {
          alert('simpan berhasil')
          this.router.navigateByUrl('/update/' + category.category_id)
        },
        error: err => {
          console.log(err)
        }
      });
    } else {
      alert("Form harus terisi semua")
    }
  }

  update(): void {
    if (this.formCategory.valid) {
      let category = <Category>{};
      category.category_id = this.formCategory.controls['category_id'].value
      category.department_id = this.formCategory.controls['department_id'].value
      category.name = this.formCategory.controls['name'].value
      category.description = this.formCategory.controls['description'].value
      if (this.id) {
        category.category_id = this.id;
      }
      this.mast.updateCategory(category).subscribe({
        next: hasil => {
          alert('update berhasil')
          this.router.navigateByUrl('/list')
        },
        error: err => {
          console.log(err)
        }
      });
    } else {
      alert("Form harus terisi semua")
    }
  }
}
