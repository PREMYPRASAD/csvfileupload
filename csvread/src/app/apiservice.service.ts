import { Injectable } from '@angular/core';
//import{HttpClient} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  
  fileAddress="http://localhost:3000/uploadlearners"
  //apiUrl:String="http://localhost:3000/response";
  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  // all end points are here


//------------------------------------------  Students end points are here ------------------------------------------------- //

uploadCSV(file:any) {
  return this.http.post(`${this.apiUrl}/uploadlearners`, file)
}
upload(file:any) {
  return this.http.post(`${this.apiUrl}/upload`, file)}
//to fetch all students data list
getstudentsList(){
  return this.http.get(`${this.apiUrl}/studentlist`)
}

// Get Studentby id 
getStudentById(_id:any){
  return this.http.get(`${this.apiUrl}/student/${_id}`)
}

// to add new Student  
addstudent(data:any){
  return this.http.post(`${this.apiUrl}/student`, data)

}

// update student
updateStudent(data: any, _id: any){
  return this.http.put(`${this.apiUrl}/student`, { data, _id });

}

// to delete student
deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/student/${id}`)
}

//------------------------------------------  Students end points ends here ------------------------------------------------- //
}
