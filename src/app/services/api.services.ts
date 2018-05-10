
import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  async getSensors() {
    return await  this.http.get( this.url + '/sensors', {})
      .pipe(
        map(this.extractDataArray)
      ).toPromise();
  }

  async getRegistros() {
    return await  this.http.get( this.url + '/sensors/registros')
      .pipe(
        map(this.extractDataArray)
      ).toPromise();
  }

  private extractDataArray(res) {
    const body =  <any> res;
    if (body.response) {
      return body.data  || [];
    } else {
      return  [];
    }
  }

}
