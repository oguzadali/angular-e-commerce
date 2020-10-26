import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../login/user';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/users';
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'hata oluştu' + err.error.message;
    } else {
      errorMessage = 'sistemsel hata';
    }
    return throwError(errorMessage);
  }
}
