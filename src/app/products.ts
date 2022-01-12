export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Nutella',
    price: 250,
    description: 'Yummy and tasty'
  },
  {
    id: 2,
    name: 'Maggi',
    price: 50,
    description: '2 mins masala noodles'
  },
  {
    id: 3,
    name: 'Kitkat',
    price: 20,
    description: 'Take a break'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/