import React, { useState } from "react";
import { Layout, Form, Input, Button, Typography, Steps } from 'antd';
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

    const resetForm = () => {
        setName('');
        setUsername('');
        setUserpassword('');
    }

    const onFinish = (values) => {
        dispatch(addAppUser(values.name, values.username, values.password));
        resetForm();
        swal("Account Created", "Your Account is created, Please login!", "success");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout">
            <Content className="form-container">
            <div className="page-header">Signup</div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5
                    }}
                    wrapperCol={{

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
                        label="Email"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: "email",
                                message: "Please enter a valid email"
                            }
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
                            {
                                min: 8,
                                message: "Password should be minimum 8 characters"
                            }
                        ]}
                    >
                        <Input.Password value={userpassword} onChange={val => setUserpassword(val)} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset:5
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Signup
                        </Button>
                        <Text className="link" onClick={props.toggleForm}> Already a user? Login </Text>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Signup;