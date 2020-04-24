import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails = {}

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private route: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  
  ngOnInit() {

  }

  login(form) {
    let user = form.value;
    this.auth.loginUser(user)
    .subscribe(
      res => {
        console.log('res', res);
        this.spinnerService.show();
        localStorage.setItem('token', JSON.stringify(res.token))
        this.toastr.success('User Logged In Sucessfully', 'Log In Successful');
        this.route.navigate(['/']);
        this.spinnerService.hide();
      },
      err => {
        if(err){
          console.log('error', err)
          if(err.error == 'wrong password') {
            this.toastr.warning('You entered the wrong password', 'Wrong Password');
          } else {
            this.toastr.error('Email Doesnt Exist', 'Invalid Email');
          }
        }
      }
    )
  }


}
