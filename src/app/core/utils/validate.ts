import * as _ from 'lodash';
export default class Validate{
    constructor(){
    }
    async check(data:any, ruleCheck:any){
        let errors:any = [];
        await Promise.all(
            Object.keys(ruleCheck).map((field:any)=>{
                let rules:any = ruleCheck[field];
                Object.keys(rules).map((rule:any)=>{
                    if( rule === 'required' &&  rules[rule] === true){
                        if(_.isUndefined(data[field])){
                            errors.push({field: field, rule: rule});
                        }
                    }
                    if( rule === 'length'){
                        if(!data[field]){
                            errors.push({field: field, rule: rule});
                        }
                        else{
                            if( rules[rule]["gt"] ){
                                if(data[field].length < rules[rule]["gt"]){
                                    errors.push({field: field, rule: "gt", option: { value: rules[rule]["gt"]}})
                                }
                                if(data[field].length < rules[rule]["lt"]){
                                    errors.push({field: field, rule: "lt", option: { value: rules[rule]["lt"]}})
                                }
                            }
                        }
                    }
                }) 
            })
        )
        return errors;
    }
}