import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useSelector';
import { IEvent, IUser } from '../models/types';
import { eventSlice } from '../store/reducers/calendar';
import { dateChange } from '../utils/dateChange';
import { rules } from '../utils/rules';

interface EventFormProps{
    guests:IUser[]
}

const EventForm:React.FC<EventFormProps>=(props)=>{

    const dispatch=useDispatch()
    const {events}=useTypeSelector(state=>state.event)
    const [guest, setGuest]=React.useState<string>('')
    const [title, setTitle]=React.useState<string>('')
    const [date, setDate]=React.useState<string>('')
    const {user}=useTypeSelector(state=>state.auth)

    const selectDate=(date:Moment|null)=>{
        if(date){
            setDate(dateChange(date))
        }    
    }
    const submit=()=>{
        const newEvent:IEvent={
            date,
            description:title,
            guest,
            author:user.username
        }
        let jsonEvents=JSON.stringify([...events,newEvent])
        localStorage.setItem('events',jsonEvents)
        dispatch(eventSlice.actions.setEvents(newEvent))
    }
    
    return ( 
        
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={()=>submit()}
            // onFinishFailed={()=>failed()}
        >
            <Row justify='start' style={{width:'400px'}}>
                <Form.Item
                    label="Событие"
                    name="descriptipon"
                    rules={[rules.required()]}
                >
                    <Input 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Дата"
                    name="date"
                    rules={[rules.required(),rules.isDateAfter('Нельзя добавить событие в прошлом')]}
                >
                    <DatePicker onChange={(e)=>selectDate(e)}/>
                </Form.Item>
                <Form.Item>
                    <Select style={{width:'400px'}}  value={guest} onChange={(e)=>setGuest(e)}>
                        {
                            props.guests.map(item=>
                                <Select.Option key={item.username}>{item.username}</Select.Option>
                            )
                        }
                    </Select>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
     );
}

export default EventForm;