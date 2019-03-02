import { userConfig } from './user.config';
import * as _ from 'lodash';
export class UserModel {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    age: number;
    userType: number;
    // handle before call api and import to databse
    handleUpdate(){
        return {
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            userType: this.userType
        }
    }
    handleCreate(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            email: this.email,
            phoneNumber: this.phoneNumber,
            userType: this.userType
        }
    }
    // handle for show data to view
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    getStatus(value:any){
        let status:any = _.find(userConfig.status, { value: value });
        if(status){
            return status.value;
        }
        return '';
    }
}