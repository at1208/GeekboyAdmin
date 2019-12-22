import React, { Component } from 'react';
import Header from '../header'
import './createContent.css'
import { Input, Select , InputNumber,  Cascader, Button } from 'antd';


const InputGroup = Input.Group;
const { Option } = Select;

const options = [
  {
    value: 'Active',
    label: 'Active',
  },
  {
    value: 'Inactive',
    label: 'Inactive',
  },
];


class CreateContent extends Component{
  render(){
    return <>
    <Header />
    <div className='container-fluid g1 row justify-content-center'>
     <div className='shadow col-md-5 g2'>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="id"  defaultValue="" />
    </div>

    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="User Name"  defaultValue="" />
    </div>


    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Password"  defaultValue="" />
    </div>


    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Mobile Number"  defaultValue="" />
    </div>


    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Role id"  defaultValue="" />
    </div>

    <InputGroup compact className='text-center'>
            <Cascader style={{ width: '30%' }} options={options} placeholder="Select Status" />
    </InputGroup>

    <Button block className='g3'>Create</Button>
    </div>
    </div>
    </>
  }
}
export default CreateContent;
