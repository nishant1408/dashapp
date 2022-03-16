import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table, Layout } from "antd";
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";

const Dashboard = props => {

    const navigate = useNavigate();
    const userLoggedIn = useSelector(state => state.users.loggedIn);
    const usersList = useSelector(state => state.users.users);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!userLoggedIn) {
            swal('You are not logged in', 'Please login to visit this page', "error");
            navigate('/home');
        }
    }, [userLoggedIn]);

    useEffect(() => {
        setUsers(usersList);
    }, [usersList]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: address =>
                address.street + ", " + address.suite + ", " + address.city + " - " + address.zipcode
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website'
        }
    ];

    const { Content } = Layout;

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Dashboard</div>
                <Table
                    dataSource={users}
                    columns={columns}
                    onRow={(record) => ({
                        onClick: () => {
                            navigate('/dashboard/' + record.id);
                        }
                    })
                    }
                    rowKey={(record) => record.id}
                    pagination={false}
                />
            </Content>
        </Layout>
    );
};

export default Dashboard;