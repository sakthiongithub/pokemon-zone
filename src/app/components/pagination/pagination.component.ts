import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() previous: string;
  @Input() next: string;
  @Output() paginationEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  prevPage() {
    this.paginationEvent.emit(this.previous);
  }

  nextPage() {
    this.paginationEvent.emit(this.next);
  }
}
