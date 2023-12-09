import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  navBg:any;


  @HostListener('document:scroll') scrollOver(){
    // console.log(document.body.scrollTop, "Scroll length");

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navBg ={
        'background-color':'#000000'
      }
    }else{
      this.navBg={};
    }
    
  }
}
