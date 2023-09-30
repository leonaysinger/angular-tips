import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpOptions } from '../../types/generic-http.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, search: any = {}, options: GenericHttpOptions = {}): Observable<T> {
    options.params = search;
    return this.http.get<T>(url, options)
  }

  patch<T>(url: string, body = {}, options: GenericHttpOptions = {}): Observable<T> {
    return this.http.patch<T>(url, body, options);
  }

  post<T>(url: string, options: GenericHttpOptions, body?: any): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body = {}, options: GenericHttpOptions = {}): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string, options?: GenericHttpOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
