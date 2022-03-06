import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Category} from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(environment.baseUrl+'/list').pipe(map(data => data))
  }
  saveCategory(data: Category): Observable<any>{
    return this.http.post(environment.baseUrl+'/input', data).pipe(map(data => data))
  }

  updateCategory(id: number, value: any): Observable<any>{
    return this.http.put(environment.baseUrl+`/update/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl+`/delete/${id}`, { responseType: 'text' });
  }

}
