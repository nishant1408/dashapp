import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/actions/users";
import swal from 'sweetalert';
import axios from "axios";

const CreateItem = props => {

    const { Content } = Layout;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLoggedIn = useSelector(state => state.users.loggedIn);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');

    useEffect(() => {
        if (!userLoggedIn) {
            swal('You are not logged in', 'Please login to visit this page', "error");
            navigate('/home');
        }
    }, [userLoggedIn, navigate]);

    const onFinish = (values) => {
        const { name, username, email, street, suite, city, zipcode, lat, lng, phone, website } = values;
        axios.post("http://jsonplaceholder.typicode.com/users", values)
            .then(response => {
                dispatch(addUser(name, username, email, street, suite, city, zipcode, lat, lng, phone, website));
                swal("Success", "User Added Successfully", "success");
            })
            .catch(err => {
                swal("Error", err, "error")
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout">
            <Content className="form-container" >
                <div className="page-header">Create User</div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
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
                        <Input value={name} onChange={val => setName(val)} />
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
                        <Input value={username} onChange={val => setUsername(val)} />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
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
                        <Input type="email" value={email} onChange={val => setEmail(val)} />
                    </Form.Item>

                    <Form.Item
                        label="Street"
                        name="street"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your street!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Suite"
                        name="suite"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your suite!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your city!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Zipcode"
                        name="zipcode"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your zipcode!',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Lat"
                        name="lat"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lat!',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Long"
                        name="lng"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your long!',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input type="number" value={phone} onChange={val => setPhone(val)} />
                    </Form.Item>

                    <Form.Item
                        label="Website"
                        name="website"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your website!',
                            },
                        ]}
                    >
                        <Input value={website} onChange={val => setWebsite(val)} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Add User
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default CreateItem;