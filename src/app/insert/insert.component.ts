import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  formBuku!: FormGroup;
  constructor(private formBuild: FormBuilder,) { }

  ngOnInit(): void {
    this.formBuku = this.formBuild.group({
      'name' : [null],
      'email' : [null],
      'keterangan' : [null]
    })
  }

  simpan(): void{
    console.log(this.formBuku.controls)
  }
}
