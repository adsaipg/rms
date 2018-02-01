import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolsService {

  constructor(private http:Http) {}

public getData():Observable<any>{
    return this.http.get('.././assets/catalog.json');
}
}
