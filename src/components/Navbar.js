import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/users";
import swal from 'sweetalert';

const Navbar = props => {

    const { Header } = Layout;

    const userDetails = useSelector(state => state.users.loggedIn);
    const loggedInUserName = useSelector(state => state.users.loggedInUserName);

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setUserLoggedIn(userDetails);
    }, [userDetails]);

    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={userLoggedIn ? ["2"] : ["1"]}>
                    {
                        userLoggedIn ?
                            <>
                                <Menu.Item key="2"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/create">Create Item</Link></Menu.Item>
                                <Menu.Item key="4" onClick={() => {
                                    dispatch(logoutUser())
                                    swal("", "You have successfully logged out!", "success");
                                }}>Logout</Menu.Item>
                                <Menu.Item key="5">Hi {loggedInUserName}!</Menu.Item>
                            </>

                            :
                            <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                    }

                </Menu>
            </Header>
        </div>
    );
};

export default Navbar;