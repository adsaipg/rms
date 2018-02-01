import { Component, OnInit,Input } from '@angular/core';
import { ToolsService } from '../tool.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
    selector: 'category',
    template: `<branches [type]="type" [imageGallery]="imageGallery"
     [headingName]="branchName" (onSelected) = "selected($event)"></branches>`
})
export class CategoryComponent implements OnInit {
    public imageGallery: any[] = ['no image'];
    public type:any;
    public branchName: any
    constructor(private service: ToolsService,
         private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit() {
        this.type = "category";
        this.route.params.subscribe((params: any) => {
            console.log('category called');
            this.refershData();
        
        });
    }
    refershData(){
        this.branchName = this.route.snapshot.params.name;
        this.service.getData().subscribe((res) => {
            res = res.json();
            res.data.locations.forEach(element => {
                element.branches.forEach(element => {
                    if(element.name === this.branchName){
                        this.imageGallery = element.categories;
                    }
                });
            });
        })
    }
    selected(e){
        console.log('event:',e);
        this.router.navigate([this.branchName,e], {
            relativeTo: this.route.parent,
        });
    }

}