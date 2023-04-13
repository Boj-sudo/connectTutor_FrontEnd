import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:50522/api";
  readonly photo_url = "http://localhost:50522/Photos/";
  
  StudentEmail : string = '';
  TutorEmail : string  = '';
  AdminEmail : string = '';
  ModuleName : string = '';

  constructor(private http : HttpClient) { }
  
  getStudentList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Student');
  } 

  addStudent(val: any) {
    return this.http.post(this.APIUrl + '/Student', val);
  }
 
  updateStudent(val: any) {
    return this.http.put(this.APIUrl + '/Student', val);
  }

  deleteStudent(val: any) {
    return this.http.delete(this.APIUrl + '/Student/' + val);
  } 

  getSessionList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Session');
  }

  addSession(val: any) {
    return this.http.post(this.APIUrl + '/Session', val);
  }

  deleteSession(val : any) {
    return this.http.delete(this.APIUrl + '/Session/' + val);
  }

  getTutorList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Tutor');
  }  

  addTutor(val: any) {
    return this.http.post(this.APIUrl + '/Tutor', val);
  }

  updateTutor(val: any) {
    return this.http.put(this.APIUrl + '/Tutor', val);
  }

  deleteTutor(val: any) {
    return this.http.delete(this.APIUrl + '/Tutor/' + val);
  }

  getAdminList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Admin');
  }

  addAdmin(val: any) {
    return this.http.post(this.APIUrl + '/Admin', val);
  }

  updateAdmin(val: any) {
    return this.http.put(this.APIUrl + '/Admin', val);
  }

  deleteAdmin(val: any) {
    return this.http.delete(this.APIUrl + '/Admin/' + val);
  }

  getModuleList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Module');
  } 

  addModule(val: any) {
    return this.http.post(this.APIUrl + '/Module', val);
  }

  deleteModule(val: any) {
    return this.http.delete(this.APIUrl + '/Module/' + val);
  }

  uploadModuleImage(val: any) {
    return this.http.post(this.APIUrl + '/Module/saveFile', val);
  }

  getBookingList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Booking');
  } 

  addBooking(val: any) {
    return this.http.post(this.APIUrl + '/Booking', val);
  }

  deleteBooking(val: any) {
    return this.http.delete(this.APIUrl + '/Booking/' + val);
  }

  getFirstVacancyAppList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/FirstVacancyApp');
  } 

  addFirstVacancy(val: any) {
    return this.http.post(this.APIUrl + '/FirstVacancyApp', val);
  }

  updateFirstVacancy(val: any) {
    return this.http.put(this.APIUrl + '/FirstVacancyApp', val);
  }

  deleteFirstVacancy(val: any) {
    return this.http.delete(this.APIUrl + '/FirstVacancyApp/' + val);
  } 

  getSecondVacancyAppList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/SecondVacancyApp');
  } 

  addSecondVacancy(val: any) {
    return this.http.post(this.APIUrl + '/SecondVacancyApp', val);
  }

  updateSecondVacancy(val: any) {
    return this.http.put(this.APIUrl + '/SecondVacancyApp', val);
  }

  deleteSecondVacancy(val: any) { 
    return this.http.delete(this.APIUrl + '/SecondVacancyApp/' + val);
  } 

  getThirdVacancyAppList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ThirdVacancyApp');
  } 

  addThirdVacancy(val: any) {
    return this.http.post(this.APIUrl + '/ThirdVacancyApp', val);
  }

  updateThirdVacancy(val: any) {
    return this.http.put(this.APIUrl + '/ThirdVacancyApp', val);
  }

  deleteThirdVacancy(val: any) {
    return this.http.delete(this.APIUrl + '/ThirdVacancyApp/' + val);
  } 

  uploadVacancyDocs(val: any) {
    return this.http.post(this.APIUrl + '/ThirdVacancyApp/saveFile', val);
  }

  uploadTutorPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Tutor/saveFile', val);
  }

  uploadStudentPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Student/saveFile', val);
  }

  uploadAdminPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Admin/saveFile', val);
  }

  getAllTutorNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Tutor/GetAllTutorNames');
  }

  getAllStudentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Student/GetAllStudentNames');
  }

  getAllAdminNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Admin/GetAllAdminNames');
  }

  getCurrentBooking(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/booking/checkemail?email=' + email);
  }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/booking');
  }

  getStudentCurrentBooking(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/booking/checkstudentemail?email=' + email);
  }

  getStudentProfile(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/student/checkstudentprofile?email=' + email);
  }

  getAdminProfile(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/admin/checkadminprofile?email=' + email);
  }

  getTutorProfile(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/tutor/checktutorprofile?email=' + email);
  }

  getBookedModules(email: string):Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/booking/checkbookedmodules?email=' + email);
  }

  getRegisteredModules(email: string): Observable<any[]> { 
    return this.http.get<any[]>(this.APIUrl + '/tutor/checkregisteredmodules?email=' + email);
  }

  getTutorSession(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/tutor/checktutorsession?email=' + email);
  }

  getStudentSession(email: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/student/checkstudentsession?email=' + email);
  }

  getNumBookings(module: string): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/booking/countBooking?module=' + module);
  }

  getNumTuts(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/tutor/countTutors');
  }

  getNumStudents(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Student/countStudents');
  }

  getNumSessions(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/session/countSessions');
  }

  getNumBooking(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/booking/countBookings');
  }

  sendModuleName(name: string) {
    this.ModuleName = name;
  }

  getModuleName(): string {
    return this.ModuleName;
  }

  sendTutorEmail(email: string) {
    this.TutorEmail = email;
  }

  getTutorEmail(): string {
    return this.TutorEmail;
  }

  sendStudentEmail(email: string) {
    this.StudentEmail = email;
  }

  getStudentEmail(): string {
    return this.StudentEmail;
  }

  sendAdminEmail(email: string) {
    this.AdminEmail = email;
  }

  getAdminEmail(): string {
    return this.AdminEmail;
  }

  getModuleNames(strUrl: string): any {
    return this.http.get<any>(this.APIUrl+'/tutor/getTheModuleName?strUrl='+strUrl);
  }

  getAllTutorEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Tutor/GetAllTutorEmails');
  }

  getAllStudentEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Student/GetAllStudentEmails');
  }
}
