import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolsModule} from './toolRent/tool.module';
import { CommonModule } from '@angular/common';
const routes:Routes =  [ {
  path: '',loadChildren: './toolRent/tool.module#ToolsModule' 
} ];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToolsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
