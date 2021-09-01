import { Carousel, Collapse, Layout, Modal, Typography, Col, Row } from 'antd';
import MenuBar from './MenuBar';
import EpisodeModal from './EpisodeModal';
import './styles.css'
import React, { useState } from 'react';
import { CloseOutlined, GithubOutlined } from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;

const { Panel } = Collapse;

export default function Episodes(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ });

    const showModal = (episode) => {
        setModalContent({ ep: episode, complement: props.episodesComplements[episode.id - 1] });
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    console.log(props.episodesComplements);

    const episodes = props.episodes.map((season, index) => (
        <Panel
            header={<Typography.Title level={4} style={{ color: '#68839d' }}> ↓ Season {index + 1}</Typography.Title>}
            key={index.toString()} showArrow={false} style={{ border: '1px solid #010c17', boxSizing: 'border-box' }}>
            <div style={{ color: 'white', backgroundColor: '#010c17' }}>
                <br />
                <Row gutter={16}>
                    {season.map((ep, jndex) => {
                        return (
                            <Col span={6}>
                                <center>
                                    <img src={props.episodesComplements[ep.id - 1]?.img} style={{ height: '90%', width: '90%' }} alt={props.episodesComplements[ep.id - 1]?.img} onClick={() => showModal(ep)} />
                                    <p key={(jndex).toString()} onClick={() => showModal(ep)} style={{ color: 'white' }}>
                                        <strong>{ep.episode}: </strong>{ep.name}
                                    </p>
                                </center>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Panel >
    ))

    const carouselImages = props.carouselImages.map((ci, index) => (
        <div key={index.toString()}>
            <div className="container" style={{
                backgroundColor: '#b0b0b0'
            }}>
                <img src={ci.img} alt={ci.descricao} style={{
                    height: '100%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '100%',
                }}
                />
                <div className="centered">
                    <Typography.Title level={1} style={{ color: 'white', textShadow: ' 2px 1px grey' }}>
                        {ci.descricao}
                    </Typography.Title>
                </div>
            </div>
        </div >
    ))

    return (
        <>
            <Layout>
                <Layout className="site-layout">
                    <Sider trigger={null} collapsible collapsed={false}>
                        <MenuBar defaultSelected="1"></MenuBar>
                    </Sider>
                    <Content
                        className="site-layout-background"
                        style={{
                            minHeight: 800,
                            backgroundColor: '#010c17'
                        }}
                    >
                        <Carousel autoplay>
                            {carouselImages}
                        </Carousel>

                        <Typography.Title level={2} style={{ color: 'white', padding: 24 }}>
                            Episodes
                        </Typography.Title>
                        <Collapse defaultActiveKey="0" ghost accordion style={{ backgroundColor: '#111c27' }}>
                            {episodes}
                        </Collapse>
                        <Footer style={{ color: 'white', textAlign: 'center', backgroundColor: '#111c27' }}>
                            Created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira <br/>
                            <GithubOutlined />  @Kathamala / @josevitoor
                        </Footer>        
                    </Content>
                                
                </Layout>             
            </Layout>
            <Modal visible={isModalVisible} closeIcon={<CloseOutlined style={{ color: 'white' }} />} onCancel={handleCancel} footer={null} centered bodyStyle={{ backgroundColor: '#111c27' }} >
                <EpisodeModal modalContent={modalContent} ></EpisodeModal>
            </Modal>
        </>
    )
}