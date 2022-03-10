import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { UserProfile } from '@openid/api-interfaces';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'openid-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  submitted = false;
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    return;
  }

  onSignup(): void {
    this.router.navigate(['/signup']);
  }

  onSubmit(): void {
    if (this.signinForm.invalid) {
      this.submitted = true;
      return;
    }
    this.authService.sigin(this.signinForm.value)
    .subscribe({
      next: (userProfile) => console.log(userProfile),
      error: (err) => console.error(err),
      complete: () => console.log('completed')
    })  
  }

}
