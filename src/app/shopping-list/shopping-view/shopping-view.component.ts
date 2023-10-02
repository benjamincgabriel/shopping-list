import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingEntry } from '../shopping-entry';

@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css']
})
export class ShoppingViewComponent implements OnInit {
  @Input() shopping: ShoppingEntry | undefined;
  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  edit: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}
