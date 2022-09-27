import { Moment } from "moment";

export const dateChange=(date:Moment)=>{
    const day=date.date()<10?`0${date.date()}`:`${date.date()}`
    const year=date.year()
    const month=date.month()<10?`0${date.month()}`:`${date.month()}`
    return year+'.'+month+'.'+day

}