import { getTime } from "./getTime"
import { arrWeekShort, arrMonthFull, arrMonthShort, arrWeekFull } from "./data.names"


export const getFullTime=(value)=>{
        const details = getTime.dateTime(value, 'yy-mm-dd')
        const keys=  details !== 'Invalid Date Format' ? details.split(/[\s-:]+/) : []
        keys[1] = keys[1]-1
        const newDate = new Date(...keys)
        if(keys.length>0){
            return{
                D: newDate.getDate(),
                DD: arrWeekShort[newDate.getDay()],
                DDD: arrWeekFull[newDate.getDay()],
                M: newDate.getMonth()+1,
                MM:arrMonthShort[newDate.getMonth()],
                MMM:arrMonthFull[newDate.getMonth()],
                Y:newDate.getFullYear().toString().substr(-2),
                YY:newDate.getFullYear(),
                HRS: newDate.getHours().toString().length === 1 ? `0${newDate.getHours()}` : newDate.getHours(),
                hrs: newDate.getHours() > 12 ? newDate.getHours()-12 : newDate.getHours(),
                type: keys[3]>12 ? 'PM' : 'AM',
                MIN: newDate.getMinutes().toString().length === 1 ? `0${newDate.getMinutes()}` : newDate.getMinutes(),
                SEC: newDate.getSeconds()
            }
        }else{
            return 'Invalid Date Format'
        }
    }

    // shortYear.toString().substr(-2);