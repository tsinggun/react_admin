import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {LoginWrapper} from './style'
import * as Api from '@/service/login'
import { useDebounceFn } from 'ahooks';

let timer: any;


const Login: React.FC = () => {

  const onFinish = async (values: any) => {
    console.log(values);
    // const debounceValue = useDebounce(values)
    // if
    // console.log('Success:', values);
    // const res = await Api.userLogin(values)
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { run } = useDebounceFn(onFinish,{wait: 200})

  return (
    <LoginWrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={run}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="登录账号"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
};

export default Login;