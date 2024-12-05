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
  @Input() choositem!: number;

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    let allItems: Item[] = [];

    if (this.choositem == 1) {
      const storedItems1 = localStorage.getItem('todo-items-list-1');
      allItems= storedItems1 ? JSON.parse(storedItems1) : [];
    } else if (this.choositem == 2) {
      const storedItems2 = localStorage.getItem('todo-items-list-2');
      allItems= storedItems2 ? JSON.parse(storedItems2) : [];
    } else if (this.choositem == 3) {
      const storedItems3 = localStorage.getItem('todo-items-list-3');
      allItems= storedItems3 ? JSON.parse(storedItems3) : [];
    } else if (this.choositem == 4 ) {
      const storedItems4 = localStorage.getItem('todo-items-list-4');
      allItems= storedItems4 ? JSON.parse(storedItems4) : [];
    } else if (this.choositem == 5) {
      const storedItems5 = localStorage.getItem('todo-items-list-5');
      allItems= storedItems5 ? JSON.parse(storedItems5) : [];
    }
    
    const index = allItems.findIndex(existingItem => existingItem.description === this.item.description);

    if (index !== -1) {
      allItems[index].description = description;

      if (this.choositem == 1) {
        localStorage.setItem('todo-items-list-1', JSON.stringify(allItems));
      } else if (this.choositem == 2) {
        localStorage.setItem('todo-items-list-2', JSON.stringify(allItems));
      } else if (this.choositem == 3) {
        localStorage.setItem('todo-items-list-3', JSON.stringify(allItems));
      } else if (this.choositem == 4 ) {
        localStorage.setItem('todo-items-list-4', JSON.stringify(allItems));
      } else if (this.choositem == 5) {
        localStorage.setItem('todo-items-list-5', JSON.stringify(allItems));
      }

      this.item.description = description;
    } else {
      console.error("Item wurde nicht gefunden!");
      console.log(allItems);
    }
  }
}
