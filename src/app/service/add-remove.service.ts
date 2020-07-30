import { Injectable } from '@angular/core';
import { AddressBookModel } from '../model/address-book.model';


@Injectable({
  providedIn: 'root'
})

export class AddRemoveService {
  data : any[] = [];
  

  constructor() {
    this.data = this.loadFromLocalStorage();
  }

  addContact(name: string, telNumber: string):void {
    let addBook = new AddressBookModel(name, telNumber);    
    
    if(addBook.name.length !== 0 && addBook.telephoneNumber.length !== 0) {
    this.data.push(addBook); 
    this.saveToLocalStorage();
    } else {
      alert("Name and number can't be empty!");
    }
  }

  deleteContact(index: any):void {
    this.data.splice(index, 1);
    this.saveToLocalStorage();
  }
  
  saveToLocalStorage() {
    let json = JSON.stringify(this.data);
    localStorage.setItem('data', json);
  }
  
  loadFromLocalStorage() {
    let json = localStorage.getItem('data');
    let parsedJson = JSON.parse(json);

    if(json === null)
    return [];

    if(parsedJson.length === 0) 
    return [];

    return parsedJson;

  }
  

}
