import { Button, Form, Input } from 'antd';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useSelector';
import { RouteNames } from '../router';
import { login } from '../utils/login';
import { rules } from '../utils/rules';


function LoginForm() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName]=useState<string>('')
    const [password, setPassword]=useState<string>('')

    const {user,error,isLoading}=useTypeSelector(state=>state.auth)

    const submit=()=>{
        login(name,password,dispatch)
        if(error!==''){
           alert(error)
        }
        else{
            navigate(RouteNames.EVENT)
            console.log(user,error)
        }
    }
    const failed=()=>{
        alert(error)
    }

    return ( 
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={()=>submit()}
            onFinishFailed={()=>failed()}
            autoComplete="off"
        >
            <Form.Item
                label="Имя"
                name="username"
                rules={[rules.required('Пожалуйста, введите имя')]}
            >
                <Input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль')]}
            >
                <Input.Password 
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
     );
}

export default LoginForm;