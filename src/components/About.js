import './styles.css'
import MenuBar from './MenuBar';
import React from 'react';
import { Layout, Typography } from 'antd';

const { Sider, Content } = Layout;

export default function About(props) {

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={false}>
                    <MenuBar defaultSelected="3"></MenuBar>
                </Sider>

                <Layout className="site-layout">

                    <Content
                        className="site-layout-background"
                        style={{
                            minHeight: 910,
                            backgroundColor: '#010c17'
                        }}
                    >
                        <Typography.Title level={2} style={{ color: 'white', margin: '24px 16px', padding: 24 }}>
                            About
                        </Typography.Title>
                        <Typography style={{ color: 'white', margin: '24px 16px', padding: 24 }}>Description</Typography>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}