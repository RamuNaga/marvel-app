import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_KEY, API_URL, PRIVATE_KEY, PUBLIC_KEY } from './api-url.token';
import { getHash, getTimeStamp } from '../util/time-stamp';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly api_url = inject(API_URL);
  private readonly public_key = inject(PUBLIC_KEY);
  private readonly private_key = inject(PRIVATE_KEY);
  //private readonly api_key = inject(API_KEY);

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    const reqUrl = `${this.api_url}${url}` + `${this.getTsAndHash()}`;
    return this.http.get<T>(reqUrl, {
      headers: this.headers,
      params,
    });
  }

  post<T, D>(url: string, data?: D): Observable<T> {
    return this.http.post<T>(`${this.api_url}${url}`, JSON.stringify(data), {
      headers: this.headers,
    });
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${this.api_url}${url}`, JSON.stringify(data), {
      headers: this.headers,
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.api_url}${url}`, {
      headers: this.headers,
    });
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  getTsAndHash() {
    const timestamp = getTimeStamp();
    const url =
      '?' +
      `ts=${timestamp}` +
      '&apikey=' +
      `${this.public_key}` +
      `&hash=${getHash(timestamp, this.private_key, this.public_key)}`;
    return url;
  }
}
