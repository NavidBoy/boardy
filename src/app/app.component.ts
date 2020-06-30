import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boardy';
  tabcolumn : String[] = []
  createColumn(name:String){
    console.warn(name);
    this.tabcolumn.push(name);

  }
}
