import { Component,Input  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header-layout',
    templateUrl: '../htmlANdcss/header.component.html',
    styleUrls: ['../htmlANdcss/header.component.css']
})
export class HeaderComponent{
    constructor(private router:Router,private route: ActivatedRoute){}
    home(){
        this.router.navigate([''], {
            relativeTo: this.route.parent,
        });
    }
}