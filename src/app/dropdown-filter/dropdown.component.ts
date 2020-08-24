import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../app.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedItems = [];
  @Input() dropdownElements: [];
  @Input() title: string;
  // events: Event[] = [];
  @Output() parentItems: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  /*onChange($event) {
    this.selectedItems.push($event);
  }*/

  // tslint:disable-next-line:typedef
  getValues(){
    // console.log(this.selectedItems);
    this.parentItems.emit(this.selectedItems);
  }
}
