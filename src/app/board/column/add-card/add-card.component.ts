import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  @Output() info = new EventEmitter<String>();

  cardNameForm: FormGroup;
  constructor() {
  this.cardNameForm = new FormGroup({
  name : new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.warn(this.nameForm.get("name").value);
    this.info.emit(this.cardNameForm.get("name").value);
  }
}
