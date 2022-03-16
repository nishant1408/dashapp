import React, { useState } from "react";
import { Layout, Form, Input, Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { addAppUser, getUsers, loginUser } from "../store/actions/users";
import swal from 'sweetalert';
import '../css/homepage.css';

const Signup = props => {

    const { Content } = Layout;
    const { Text } = Typography;

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onFinish = (values) => {
        dispatch(addAppUser(values.name, values.username, values.password));
        swal("Account Created", "Your Account is created, Please login!", "success");
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
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input type="text" value={name} onChange={val => setName(val)} />
                    </Form.Item>

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
                        <Input type="email" value={username} onChange={val => setUsername(val)} />
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
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password value={confirmPassword} onChange={val => setConfirmPassword(val)} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Signup
                        </Button>
                        <Text className="link" onClick={props.toggleForm}> Login </Text>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Signup;