import { Component, OnInit } from '@angular/core';
import { ShoppingEntry } from './shopping-entry';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [NotificationService]
})
export class ShoppingListComponent implements OnInit {
  shoppings: ShoppingEntry[] = [];
  currentShopping!: ShoppingEntry;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  select(shopping: ShoppingEntry): void {
    this.currentShopping = shopping;
    this.notificationService.selectionChanged(shopping);
  }

  addShopping(): void {
    const newShopping = new ShoppingEntry('New', 'Entry');
    this.shoppings = [newShopping, ...this.shoppings];
    this.select(newShopping);
  }

  deleteCurrent(): void {
    this.shoppings = this.shoppings.filter((shopping: ShoppingEntry) => shopping !== this.currentShopping);
    this.currentShopping = null!;
  }
}
