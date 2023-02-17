import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaffePomeriggio } from '../interfaces/caffe-pomeriggio';

@Injectable({
  providedIn: 'root'
})
export class CaffePomeriggioService {

  constructor(private http: HttpClient) { }

  getAllCaffePomeriggio():Observable<CaffePomeriggio>{
    return this.http.get<CaffePomeriggio>("http://localhost:3000/caffedelpomeriggio")
  }
}
