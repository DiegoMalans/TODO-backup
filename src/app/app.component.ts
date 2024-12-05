import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})
export class AppComponent implements OnInit {
  componentTitle = "My To Do List";
  componenquestion = "What would you like to do today?"
  filter: "all" | "active" | "done" = "all";
  allItems: Item[] = [];
  title: any;
  choositem: number = 0;
  @ViewChild('newItem') newItemInput!: ElementRef;

  ngOnInit() {
    this.loadItems(this.choositem);
  }
  
   stylechanger(choos: number) {
    const buttonIds = ['days-button1', 'days-button2', 'days-button3', 'days-button4', 'days-button5'];
  
    buttonIds.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {

        element.style.backgroundColor = (index + 1 === choos) ? "#d7ecff" : "#000";
      }
    });
  }
  
  selectList(choos: number) {
    if (choos == 1) {
      this.choositem = 1;
      this.loadItems(1);
    } else if (choos == 2) {
      this.choositem = 2;
      this.loadItems(2);
    } else if (choos == 3) {
      this.choositem = 3;
      this.loadItems(3);
    } else if (choos == 4) {
      this.choositem = 4;
      this.loadItems(4);
    } else if (choos == 5) {
      this.choositem = 5;
      this.loadItems(5);
    }
  }

  addItem(description: string) {
    if (!description) return;

    if (this.choositem != 0) {
      this.allItems.unshift({
        description,
        done: false,
        comments: [],
      });
    }

    if (this.choositem == 1) {
      this.saveItems(1);
      this.newItemInput.nativeElement.value = '';
    } else if (this.choositem == 2) {
      this.saveItems(2);
      this.newItemInput.nativeElement.value = '';
    } else if (this.choositem == 3) {
      this.saveItems(3);
      this.newItemInput.nativeElement.value = '';
    } else if (this.choositem == 4) {
      this.saveItems(4);
      this.newItemInput.nativeElement.value = '';
    } else if (this.choositem == 5) {
      this.saveItems(5);
      this.newItemInput.nativeElement.value = '';
    } else {
      alert("Sie müssen zuerst eine Liste auswählen!")
      this.newItemInput.nativeElement.value = '';
    }

  }

  remove(item: Item) {
    
    if (this.choositem == 1) {
      this.allItems.splice(this.allItems.indexOf(item), 1);
      this.saveItems(1);
    } else if (this.choositem == 2) {
      this.allItems.splice(this.allItems.indexOf(item), 1);
      this.saveItems(2);
    } else if (this.choositem == 3) {
      this.allItems.splice(this.allItems.indexOf(item), 1);
      this.saveItems(3);
    } else if (this.choositem == 4) {
      this.allItems.splice(this.allItems.indexOf(item), 1);
      this.saveItems(4);
    } else if (this.choositem == 5) {
      this.allItems.splice(this.allItems.indexOf(item), 1);
      this.saveItems(5);
    }
  }

  addComment(item: Item, comment: string) {
    if (!comment) return;
    item.comments.push(comment);

    if (this.choositem == 1) {
      this.saveItems(1);
    } else if (this.choositem == 2) {
      this.saveItems(2);
    } else if (this.choositem == 3) {
      this.saveItems(3);
    } else if (this.choositem == 4) {
      this.saveItems(4);
    } else if (this.choositem == 5) {
      this.saveItems(5);
    }
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  saveItems(choos: number) {
    if (choos == 1) {
      localStorage.setItem('todo-items-list-1', JSON.stringify(this.allItems));
      this.loadItems(this.choositem);
    } else if (choos == 2) {
      localStorage.setItem('todo-items-list-2', JSON.stringify(this.allItems));
      this.loadItems(this.choositem);
    } else if (choos == 3) {
      localStorage.setItem('todo-items-list-3', JSON.stringify(this.allItems));
      this.loadItems(this.choositem);
    } else if (choos == 4) {
      localStorage.setItem('todo-items-list-4', JSON.stringify(this.allItems));
      this.loadItems(this.choositem);
    } else if (choos == 5) {
      localStorage.setItem('todo-items-list-5', JSON.stringify(this.allItems));
      this.loadItems(this.choositem);
    }
  }

  loadItems(choos?: number) {
    const storedItemsList1 = localStorage.getItem('todo-items-list-1');
    const storedItemsList2 = localStorage.getItem('todo-items-list-2');
    const storedItemsList3 = localStorage.getItem('todo-items-list-3');
    const storedItemsList4 = localStorage.getItem('todo-items-list-4');
    const storedItemsList5 = localStorage.getItem('todo-items-list-5');
    if (storedItemsList1 && choos == 1 ) {
      this.allItems = JSON.parse(storedItemsList1);
    } else if (storedItemsList2 && choos == 2) {
      this.allItems = JSON.parse(storedItemsList2);
    } else if (storedItemsList3 && choos == 3) {
      this.allItems = JSON.parse(storedItemsList3);
    } else if (storedItemsList4 && choos == 4) {
      this.allItems = JSON.parse(storedItemsList4);
    } else if (storedItemsList5 && choos == 5) {
      this.allItems = JSON.parse(storedItemsList5);
    }else{
      this.allItems = [];
    }
  }
}