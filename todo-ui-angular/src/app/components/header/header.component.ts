import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }

  @Input() isLoggedIn: boolean;

  // ngOnInit(): void {
  //   this.isLoggedIn = this.authService.validateUserToken();
  // }

  // ngOnChanges() {
  //   this.isLoggedIn = this.authService.validateUserToken();
  // }

  appName: string = "ToDo App";
  flag: boolean = false;

  onToggle(){
    this.flag = !this.flag;
    console.log(this.flag);
  }

  logout(){
    this.authService.logOut();
    this.isLoggedIn = !this.isLoggedIn;
  }

}
