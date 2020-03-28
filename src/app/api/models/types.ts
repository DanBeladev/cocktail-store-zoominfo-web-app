export interface Product {
  _id: string;
  title: string;
  picture: string;
  price: string;
  description: string;
}

export interface User {
  _id: string;
  emailAddress: string;
  name: string;
  phoneNumber: string;
  address: string;
}

export interface Purchase {
  _id: string;
  createdDate: Date;
  status: string;
  user: User;
  product: Product;
}

export interface PurchaseDisplay {
  orderID: string;
  cocktail: string;
  date: Date;
  buyerName: string;
  email: string;
  phone: string;
  imgUrl: string;
  description: string;
}
