import { Component, OnInit,ViewChild } from '@angular/core';
import { ToolsService } from '../tool.service';
import { NgClass } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'tools',
    templateUrl: '../htmlANdcss/tool.component.html',
    styleUrls: ['../htmlANdcss/tools.component.css']
})
export class ToolsComponent implements OnInit {
    public showDropdown:Boolean = false;
    @ViewChild('mydrop') public mydrop:NgbDropdown;
    constructor(private service: ToolsService,
        private router: Router,
        private route: ActivatedRoute) { }
    ngOnInit() {
      
    }
   
}