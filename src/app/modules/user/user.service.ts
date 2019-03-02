import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "./../../core/services/http.service";
import { userConfig } from "./user.config";
@Injectable({
  providedIn: 'root'
})
export class UserService  extends HttpService  {

  constructor(http: HttpClient) {
    super(http);
  }
  fnGetAll(data:any){
    return this.get(userConfig.api.getAll,data);
  }
}
