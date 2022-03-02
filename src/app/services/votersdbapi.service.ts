import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VotersdbapiService {
  private httpOptions: any;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Api-Key "API_KEY_HERE"'
      })
    };
   }
  //Getting the voters phone number for authentication
  getAuthPhone(voterId: string){
    return this.http.get(`https://voterdbadmin.herokuapp.com/api/getauthphone/${voterId}`,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  //Getting the voters data after login 
  getVoterData(voterId: string){
    return this.http.get(`https://voterdbadmin.herokuapp.com/api/getdata/${voterId}`,this.httpOptions);
  }

  //Getting the status whether voter has casted vote or not
  getVotingStatus(voterId: string){
    return this.http.get(`https://voterdbadmin.herokuapp.com/api/getvotingstatus/${voterId}`,this.httpOptions);
  }

  changeStatus(voterId: string, body:any){
    return this.http.put<any>(`https://voterdbadmin.herokuapp.com/api/change_status/${voterId}/`,body,this.httpOptions);
  }

  handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.log('Client side error: ',errorResponse.error.message);
    } else {
      console.log(errorResponse.statusText);
    }
    return throwError('There is a problem with the service.')
  }

}
