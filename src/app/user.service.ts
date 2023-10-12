import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userDataSource = new BehaviorSubject({ email: '', password: '' });


  currentUserData = this.userDataSource.asObservable();
  headersval = {
    Useruuid: 749084,
    Sessionid: "1e5byd73eg1",
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJhNjJkODQwYy01YzJmLTQ2MmEtYmM2OS0xYTQ1YWIxNjJmMWIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZGU5MjMxZGUtNDVmNC00MzI1LWFlMDctOGFlNzIwNTI1MTdlL3YyLjAiLCJpYXQiOjE2OTU3MzA4MTksIm5iZiI6MTY5NTczMDgxOSwiZXhwIjoxNjk1NzM0NzE5LCJhaW8iOiJBVVFBdS84VUFBQUFvbUtrVUpXVVJ2N0t0TE1CQ1N2MDZDdnpkQ3dOd0p1QUFZOVdnVnhkaHJKNGM0NUJQMEEwRjdHYnhvYnN3dTNUNjhUT21raTJRYWtkSEd6a29uM1cxZz09IiwibmFtZSI6Ik1hbmlrYW50YSBLdW1hciBOYWxhbSIsIm5vbmNlIjoiNmRhNWI1MDUtYmJkMi00ZjU4LTliZjAtNWRiZGRiNDBiOWQxIiwib2lkIjoiZTJhNTI0OTQtZDRmNy00OWMyLTk5ZWYtMjE0NjZmZGIxMWZiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWFua3VtYUBjZHcuY29tIiwicmgiOiIwLkFSc0EzakdTM3ZSRkpVT3VCNHJuSUZKUmZneUVMYVl2WENwR3ZHa2FSYXNXTHhzYkFPSS4iLCJzdWIiOiJaNWQwRmpKVTVTdUo4OXdLR3h2dXFXMksxYUMtNmJTZlUzbHNiM21zWGRNIiwidGlkIjoiZGU5MjMxZGUtNDVmNC00MzI1LWFlMDctOGFlNzIwNTI1MTdlIiwidXRpIjoiQUlJVC1NenA3a0NCbW5tSFRzZ1JBQSIsInZlciI6IjIuMCJ9.sVFAkwHfwKmLpwHKSYxyGLFudmlzsgQWiyUlvMBZIJIJNKbiJ90ieqHhMDm8MACVz2OHWlsrfwCer_pRPCy7ASDJ19x8Y3TbMeY1MciM1g_WzMC7Tz0MAWWrmRQfaB2xnEWiTAjMq6cPJVTzgMDGDNvr7sxMH-79PIPwlkkdIBZCnWEVfSI0MW6B1CoufLo429ktHvCsGLYqsSkwleeyyoHsivpnYPTEzEyXXAfelf8AQaRwrRHT8TbukH10OKmYJgVY9dZLPszpFBXGw2bEj9DmaYiP1c1Obt1ya6gQQXg3cllrIP5wNKLAxhe_l_SJm6u3zFqCubojA6xvIeAY8Q'
  }


  constructor(private router: Router, private http: HttpClient) { }
  changeData(newUserData: any) {
    if (newUserData != undefined && newUserData.email != '' && newUserData.password != '') {
      localStorage.setItem('userDetails', JSON.stringify(newUserData));
      this.router.navigate(['']);
    }
  }





  public gettoptenamwisecartdetails() {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/gettoptenamwisecartdetails', { headers: new HttpHeaders(this.headersval) });
  }


  public callUserDetails() {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/YTDreports', { headers: new HttpHeaders(this.headersval) });
  }

  public monthwiseCart(view: string): Observable<any> {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get<any>(api + '/' + 'v1/api/amanda/getMonthWiseTotalCart' + '?view=' + view + '&server_type=' + environment.type, { headers: new HttpHeaders(this.headersval) });
  }

  /*getMonthWiseOrderConverted*/
  public getMonthWiseOrderConverted(view: string) {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/getMonthWiseOrderConverted' + '?view=' + view + '&server_type=' + environment.type, { headers: new HttpHeaders(this.headersval) });
  }

  /*getMonthWiseTotalCart*/
  public getMonthWiseTotalCart(view: string) {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/getMonthWiseTotalCart' + '?view=' + view + '&server_type=' + environment.type, { headers: new HttpHeaders(this.headersval) });
  }

  /*getMonthWiseOrderNotConverted*/
  public getMonthWiseOrderNotConverted(view: string) {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/getMonthWiseOrderNotConverted' + '?view=' + view + '&server_type=' + environment.type, { headers: new HttpHeaders(this.headersval) });
  }

  /*getMonthWiseOrderCancel*/
  public getMonthWiseOrderCancel(view: string) {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/getMonthWiseOrderCancel' + '?view=' + view + '&server_type=' + environment.type, { headers: new HttpHeaders(this.headersval) });
  }

  /*getEmailCounters*/
  public getEmailcounters() {
    const api = 'http://edswebdvvhil02:8083';
    return this.http.get(api + '/' + 'v1/api/amanda/getEmailCounters', { headers: new HttpHeaders(this.headersval) });
  }


  /*Chatbot*/
  public getchatbot(reply: string) {
    const headers1 = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const api = 'http://hdfnifidevvh1:9097/file?filename';
    return this.http.get(api + '=' + reply, { responseType: 'text' });
  }


  public checkResponse() {
    let headers = { Authorization: 'apikey R6j3HUbEuP04AsTtsVJYycwP8GkyS569K5JHPKAjArGEiYqp' };
    return this.http.get('http://modelvisualizationtesting.cdswdev.corp.cdw.com/arc/api/data?version=1&dsreq=' + { "version": 1, "highlighting": false, "type": "SQL", "limit": 100, "dimensions": [{ "type": "SIMPLE", "expr": "[project_name] as 'project_name'" }, { "type": "SIMPLE", "expr": "[num_of_models] as 'num_of_models'" }, { "type": "SIMPLE", "expr": "[num_of_cores] as 'num_of_cores'" }, { "type": "SIMPLE", "expr": "[memmory_in_gb] as 'memmory_in_gb'" }, { "type": "SIMPLE", "expr": "[nvidia_gpus] as 'nvidia_gpus'" }, { "type": "SIMPLE", "expr": "[numreplicas] as 'numreplicas'" }], "ksqlStreamPosition": "", "dataset_id": 15 }, { headers: new HttpHeaders(headers) })
  }

  private chatUser = new BehaviorSubject<boolean>(false);
  helpWithchat = this.chatUser.asObservable();
  public callChatopen() {
    this.chatUser.next(true);
  }
}
