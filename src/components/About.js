import './styles.css'
import MenuBar from './MenuBar';
import React from 'react';
import { Layout, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;

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
                            minHeight: 950,
                            backgroundColor: '#010c17'
                        }}
                    >
                        <Typography.Title level={2} style={{ color: 'white', margin: '24px 16px', padding: 24 }}>
                            About
                        </Typography.Title>
                        <Typography style={{ color: 'white', margin: '24px 16px', padding: 24 }}>This website was created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira. 
                        It lists every episode from the Rick And Morty series, and every character that ever appeard on the show.</Typography>
                        <Footer style={{ color: 'white', textAlign: 'center', backgroundColor: '#111c27' }}>
                            Created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira <br/>
                            <GithubOutlined />  @Kathamala / @josevitoor
                        </Footer>                          
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}