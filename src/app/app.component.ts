import { Component,HostListener } from '@angular/core';

import { Router} from '@angular/router'

 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {

  

  constructor(private routers:Router ){
  }
 ngOnInit() {

    this.routers.navigate([''])
  }

}