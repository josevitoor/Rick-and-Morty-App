import './styles.css'
import MenuBar from './MenuBar';
import { Avatar, Modal, Row, Col, Typography, Layout } from 'antd';
import CharacterModal from './CharacterModal';
import { CloseOutlined, GithubOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Sider, Content, Footer } = Layout;

export default function Characters(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ });

    const showModal = (character) => {
        setModalContent(character);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const characters = props.characters.map((char, index) => (
        <Col span={4} key={index.toString()} onClick={() => showModal(char)}>
            <center>
                <Avatar size={128} src={char.image} />
                <Typography key={index.toString()} style={{ color: 'white' }}>
                    <strong>{char.name}</strong>
                    <br />
                    {char.species}
                </Typography>
            </center>
        </Col>
    ))

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={false}>
                    <MenuBar defaultSelected="2"></MenuBar>
                </Sider>

                <Layout className="site-layout">

                    <Content
                        className="site-layout-background"
                        style={{
                            minHeight: 800,
                            backgroundColor: '#010c17',
                        }}
                    >

                        <Typography.Title level={2} style={{ color: 'white', margin: '24px 16px', padding: 24 }}>
                            Characters
                        </Typography.Title>
                        <br />
                        <div style={{ display: 'inline' }}>
                            <Row gutter={16}>
                                {characters}
                            </Row>
                        </div>
                        <Footer style={{ color: 'white', textAlign: 'center', backgroundColor: '#111c27' }}>
                            Created by José Vítor de Freitas Cunha and Thiago Vinícius Azevedo de Oliveira <br/>
                            <GithubOutlined />  @Kathamala / @josevitoor
                        </Footer>  
                    </Content>
                </Layout>
            </Layout>

            <Modal visible={isModalVisible} closeIcon={<CloseOutlined style={{ color: 'white' }} />} onOk={handleOk} footer={null} onCancel={handleCancel} bodyStyle={{ backgroundColor: '#111c27' }}>
                <CharacterModal modalContent={modalContent}></CharacterModal>
            </Modal>
        </>
    )
}