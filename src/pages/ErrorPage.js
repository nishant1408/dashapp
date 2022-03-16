import React from "react";
import { Layout } from 'antd';

const ErrorPage = props => {

    const { Content } = Layout;

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Page Not Found</div>
            </Content>
        </Layout>
    );
};

export default ErrorPage;