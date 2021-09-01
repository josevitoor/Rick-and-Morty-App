import './styles.css'
import MenuBar from './MenuBar';
import React from 'react';
import { Layout, Typography, Avatar, Row, Col } from 'antd';
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
                        <Row >
                            <Col span={12}>
                                <img src={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/rick-and-morty-1200x900-1.jpg'} style={{ width: '90%', height: '90%', margin: '24px 16px', padding: 24 }} alt={'Rick and Morty Sinopse'} />
                            </Col>
                            <Col span={12}>
                                <div style={{ width: '100%', padding: 40 }}>
                                    <Typography.Title level={5} style={{ color: 'white' }}>Rick and Morty Sinopse</Typography.Title>
                                    <Typography style={{ color: 'white' }}>
                                        Created by Justin Roiland and Dan Harmon, Rick and Morty is an animated comedy series that showcases the interdimensional adventures of Rick, the brightest mind in the galaxy, and his grandson Morty.
                                        <br />
                                        <br />
                                        With his weapon capable of creating portals for time-space travel, Rick takes Morty to explore all the absurd forms of life that the universe is capable of supporting.
                                        <br />
                                        <br />
                                        Despite his genius, Rick suffers from alcoholism and has a conflicted relationship with his family, the result of his cynical view of life and his selfishness. On the other hand, Morty is far from having his grandfather's intellect, but he's the only one capable of making him be a little bit nicer.
                                        <br />
                                        <br />
                                        Between hilarious moments and interesting reflections on life, Rick and Morty starts laughing and still yields great philosophical discussions.
                                    </Typography>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={8} style={{ marginLeft: '15%' }}>
                                <center>
                                    <Avatar size={256} src={'https://avatars.githubusercontent.com/u/30449427?v=4'}></Avatar>
                                    <Typography.Title level={4} style={{ color: 'white', margin: '24px 16px', padding: 24 }}>
                                        José Vitor
                                    </Typography.Title>
                                </center>
                            </Col>
                            <Col span={8}>
                                <center>
                                    <Avatar size={256} src={'https://avatars.githubusercontent.com/u/30270495?v=4'}></Avatar>
                                    <Typography.Title level={4} style={{ color: 'white', margin: '24px 16px', padding: 24 }}>
                                        Thiago Vinícius
                                    </Typography.Title>
                                </center>
                            </Col>
                        </Row>
                        <Row style={{ marginLeft: '40px', marginBottom: '20px' }}>
                            <Typography style={{ color: 'white' }}>This website was created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira.
                                It lists every episode from the Rick And Morty series, and every character that ever appeard on the show.
                            </Typography>
                        </Row>
                        <Footer style={{ backgroundColor: '#111c27' }}>
                            <Typography style={{ color: 'white', textAlign: 'center' }}>
                                Created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira <br />
                                <a href={'https://github.com/Kathamala'} target="_blank" rel="noreferrer"><GithubOutlined /> @Kathamala</a> | <a href={'https://github.com/josevitoor'} target="_blank" rel="noreferrer"><GithubOutlined /> @josevitoor</a>
                            </Typography>
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}