import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div infiniteScroll (scrolled)="increaseingArray()" infiniteScrollDistance="0.8">
    <p *ngFor="let item of arr">{{item}}</p>
  </div>
  `,
  styles: [`div{height: 70vh; overflow-y: auto;}`]
})
export class AppComponent {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

  increaseingArray() {
    console.log("scroll event triggered")
    for (let i = 0; i < 50; i++) {
      this.arr.push(this.arr[this.arr.length - 1] + 1)
    }
  }
}
