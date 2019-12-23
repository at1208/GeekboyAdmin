import React, { Component } from 'react';
import Header from '../header'
import './createContent.css'
import { Input, Select , InputNumber,  Cascader, Button } from 'antd';
import { DatePicker } from 'antd';
import { Upload, Icon, message } from 'antd';
import TextEditor from './textEditor'





const InputGroup = Input.Group;
const { Option } = Select;



function onChange(date, dateString) {
  console.log(date, dateString);
}




function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
  console.log(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}










class CreateContent extends Component{

  state = {
  loading: false,


};




handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };





  render(){

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;


    return <>
    <Header />
    <div className='container-fluid g1 row justify-content-center'>
     <div className='shadow g2 container'>




<TextEditor />


<div style={{ marginBottom: 16 }}>
     <Select
       showSearch
       style={{ width: 500 }}
       placeholder="Select Content Type"
       optionFilterProp="children"
       onChange={(value) =>    this.setState({ status: value }) }

       filterOption={(input, option) =>
         option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
       }
     >

       <Option value="Mobile">Mobile</Option>
       <Option value="Game">Game</Option>
       <Option value="Headphone">Headphone</Option>
       <Option value="Laptop">Laptop</Option>
       <Option value="Leaks & Rumors">Leaks & Rumors</Option>
     </Select>
</div>

<div style={{ marginBottom: 16 }}>
     <Select
       showSearch
       style={{ width: 500 }}
       placeholder="Select Status"
       optionFilterProp="children"
       onChange={(value) =>    this.setState({ status: value }) }

       filterOption={(input, option) =>
         option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
       }
     >

       <Option value="Active">Active</Option>
       <Option value="Inactive">Inactive</Option>

     </Select>
</div>

    <div style={{ marginBottom: 16 }}>
          <DatePicker onChange={onChange} placeholder='Select Posted date'  style={{ width: 500 }}/>
    </div>

    <div style={{ marginBottom: 16 }}>
         <Select
           showSearch
           style={{ width: 500 }}
           placeholder="Select Status"
           optionFilterProp="children"
           onChange={(value) =>    this.setState({ status: value }) }

           filterOption={(input, option) =>
             option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
           }
         >

           <Option value="Dikshant Gautam">Dikshant Gautam</Option>
           <Option value="Amit Singh Rawat">Amit Singh Rawat</Option>
           <Option value="Anmol Raj Chauhan">Anmol Raj Chauhan</Option>
           <Option value="Abhishek Naagar">Abhishek Naagar</Option>
           <Option value="Aman Sharma">Aman Sharma</Option>

         </Select>
    </div>


    <div style={{ marginBottom: 16 }} className=''>
    <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </div>



    <Button block className='g3'>Create</Button>
    </div>
    </div>
    </>
  }
}
export default CreateContent;
