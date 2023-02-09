import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() data: any;
  constructor() {}
  values: any;
  pagination: any;
  ngOnInit() {
    this.values = Data;
    this.pagination = {
      index: 0,
      size: 5,
    };
  }

  trackByFn(index: number, value: string) {
    return index;
  }

  getPageCount() {
    return Math.ceil(this.values.length / this.pagination.size);
  }

  getPageIndex(index: number) {
    return Math.floor(index / this.pagination.size);
  }

  getPages() {
    console.log(Array.from({ length: this.getPageCount() }, (_, i) => i));
    return Array.from({ length: this.getPageCount() }, (_, i) => i);
  }
}
