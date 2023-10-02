import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEntry } from '../shopping-entry';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-element',
  templateUrl: './shopping-list-element.component.html',
  styleUrls: ['./shopping-list-element.component.css']
})
export class ShoppingListElementComponent implements OnInit, OnDestroy {
  @Input() shopping!: ShoppingEntry;
  selected = false;
  subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newShopping => {
      this.selected = newShopping === this.shopping ? true : false;
    });
  }

  getFullName(): string {
    return `${this.shopping?.amount} ${this.shopping?.itemName}`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
