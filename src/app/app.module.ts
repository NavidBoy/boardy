import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ColummnComponent } from './colummn/colummn.component';
import { AddColumnComponent } from './add-column/add-column.component';
import { AddCardComponent } from './board/column/add-card/add-card.component';
import { CardComponent } from './board/column/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColummnComponent,
    AddColumnComponent,
    AddCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
