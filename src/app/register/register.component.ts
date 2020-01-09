import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    this.authService.register(this.modelForm.value).then(result => {
      this.router.navigate(['/tours']);
      console.log('success');
    }).catch(error => {
      alert(`${error.message}`);
      console.log(error);
    })
    this.modelForm.reset();
  };
}
