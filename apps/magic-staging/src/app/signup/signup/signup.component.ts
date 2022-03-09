import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'openid-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignin(): void {
    this.router.navigate(['/signin']);
  }

}
