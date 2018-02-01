import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ToolsService } from '../tool.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'branches',
    templateUrl: '../htmlANdcss/branches.component.html',
    styleUrls: ['../htmlANdcss/branches.component.css']
})
export class BranchesComponent implements OnInit {
    @Input() imageGallery: any[] = ['no image'];
    @Input() headingName:any;
    @Input() type:any;
    @Input() showDropdown:Boolean =false;
    @Output() onSelected = new EventEmitter<any>();
    public branchName: any
    constructor(private service: ToolsService,
         private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit() {
      
    }
    onCategorySelected(img:any){
        console.log('image:',img)
       this.onSelected.emit(img)
    }
}