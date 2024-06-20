import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { User, GeneralResponse } from '../../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  public BASE_URL: string = 'http://localhost:8084/v1';

  constructor(private http: HttpClient) {}

  getCustomerBySharedKey(sharedKey: string): Observable<User> {
    const URL = `${this.BASE_URL}/customer/consultBySharedKey`;
    const body = { sharedKey };

    return this.http.post<GeneralResponse<User>>(URL, body).pipe(
      map(({ response, statusCode, message }) => {
        
        if(statusCode !== 0){
          throw new Error(message)
        }

        return response

      }),
      catchError(( error ) => throwError(() => error ))
    );
  }

  getAllCustomers(): Observable<User[]> {
    
    const URL = `${this.BASE_URL}/customer/getAllClients`;
    
    return this.http.get<GeneralResponse<User[]>>(URL).pipe(
      map(({ response }) => response),
      catchError(({ error }) => throwError(() => error.message))
    );
  }

  createCustomer(customer: User): Observable<User> {
    
    const URL = `${this.BASE_URL}/customer/saveCustomer`;
    return this.http.post<GeneralResponse<User>>(URL, customer).pipe(
      map(({ response,statusCode,message }) => {
        if(statusCode !== 0){
          throw new Error(message)
        }
        return response
      }),
      catchError(( error ) => throwError(() => error))
    );
  }

}
