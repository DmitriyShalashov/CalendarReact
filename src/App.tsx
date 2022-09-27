import {Layout} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserService from './api/UserService';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { IEvent, IUser } from './models/types';
import { authSlice } from './store/reducers/auth';
import { eventSlice } from './store/reducers/calendar';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const user=UserService.checkAuth()
    if(user.username!==''){
      dispatch(authSlice.actions.setUser(user))
      dispatch(authSlice.actions.setAuth(true))
    }
    let events=localStorage.getItem('events')
    if(events!==null){
      const newEvents =JSON.parse(events)
      console.log(newEvents)
      newEvents.forEach((element:IEvent) => {
        dispatch(eventSlice.actions.setEvents(element))
      });
      
    }
  },[])
  return (
    <div className="App">
      <Layout>
        <NavBar/>
        <Layout.Content>
          <AppRouter/>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
