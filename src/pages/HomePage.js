import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/homepage.css';
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = props => {

    const { Content } = Layout;

    const navigate = useNavigate();

    const userLoggedIn = useSelector(state => state.users.loggedIn);
    const [form, setForm] = useState(true);

    useEffect(() => {
        if (userLoggedIn) {
            navigate('/dashboard');
        }
    }, [userLoggedIn, navigate]);

    const toggleForm = () => {
        setForm(prevState => !prevState);
    }

    return (
        <Layout className="layout">
            <Content className="custom-container">
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