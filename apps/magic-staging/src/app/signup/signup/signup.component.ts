import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'openid-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    return;
  }

  onSignin(): void {
    this.router.navigate(['/signin']);
  }

  onSignup(): void {
    if (this.signupForm.invalid) {
      this.submitted = true;
      return;
    }
    this.authService.signup(this.signupForm.value)
    .subscribe({
      next: (userProfile) => console.log(userProfile),
      error: (err) => console.error(err),
      complete: () => console.log('completed')
    })
  }

}
