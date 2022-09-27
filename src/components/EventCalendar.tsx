import { Calendar } from 'antd';
import { Moment } from 'moment';
import * as React from 'react';
import { useTypeSelector } from '../hooks/useSelector';
import { IEvent } from '../models/types';
import { dateChange } from '../utils/dateChange';

interface EventCaledarProps{
    events:IEvent[]
}

const EventCalendar:React.FC<EventCaledarProps>=(props)=>{
    const {events}=useTypeSelector(state=>state.event)
    const {user}=useTypeSelector(state=>state.auth)
    const dateCellRender = (value: Moment) => 
    {
        const formatedDate=dateChange(value)
        const currentDayEvents=events.filter(ev=>ev.date===formatedDate)
        return (
        <div>
            {currentDayEvents.map((ev,index)=>
            (ev.author===user.username||ev.guest===user.username)&&<div key={index} style={{textAlign:'center', fontWeight:'bold'}}>
                <p>{ev.description} <span style={{color:'royalblue'}}>{ev.guest}</span></p>
            </div>
            )
            }
        </div>
        );
    };
    return ( 
        <Calendar dateCellRender={dateCellRender}/>
     );
}

export default EventCalendar;