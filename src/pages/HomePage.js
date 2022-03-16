import React, { useState, useEffect } from "react";
import { Layout, Form, Input, Button, Typography, Anchor } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, loginUser } from "../store/actions/users";
import swal from 'sweetalert';
import '../css/homepage.css';
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = props => {

    const { Content } = Layout;
    const { Text } = Typography;
    const { Link } = Anchor;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLoggedIn = useSelector(state => state.users.loggedIn);
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [form, setForm] = useState(true);

    useEffect(() => {
        if (userLoggedIn) {
            navigate('/dashboard');
        }
    }, [userLoggedIn, navigate]);

    const onFinish = (values) => {
        if (values.username === "nishant.kumar4@icloud.com" && values.password === "12345678") {
            dispatch(loginUser());
            dispatch(getUsers());
            swal("", "You have successfully logged in!", "success");
        } else if (values.username !== "nishant.kumar4@icloud.com") {
            swal("", "You have entered a wrong username!", "error");
        } else {
            swal("", "You have entered a wrong password!", "error");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const toggleForm = () => {
        setForm(prevState => !prevState);
    }

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ textAlign: 'center' }}>Login/Signup</div>
                <div>
                    {
                        form ?
                            <Login toggleForm={toggleForm} />
                            :
                            <Signup toggleForm={toggleForm} />
                    }
                </div>
            </Content>
        </Layout>
    );
};

export default HomePage;