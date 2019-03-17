import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})

export class FileService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
    }
}
