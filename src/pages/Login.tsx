import { Layout, Row } from 'antd';
import React from 'react';

import LoginForm from '../components/LoginForm';


function Login(){

    return ( 
        <Layout>
          <Row justify='center' align='middle' style={{height:'100vh'}}>
              <LoginForm/>
          </Row>
        </Layout>
     );
}

export default Login;
