export default class Collaborateur {
  id: number;
  First_name: string;
  Last_name: string;
  gender: string;
  Datetime: string;
  Phone_number: string;
  Address: string;
  Picture: string;

  constructor(
    id: number,
    First_name: string,
    Last_name: string,
    gender: string,
    Datetime: string,
    Phone_number: string,
    Address: string,
    Picture: string
  ) {
    this.id = id;
    this.First_name = First_name;
    this.Last_name = Last_name;
    this.gender = gender;
    this.Datetime = Datetime;
    this.Phone_number = Phone_number;
    this.Address = Address;
    this.Picture = Picture;
  }
}
