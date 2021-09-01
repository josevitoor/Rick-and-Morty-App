import { Menu, Affix } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';

import {
  VideoCameraOutlined,
  UserOutlined,
  SolutionOutlined
} from '@ant-design/icons';

class MenuBar extends React.Component {

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    return (
      <Affix >

        <Link to="/">
          <center>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Rick And Morty Logo" style={{ height: '80%', width: '80%', marginBottom: '20px', marginTop: '20px' }} />
          </center>
        </Link>
        <Menu
          defaultSelectedKeys={this.props.defaultSelected}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            <Link to="/">Episodes</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/characters">Characters</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>

      </Affix>
    );
  }
}

export default MenuBar;