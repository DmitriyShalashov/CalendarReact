import { Layout,Row,Menu, Button } from 'antd';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useSelector';
import { RouteNames } from '../router';
import { logout } from '../utils/logout';

function NavBar() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {auth,user}=useTypeSelector(state=>state.auth)
    return ( 
        <Layout.Header>
            <Row justify='center'>
                {
                    auth
                    ?<Menu theme='dark' selectable={false} mode='horizontal' multiple style={{width:'600px', display:'flex', justifyContent:'center'}}> 
                        <Menu.Item key={'1'} 
                        >
                            {user.username}
                        </Menu.Item>
                        <Menu.Item key={'2'} 
                        onClick={()=>{
                            logout(dispatch)
                            navigate(RouteNames.LOGIN)
                        }}>Выйти 
                        </Menu.Item>
                    </Menu>
                    :<Menu theme='dark' selectable={false} mode='horizontal' style={{width:'600px', display:'flex', justifyContent:'center'}}>
                        <Menu.Item key={'1'}  onClick={()=>navigate(RouteNames.LOGIN)}>Войти</Menu.Item>
                    </Menu>
                    
                }   
            </Row>
        </Layout.Header>
     );
}

export default NavBar;