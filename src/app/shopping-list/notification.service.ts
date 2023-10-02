import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingEntry } from './shopping-entry';

@Injectable()
export class NotificationService {
  // Observable for selected elements
  selectedElement = new BehaviorSubject<ShoppingEntry | null>(null);

  constructor() { }

  public selectionChanged(shopping: ShoppingEntry): void {
    this.selectedElement.next(shopping);
  }
}
