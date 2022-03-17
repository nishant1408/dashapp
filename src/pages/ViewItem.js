import { Layout, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { UserOutlined, MailTwoTone, PhoneTwoTone, ApiTwoTone, EnvironmentTwoTone, ShopTwoTone } from '@ant-design/icons';

const ViewItem = props => {

    const { Content } = Layout;

    const urlParams = useParams();
    const userId = urlParams.id;
    const navigate = useNavigate();
    const userDetail = useSelector(state => state.users.users.find(user => user.id == userId));

    const userLoggedIn = useSelector(state => state.users.loggedIn);

    useEffect(() => {
        if (!userLoggedIn) {
            swal('You are not logged in', 'Please login to visit this page', "error");
            navigate('/home');
        }
    }, [userLoggedIn]);

    return (
        userDetail ?
            <Layout className="layout">
                <Content>
                    {/* <div className="page-header">User Details</div> */}
                    <div className="card">
                        <div className="custom-section">
                            <div style={{ display: 'inline-block', padding: '0px 20px 0px 0px' }}>
                                <span className="custom-image">
                                    <Avatar size={100} icon={<UserOutlined />} />
                                </span>
                            </div>
                            <div style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p className="custom-user-name">{userDetail.name} </p>
                                <p className="custom-user-username"> {userDetail.username}</p>
                            </div>
                        </div>
                        <hr color="#ccc" />
                        <div className="custom-section">
                            <p className="custom-user-section-title">Contact Details</p>
                            <div className="contact-section">
                                <div className="contact-section-item">
                                    <MailTwoTone /><a className="custom-user-email">{userDetail.email}</a>
                                </div>
                                <div className="contact-section-item">
                                    <PhoneTwoTone /><a className="custom-user-email">{userDetail.phone}</a>
                                </div>
                            </div>
                            <div className="contact-section">
                                <div className="contact-section-item">
                                    <EnvironmentTwoTone /><a className="custom-user-email">
                                        {userDetail.address.street + ', ' + userDetail.address.suite + ', ' + userDetail.address.city + ' - ' +userDetail.address.zipcode}
                                    </a>
                                </div>
                                <div className="contact-section-item">
                                    <ApiTwoTone color="blue" /><a className="custom-user-email">{userDetail.website}</a>
                                </div>
                            </div>
                            <div className="contact-section">
                                <div className="contact-section-item">
                                    <ShopTwoTone /><a className="custom-user-email">
                                        {userDetail.company.name}
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="item-container">
                        <p><span className="item-label">Name : </span>{userDetail.name}</p >
                        <p>UserName : {userDetail.username}</p>
                        <p>Email : {userDetail.email}</p>
                        <p>Address : {userDetail.address.street + ", " + userDetail.address.suite + ", " + userDetail.address.city + " - " + userDetail.address.zipcode}</p>
                        <p>Phone : {userDetail.phone}</p>
                        <p>Website : {userDetail.website}</p>
                        <p>Company : {userDetail.company.name + " - " + userDetail.company.catchPhrase + " ( " + userDetail.company.bs + " ) "}</p>
                    </div> */}
                </Content>
            </Layout>
            :
            null
    );
};

export default ViewItem;