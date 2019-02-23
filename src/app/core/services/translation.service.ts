import {TranslateService, TranslateModule} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import _ from 'lodash';

export class TranslationService {
    // constructor(
    //   // private translate: TranslateService
    //   ) {
    //   // translate.addLangs(['en', 'vi']);
    //   // translate.setDefaultLang('vi');
    //   // translate.use('vi');
    // }
    // getStatusList(){
    //   console.log('----------->')
    //   // this.translate.get('statusList').subscribe((res: string) => {
    //   //   consolse.log('-----------1')
    //   //     console.log(res);
    //   //     //=> 'hello world'
    //   // });
    // }
    private locale: any = 'en';
    private lang: any = {
        'vi': {
            msgLoginSuccess: 'Login success',
            msgUpdateSuccess: 'Success! Your request has been updated successfully',
            errorUpdate: 'Has error when update',
            emptyUserSelect: 'Please choose user to action ',
            emptyCategory: 'Please choose category to action',
            emptyExperience: 'Please choose experience to action',
            emptyData: 'Has error when get data',
            errorCreate: 'Has error when create',
            authenFailed: 'Cannot authenticate',
            name: 'name',
            email: 'email',
            roleId: 'role',
            password: 'password',
            status: 'status',
            icon: 'icon',
            background: 'background',
            index: 'index',
            category: 'category',
            moduleName: {
                chat: 'chat',
                users: 'users',
                expericence: 'expericence',
                reportExperience: 'report experience',
                reportUser: 'report user',
                adminUsers: 'admin users',
                wordsFilter: 'words filter',
                activities: 'activities',
                timeline: 'timeline',
                suggestionList: 'suggestion',
                analytics: 'analytics',
                role: 'role',
                cities: 'cities',
                actionLog: 'actionLog'
            },
            statusList: {
                user: ['None', 'Active', 'Inactive', 'Verified', 'Unverified', 'Blocked', 'Closed', 'Deleted'],
                experience: ['None', 'open', 'draft', 'ongoing', 'completed', 'cancelled', 'deleted','pending'],
                userExperience: ['None', 'accept', 'reject', 'leave', 'ownerRemove', 'invited', 'withdraw', 'going', 'check-in', 'guestRemove'],
                category: ['None', 'active', 'inactive', 'delete'],
                report: ['None', 'open', 'pending', 'resolve']
            }
        },
        'en': {
            msgLoginSuccess: 'Login success',
            msgUpdateSuccess: 'Success! Your request has been updated successfully',
            errorUpdate: 'Has error when update',
            emptyUserSelect: 'Please choose user to action ',
            emptyCategory: 'Please choose category to action',
            emptyExperience: 'Please choose experience to action',
            emptyData: 'Has error when get data',
            errorCreate: 'Has error when create',
            authenFailed: 'Cannot authenticate',
            name: 'name',
            email: 'email',
            roleId: 'role',
            password: 'password',
            status: 'status',
            icon: 'icon',
            background: 'background',
            index: 'index',
            category: 'category',
            moduleName: {
                chat: 'chat',
                users: 'users',
                expericence: 'expericence',
                reportExperience: 'report experience',
                reportUser: 'report user',
                adminUsers: 'admin users',
                wordsFilter: 'words filter',
                activities: 'activities',
                timeline: 'timeline',
                suggestionList: 'suggestion list',
                analytics: 'analytics',
                role: 'role',
                cities: 'cities',
                actionLog: 'actionLog'
            },
            statusList: {
                user: ['None', 'Active', 'Inactive', 'Verified', 'Unverified', 'Blocked', 'Closed', 'Deleted'],
                experience: ['None', 'open', 'draft', 'ongoing', 'completed', 'cancelled', 'deleted', 'inactive','pending'],
                userExperience: ['None', 'accept', 'reject', 'leave', 'ownerRemove', 'invited', 'withdraw', 'going', 'check-in', 'guestRemove'],
                category: ['None', 'active', 'inactive', 'delete'],
                report: ['None', 'open', 'pending', 'resolve']
            }
        }
    };

    constructor() {
    }

    getMessages(key: any) {
        return this.lang[this.locale][key];
    }

    getMessagesRequire(keys: any = []) {
        keys = keys.map((key: any) => {
            return this.lang[this.locale][key];
        });
        keys = _.join(keys, ', ');
        return `${keys} is required`;
    }

    getMessageExist(key: any) {
        return `${key} is exist in System`;
    }

    getModuleName(key: any) {
        return this.lang[this.locale]['moduleName'][key];
    }

    getStatusList() {
        return this.lang[this.locale]['statusList'];
    }
}
