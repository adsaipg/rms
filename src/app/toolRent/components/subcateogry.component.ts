import { Component  } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from '../tool.service';
import { log } from 'util';

@Component({
    selector: 'subcategory',
    template: `<branches [type]="type" [imageGallery]="imageGallery"
     [headingName]="categoryItem" (onSelected)="selected($event)"></branches>`
})
export class SubcategoryComponent implements OnInit{
    public categoryItem:any;
    public branchItem: any;
    public imageGallery:any[] = ['no data'];
    public type:any;
    constructor(private route:ActivatedRoute,private service:ToolsService){
    }
    ngOnInit(){
      this.type = "category/subcategory";
      this.categoryItem = this.route.snapshot.params.subname;
      this.branchItem = this.route.snapshot.params.name;
      this.service.getData().subscribe((res) => {
          res = res.json();
          res.data.locations.forEach(element => {
              element.branches.forEach(element => {
                  if(element.name === this.branchItem){
                  element.categories.forEach(element => {
                    if(element.name === this.categoryItem){
                        this.imageGallery = element.subcategories;
                    }
                  });
           } });
          });
      })
    }
    selected(img){
        console.log('image:',img)
    }
}