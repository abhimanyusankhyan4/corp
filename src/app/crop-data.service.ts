import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropDataService {
  url = "https://qrvisor-env.eba-x8qnmkmd.eu-central-1.elasticbeanstalk.com/qrvisor/tomato/20051"
  constructor(private http:HttpClient) { }
  crops(){
    return this.http.get(this.url);
  }
}
