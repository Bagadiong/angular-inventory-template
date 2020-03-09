import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '@environments/environment';

export class HttpProviderService {

  constructor(private http: HttpClient, private providerPath: string) {}

  sendGetRequest(path: string, headers: HttpHeaders, params: HttpParams) {
    const requestOptions = {
      headers: headers,
      params: params,
      observe: "response" as 'body',
    };
    return this.http.get(`${this.providerPath}${path}`, requestOptions);
  }

  sendPostRequest(path: string, body: any, headers: HttpHeaders, params: HttpParams) {
    const requestOptions = {
      headers: headers,
      observe: "response" as 'body',
      params: params
    };
    return this.http.post(`${this.providerPath}${path}`, body, requestOptions);
  }

  sendPutRequest(path: string, body: any, headers: HttpHeaders, params: HttpParams) {
    const requestOptions = {
      headers: headers,
      observe: "response" as 'body',
      params: params
    };
    return this.http.put(`${this.providerPath}${path}`, body, requestOptions);
  }

  sendDeleteRequest(path: string, headers: HttpHeaders, params: HttpParams) {
    const requestOptions = {
      headers: headers,
      observe: "response" as 'body',
      params: params
    };
    return this.http.delete(`${this.providerPath}${path}`, requestOptions);
  }

}


// @Injectable({
//   providedIn: 'root'
// })
// export class MemberProviderService extends HttpProviderService {
//   constructor(private providerHttp: HttpClient) {
//     super(providerHttp, "");
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminProviderService extends HttpProviderService {
//   constructor(private providerHttp: HttpClient) {
//     super(providerHttp, environment.hostURL+'/admin');
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ContractorProviderService extends HttpProviderService {
//   constructor(private providerHttp: HttpClient) {
//     super(providerHttp, environment.hostURL+'/contractor');
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ReferenceDataProviderService extends HttpProviderService {
//   constructor(private providerHttp: HttpClient) {
//     super(providerHttp, environment.hostURL+'/reference');
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class RequestProviderService extends HttpProviderService {
//   constructor(private providerHttp: HttpClient) {
//     super(providerHttp, environment.hostURL+'/request');
//   }
// }