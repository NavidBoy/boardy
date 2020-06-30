import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() columnName: String;

  constructor() { }

  tabCards : String[] = [];
  card: String;

  ngOnInit(): void {
  }

  addCard(cardName: String){
      this.tabCards.push(cardName);
  }
}