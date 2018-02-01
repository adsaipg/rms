import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { ToolsService } from './tool.service'
import { Http } from '@angular/http';

@Injectable()
export class ToolsResolver implements Resolve<any> {
  constructor(private service: ToolsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getData()
  }
}
