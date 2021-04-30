import { Product } from '../products/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/books";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  message(msg: string, isError: boolean = true): void {
    this.snackBar.open(msg, "X", {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-success"] : ["msg-error"]
    }); 
  }
  
  errorHandler(e: any): Observable <any> {
    console.log(e);
    this.message("Erro Encontrado!", false);
    return EMPTY;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable <Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      catchError(e => this.errorHandler(e))
    );
  }

  delete(product: Product): Observable <Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      catchError(e => this.errorHandler(e))
    );
  } 

}