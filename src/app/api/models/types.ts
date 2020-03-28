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
  Order: string;
  Cocktail: string;
  Date: string;
  BuyerName: string;
  Price: string;
  Email: string;
  Phone: string;
  ImgUrl: string;
  Description: string;
}
