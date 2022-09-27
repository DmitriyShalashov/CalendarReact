import {Button, Layout, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useTypeSelector } from '../hooks/useSelector';
import { fetchGuests } from '../utils/fetchGuests';




function Event(){
  const [modalVisible, setModalVisible]=useState(false)
  const dispatch=useDispatch()
  const {guests,events}=useTypeSelector(state=>state.event)
  useEffect(()=>{
    fetchGuests(dispatch)
  },[])


  return ( 
        <Layout>
          <Row justify='center' style={{height:'50px'}} align='middle'>
              <Button style={{width:'200px',height:'30px'}}
                onClick={()=>setModalVisible(true)}
              >
                Добавить событие
              </Button>
          </Row>
          <EventCalendar events={events}/>
          <Modal
            title='Добавить событие'
            open={modalVisible}
            footer={null}
            onCancel={()=>setModalVisible(false)}
          >
              <EventForm guests={guests}/>
          </Modal>
        </Layout>
     );
}

export default Event;

