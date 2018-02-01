import { NgModule } from '@angular/core';
import { ToolsComponent } from './components/tool.component';
import { ToolsService } from './tool.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BranchesComponent } from './components/branches.component';
import { NgGridModule } from 'angular4-grid';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SubcategoryComponent } from './components/subcateogry.component';
import { CategoryComponent } from './components/category.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DropdownComponent } from './components/dropdown.component';

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ToolsComponent },
  {path: ':name',component: CategoryComponent },
  {path: ':name/:subname',component: SubcategoryComponent }
]
@NgModule({
  declarations: [
    ToolsComponent,
    FooterComponent,
    HeaderComponent,
    BranchesComponent,
    SubcategoryComponent,
    CategoryComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    AngularFontAwesomeModule,
    NgGridModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
      ToolsService
  ],
  bootstrap: []
})
export class ToolsModule { }
