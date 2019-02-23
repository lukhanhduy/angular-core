import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "./http.service";
import { globalConfig } from './../config/global.config';

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
    async fnGetLanguages(){
        if (this._localStorageService.getItem('languages')) {
          return JSON.parse(this._localStorageService.getItem('languages'));
        }
        let response :any = await this.get(globalConfig.getLanguages).toPromise();
        let data = {};
        response.data.map((language:any)=>{
          data[language.code]= language.name
        })
        this._localStorageService.setItem("languages",JSON.stringify(data));
        return data;
      }
      async fnGetGender(){
        if (this._localStorageService.getItem('gender')) {
          return JSON.parse(this._localStorageService.getItem('gender'));
        }
        let res :any = await this.get(globalConfig.getGender).toPromise();
        this._localStorageService.setItem("gender",JSON.stringify(res.data));
        return res.data;
      }
      async fnGetMarital(){
        if (this._localStorageService.getItem('marital')) {
          return JSON.parse(this._localStorageService.getItem('marital'));
        }
        let res :any = await this.get(globalConfig.getMarital).toPromise();
        this._localStorageService.setItem("marital",JSON.stringify(res.data));
        return res.data;
      }
      async fnGetAppToken(){
        let appToken:any = '';
        let res:any = await this.get(globalConfig.getAppToken).toPromise();
        if(res && res.data && res.data.appToken){
          appToken = res.data.appToken;
        }
        return appToken;
      }
      fnCreate(data:any){
        return this.post(globalConfig.create,data);
      }
      fnGet(data:any){
        return this.get(globalConfig.get,data);
      }
}
