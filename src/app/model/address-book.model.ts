export class AddressBookModel {
    id: number;
    name: string;
    telephoneNumber: string;

    constructor(name: string, telephoneNumber: string) {
        this.id = Math.random() * 10;
        this.name = name;
        this.telephoneNumber = telephoneNumber;
    }
}