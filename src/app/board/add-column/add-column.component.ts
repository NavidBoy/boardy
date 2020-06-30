import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.css']
})
export class AddColumnComponent implements OnInit {
  @Output() info = new EventEmitter<String>();

  nameForm: FormGroup;
  constructor() {
  this.nameForm = new FormGroup({
  name : new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.warn(this.nameForm.get("name").value);
    this.info.emit(this.nameForm.get("name").value);
  }

}
