import React, { useState , useEffect} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginWrapper } from './style'
import * as Api from '@/service/login'
import { useDebounceFn, useLocalStorageState } from 'ahooks';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { saveToken } from '@/store/festures/userInfo';


const Login: React.FC = () => {

  const [ form ] = Form.useForm();
  const [checked, setChecked] = useState<boolean>(false)
  const [acountInfo, setAccountInfo] = useLocalStorageState<string | undefined>(
    'acountInfo',
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()



  /**
   * @description checkedbox改变
   * @param e 
   */
  const checkedChange = (e: any) => { 
    setChecked(e.target.checked)
  }

  /**
   * @description 提交表单
   * @param values 
   */
  const onFinish = () => {
    form.validateFields().then(
      async loginData => {
        const res = await  Api.userLogin(loginData)
      }
    )
  };
  const { run } = useDebounceFn(onFinish,  {wait: 200} )

  /**
   * @description 查询是否有记住密码
   */
  const checkIsRemenberPassWord = () => { 
      if(!acountInfo){
        console.log(`没有账号信息`);
      }else{
        setChecked(true)
        form.setFieldsValue({
          username: JSON.parse(acountInfo).username,
          password: JSON.parse(acountInfo).password,
        })
      }
  }
  useEffect(
    checkIsRemenberPassWord
    ,[]
  )

  return (
    <LoginWrapper>
      <div className='form-box'>
        <span className='title'>
         欢迎登陆
        </span>
        <Form
          form={form}
          colon={false}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          requiredMark="optional"
        >
          <Form.Item
            label="登录账号"
            name="username"
            rules={[{ required: true, message: '请输入登录账号!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入登录密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <div className='operate-bar'>
              <Checkbox onChange={checkedChange} checked={checked}>
                记住密码
              </Checkbox>

              <Button onClick={run} type={"primary"}>登录</Button>
          </div>

        </Form>

      </div>
    </LoginWrapper>
  )
};

export default Login;