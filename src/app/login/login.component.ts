import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.modelForm=this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  onSubmit(): void {
    console.log(this.modelForm.value);
    this.authService.login(this.modelForm.value).then(result => {
      this.router.navigate(['/tours']);
      console.log('success');
    }).catch(error => {
      console.log(error);
    })
    this.modelForm.reset();
  };
}
