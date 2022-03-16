import React, { useState } from "react";
import { Layout, Form, Input, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, loginUser } from "../store/actions/users";
import swal from 'sweetalert';
import '../css/homepage.css';

const Login = props => {

    const { Content } = Layout;
    const { Text } = Typography;

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const appUsers = useSelector(state => state.users.appUsers);

    const onFinish = (values) => {
        const selectedUser = appUsers.find(user => user.username === values.username);
        if (selectedUser) {
            if (selectedUser.password !== values.password) {
                swal("Oops", "You have entered a wrong password!", "error");
            } else {
                dispatch(loginUser(selectedUser.name));
                dispatch(getUsers());
                swal("", "You have successfully logged in!", "success");
            }
        } else {
            swal("Accont doesn't exist", "You have entered a wrong username!", "error");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input type={"email"} value={username} onChange={val => setUsername(val)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password value={userpassword} onChange={val => setUserpassword(val)} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Text className="link" onClick={props.toggleForm}> Signup </Text>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Login;