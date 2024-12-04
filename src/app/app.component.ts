import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";


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
  public choosenlist?: number;

  allItems: Item[] = [];
  title: any;
  ngOnInit() {
    this.loadItems(this.choosenlist);
  }

  stylechanger(choos: number) {
    const element1 = document.getElementById('days-button1');
    const element2 = document.getElementById('days-button2');
    const element3 = document.getElementById('days-button3');
    const element4 = document.getElementById('days-button4');
    const element5 = document.getElementById('days-button5');
    if (choos == 1) {
    element1!.style.color = "#000";
    element1!.style.backgroundColor = "#d7ecff";
    } else if (choos == 2) {
    element2!.style.color = "#000";
    element2!.style.backgroundColor = "#d7ecff";
    } else if (choos == 3) {
    element3!.style.color = "#000";
    element3!.style.backgroundColor = "#d7ecff";
    } else if (choos == 4) {
    element4!.style.color = "#000";
    element4!.style.backgroundColor = "#d7ecff";
    } else if (choos == 5) {
    element5!.style.color = "#000";
    element5!.style.backgroundColor = "#d7ecff";
    }
  }

  selectList(choos: number) {
    if (choos == 1) {
      this.choosenlist = 1;
      this.loadItems(1);
    } else if (choos == 2) {
      this.choosenlist = 2;
      this.loadItems(2);
    } else if (choos == 3) {
      this.choosenlist = 3;
      this.loadItems(3);
    } else if (choos == 4) {
      this.choosenlist = 4;
      this.loadItems(4);
    } else if (choos == 5) {
      this.choosenlist = 5;
      this.loadItems(5);
    }
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
      comments: [],
    });

    if (this.choosenlist == 1) {
      this.saveItems(1);
    } else if (this.choosenlist == 2) {
      this.saveItems(2);
    } else if (this.choosenlist == 3) {
      this.saveItems(3);
    } else if (this.choosenlist == 4) {
      this.saveItems(4);
    } else if (this.choosenlist == 5) {
      this.saveItems(5);
    }

  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
    this.saveItems(1);
  }

  addComment(item: Item, comment: string) {
    if (!comment) return;
    item.comments.push(comment);
    this.saveItems(1);
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
      this.loadItems(this.choosenlist);
    } else if (choos == 2) {
      localStorage.setItem('todo-items-list-2', JSON.stringify(this.allItems));
      this.loadItems(this.choosenlist);
    } else if (choos == 3) {
      localStorage.setItem('todo-items-list-3', JSON.stringify(this.allItems));
      this.loadItems(this.choosenlist);
    } else if (choos == 4) {
      localStorage.setItem('todo-items-list-4', JSON.stringify(this.allItems));
      this.loadItems(this.choosenlist);
    } else if (choos == 5) {
      localStorage.setItem('todo-items-list-5', JSON.stringify(this.allItems));
      this.loadItems(this.choosenlist);
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