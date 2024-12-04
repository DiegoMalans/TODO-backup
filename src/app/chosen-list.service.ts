import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChosenListService {
  private choosenlist?: number;

  constructor() {}

  // Getter für die Variable
  getChoosenList(): number | undefined {
    return this.choosenlist;
  }

  // Setter für die Variable
  setChoosenList(value: number): void {
    this.choosenlist = value;
  }
}
