import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})

export class GlobalService extends HttpService {
    
    constructor(
      http: HttpClient,
      private  _localStorageService: LocalStorageService
    ) {
        super(http);
    }
}
