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