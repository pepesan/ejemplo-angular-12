import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {TypicodePost} from "../models/typicode-post";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  private url : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get<Observable<TypicodePost[]>>(environment.typicodeBaseUrl+"/posts")
      .pipe(catchError(this.handleError('get', [])));
  }
  private handleError (operation = 'operation', result?: any) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return result;
    };
  }
}
