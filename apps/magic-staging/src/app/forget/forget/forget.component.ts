import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'openid-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    return;
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
