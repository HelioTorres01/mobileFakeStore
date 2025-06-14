// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
// export class ProductService {
//   private apiUrl = 'https://fakestoreapi.com/products';

//   constructor(private http: HttpClient) { }

//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.apiUrl);
//   }

//   getProductById(id: number): Observable<Product> {
//     return this.http.get<Product>(`${this.apiUrl}/${id}`);
//   }
// }

// src/app/services/product.service.ts
// ...
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  // Adicione um parâmetro para limitar a quantidade de itens iniciais
  // Ou remova o limite se quiser carregar TUDO de uma vez
  getProducts(limit?: number): Observable<Product[]> {
    let url = this.apiUrl;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Product[]>(url);
  }
    getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // ... (getProductById permanece o mesmo)
}