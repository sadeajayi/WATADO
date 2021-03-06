import { Component, OnInit, ViewContainerRef, ViewEncapsulation, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;


  dialogResult = "";
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    public dialog: MdDialog
  ) { }
    /*
    loginOpenDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`The dialog was closed: ${result}`);
        this.dialogResult = result;
      });
    }
    */
  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
  }

  onLogoutClick(){
    //this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass:'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
