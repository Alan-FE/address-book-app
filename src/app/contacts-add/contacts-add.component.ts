import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from '../service/add-remove.service';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  constructor(public addData: AddRemoveService) { }

  ngOnInit(): void {
  }

  
}
