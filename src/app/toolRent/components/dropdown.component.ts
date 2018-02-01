import { Component, OnInit,ViewChild } from '@angular/core';
import { ToolsService } from '../tool.service';
import { NgClass } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'dropdown',
    templateUrl: '../htmlANdcss/dropdown.component.html',
    styleUrls: ['../htmlANdcss/dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    public locations: any[] = [];
    public locValue: any = ''
    public branches:any[] = [];
    public itemName: any;
    @ViewChild('mydrop') public mydrop:NgbDropdown;
    constructor(private service: ToolsService,
        private router: Router,
        private route: ActivatedRoute) { }
    ngOnInit() {
        console.log('component called');
        this.service.getData().subscribe((res) => {
            res = res.json();
            this.locations = res.data.locations
        })
    }
    getBranchData(){
        this.branches = null;
        this.service.getData().subscribe((res)=>{
            res = res.json();
            res.data.locations.forEach(element => {
               if(element.name === this.itemName) {
                   this.branches = element.branches;
               }
            });
            console.log('branch:',this.branches);
        })
    }
    onBranchSelected(e) {
        console.log('drop:', e.toElement.innerText);
        this.router.navigate([e.toElement.innerText], {
            relativeTo: this.route.parent,
        });
    }
    settingsSubMenu(e){
        this.settings(e)
        this.itemName = e.toElement.innerText;
        console.log('e:',this.itemName);
        this.mydrop.close;
        this.getBranchData();
    }
    settingsMenu(e){
        this.settings(e)
    }
    settings(e){
        let evt = e ? e : window.event;
        evt.cancelBubble = true;
        evt.preventDefault(); 
        evt.stopPropagation();
        return;
    }

}