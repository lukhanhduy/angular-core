export default class UserValidate{
    private rules:any = {
        'email': {
            required: true,
            length: {
                gt: 6
            }
        },
        "password": {
            required: true,
            length: {
                gt: 6,
                lt: 5
            }
        },
        "firstName":{
            required: true,
            length: {
                gt: 2,
            }
        },
        "lastName":{
            required: true,
            length: {
                gt: 2,
            }
        }
    }
    constructor(){

    }
}