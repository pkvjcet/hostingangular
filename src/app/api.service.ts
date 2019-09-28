import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addCourse(data){
      return this.http.post("http://dummyapilist.herokuapp.com/addcourse",data);
  }
  viewCourses(){
      return this.http.get("http://dummyapilist.herokuapp.com/getcourses");
  }

}
