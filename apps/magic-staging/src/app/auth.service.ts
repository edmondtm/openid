import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgetDto, ResetPasswordDto, SigninDto, SignupDto, UserProfile } from '@openid/api-interfaces';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public sigin(signin: SigninDto) {
    const url = this.apiBaseUrl + 'signin';
    return this.http.post<UserProfile>(url, signin);
  }

  public signup(signup: SignupDto) {
    const url = this.apiBaseUrl + 'signup';
    return this.http.post<UserProfile>(url, signup);
  }

  public forget(email: ForgetDto) {
    const url = this.apiBaseUrl + 'forget';
    return this.http.post<void>(url, email);
  }

  public reset(reset: ResetPasswordDto) {
    const url = this.apiBaseUrl + 'forget';
    return this.http.post<UserProfile>(url, reset);
  }
}
