import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "./http.service";
import { fileConfig } from './../config/file.config';

@Injectable({
    providedIn: 'root'
})

export class FileService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
    }
    fnFindFileByIds(data: any) {
        let url: any = `${fileConfig.findFileByIds}`;
        return this.post(url, data);
    }
    uploadFile(formData: any, data: any = {}) {
        return this.postFormData(fileConfig.uploadFile, formData, data);
    }
}
