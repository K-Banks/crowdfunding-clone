import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'CrowFundus';
  constructor(private router: Router){  }

  goToAdmin(){
    this.router.navigate(['admin'])
  }
  goToHome() {
    this.router.navigate(['']);
  }

}
