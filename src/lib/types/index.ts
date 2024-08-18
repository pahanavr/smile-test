export interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  company: Company;
  address: Address;
}