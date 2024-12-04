import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  editable = false;
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    

    const storedItems1 = localStorage.getItem('todo-items-list-1');
    let allItems: Item[] = storedItems1 ? JSON.parse(storedItems1) : [];

    const index = allItems.findIndex(existingItem => existingItem.description === this.item.description);

    if (index !== -1) {

      allItems[index].description = description;

      localStorage.setItem('todo-items-list-1', JSON.stringify(allItems));

      this.item.description = description;
    } else {
      console.error("Item wurde nicht gefunden!");
    }
  }
}
