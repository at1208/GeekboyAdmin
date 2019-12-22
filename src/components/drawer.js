
import React from 'react';
import './drawer.css'
import { Drawer, Button,  } from 'antd';
import { MdReorder } from "react-icons/md";
import { Link } from 'react-router-dom'



class SideDrawer extends React.Component {

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <MdReorder type="primary" onClick={this.showDrawer} className='drawer-icon'>
          Open
        </MdReorder>
        <Drawer
          title="Admin"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Link to='/offerLetter'><p>Offer Letter</p></Link>
          <Link to='/userManagement'><p>User Management</p></Link>
          <Link to='/'><p>Logout</p></Link>


        </Drawer>
      </div>
    );
  }
}

 export default SideDrawer;
