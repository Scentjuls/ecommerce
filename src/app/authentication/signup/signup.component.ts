import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    
  }

  signUp(form) {
    let user = form.value;
    this.auth.registerUser(user)
    .subscribe( 
      res => {
        console.log('res', res);
        this.spinnerService.show();
        localStorage.setItem('token', JSON.stringify(res.token))  //save details in the local storage 
        this.toastr.success('User registered Sucessfully', 'Registration Successful');
        this.router.navigate(['/']);
        this.spinnerService.hide();
      }, 
      err => {
        if(err.error == 'User Already Exist') {
         this.toastr.warning('Email Already Exist', 'Email exist')
        } else {
          this.toastr.error('User not registered', 'Unsuccessful Registration');
          console.log('error from the sign up component', err)
        }
      }
      )
    
  }
}
