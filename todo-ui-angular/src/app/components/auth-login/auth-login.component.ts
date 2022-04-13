import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  showLoginWarningMessage: boolean = false;
  returnUrl: string = '';
  @Output() ee = new EventEmitter();

  isLoggedIn = {
    value: true,
  }

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    if (this.authService.validateUserToken()) {
      //this will trigger while user clicks on back button, 
      //before naviagting to login page
      alert('You will be logged out');
  }
  this.authService.logOut();
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  reactiveForm: FormGroup;

  onLogin(): void {
    // console.log(this.reactiveForm.value);
    console.log(this.authService.validateUser(this.reactiveForm.value));
    this.showLoginWarningMessage = false;
        if (this.authService.validateUser(this.reactiveForm.value)) {
            this.authService.setToken();
            this.ee.emit(this.isLoggedIn);
            this.router.navigate([this.returnUrl]);
        } else {
            console.log('Invalid credentials');
            this.showLoginWarningMessage = true;
        }
    
  }

}
