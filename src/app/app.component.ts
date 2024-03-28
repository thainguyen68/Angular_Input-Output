import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //input
  currentItem = 'Television...';


  //output
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  // input-output
  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
