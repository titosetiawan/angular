import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Category} from "../model/category.model";

@Component({
  selector: 'app-categorychild',
  templateUrl: './categorychild.component.html',
  styleUrls: ['./categorychild.component.css']
})
export class CategorychildComponent implements OnInit, OnChanges {

  @Output() postToParent = new EventEmitter<Category>()

  @Input() pesan!: Category;
  listCategory!: Category[]

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.listCategory) {
      this.listCategory.push(this.pesan)
    } else {
      if (this.pesan) {
        this.listCategory = [this.pesan]
      }
    }
  }

  edit(idx: number): void {
    this.postToParent.emit(this.listCategory[idx])
  }
}
