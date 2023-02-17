import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViniRossi } from '../interfaces/vini-rossi';

@Injectable({
  providedIn: 'root'
})
export class ViniRossiService {

  constructor(private http: HttpClient) { }

  getAllViniRossi():Observable<ViniRossi>{
    return this.http.get<ViniRossi>("http://localhost:3000/vinirossi")
  }
  
}
