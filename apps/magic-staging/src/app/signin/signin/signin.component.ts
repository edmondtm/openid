import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'openid-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSignup(): void {
    this.router.navigate(['/signup']);
  }

}
