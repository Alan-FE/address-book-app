import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from '../service/add-remove.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor(public addData: AddRemoveService) { }
  
  ngOnInit(): void {
  }

  onDelete(i: any) {
    this.addData.deleteContact(i);
  }
  
  
}
