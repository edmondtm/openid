import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'openid-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  submitted = false;
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    key: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    const key = route.snapshot.params['key'];
    this.resetForm.get('key')?.setValue(key);
    console.log(key);
  }

  ngOnInit(): void {
    return;
  }

  onReset(): void {
    if (this.resetForm.invalid) {
      this.submitted = true;
      return;
    }
    this.authService.reset(this.resetForm.value)
    .subscribe({
      next: (userProfile) => console.log(userProfile),
      error: (err) => console.error(err),
      complete: () => console.log('completed')
    })
  }

}
