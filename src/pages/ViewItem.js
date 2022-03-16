import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ViewItem = props => {

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
            <div>
                <p>Name : {userDetail.name}</p >
                <p>UserName : {userDetail.username}</p>
                <p>Email : {userDetail.email}</p>
                <p>Address : {userDetail.address.street + ", " + userDetail.address.suite + ", " + userDetail.address.city + " - " + userDetail.address.zipcode}</p>
                <p>Phone : {userDetail.phone}</p>
                <p>Website : {userDetail.website}</p>
                <p>Company : {userDetail.company.name + " - " + userDetail.company.catchPhrase + " ( " + userDetail.company.bs + " ) "}</p>
            </div>
            :
            <div></div>
    );
};

export default ViewItem;