import React, { Component } from 'react';
import ReactDOM from 'react-router-dom'
import './offerLetter.css'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import DatePicker from "react-datepicker";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Drawer from './drawer'
import './drawer.css'
import Header from './header'

import { MdReorder } from "react-icons/md";



class OfferLetter extends Component {
pdfExportComponent;


  exportPDFWithComponent = () => { console.log(this.pdfExportComponent);
    if(!this.state.name){
      alert("Please fill the name");
      return false;
    }else if(!this.state.permanentAddress1 || !this.state.permanentAddress2 || !this.state.permanentAddress3){
      alert("Please fill the Address");
      return false;
    }else if(!this.state.startDate){
      alert("Please select the Date of Joining");
      return false;
    }else if(!this.state.desi){
      alert("Please fill the degisnation");
      return false;

    }
      this.pdfExportComponent.save();
        this.onSendMail(this.state.name,this.state.desi);

  }





  state = {

        startDate: '',
        name: '',
        permanentAddress1: '',
        permanentAddress2: '',
        permanentAddress3: '',
        desi: '',


      };

      startDateChange = date => {
          this.setState({
            startDate: date
          });
        };




      onSendMail = (name,designation) => {
        console.log(this.pdfExportComponent);

      fetch(`https://amantiwari.herokuapp.com/amantiwari12081999@gmail.com/Offer Letter/${name+'--'+designation}`)
        .then( result => this.setState({ status: console.log(result.status) }))
        .catch(err => console.log(err))
        console.log('message sent')
      }




  render(){
    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth()
    const day = d.getDay()
    const year = d.getFullYear()



const getDate = (day) => {
    if(day==0) return ' Mon '
    if(day==1) return ' Tue '
    if(day==2) return ' Wed '
    if(day==3) return ' Thu '
    if(day==4) return ' Fri '
    if(day==5) return ' Sat '
    if(day==6) return ' Sun '
    else{
      return 'Undefined'
    }
}

const GetMonth = (month) => {
    if(month == 0) return ' January'
    if(month == 1) return ' February'
    if(month == 2) return ' March'
    if(month == 3) return ' April'
    if(month == 4) return ' May'
    if(month == 5) return ' June'
    if(month == 6) return ' July'
    if(month == 7) return ' August'
    if(month == 8) return ' September'
    if(month == 9) return ' October'
    if(month == 10) return ' November'
    if(month == 11) return ' December'

    else {
    return   'Undefined'
    }



}

 const dayString = getDate(day)
 const monthString = GetMonth(month)
 const completeDate = date + monthString +', '+ year
 const onboardDate = new Date( this.state.startDate)
 const joindate =  onboardDate.getDate() + (GetMonth(onboardDate.getMonth()))+ ' '+ onboardDate.getFullYear()


console.log(joindate)
    return <div className=''>
    <Header />
    <div className='row col-md-12 justify-content-center'>
    <div className='c1 col-md-5 ' >
           <div className='c2'>
             <h1 className='text-center c3'> Offer Letter </h1>
             <h5 className='c3 text-center'>Create new offer letter</h5>
           </div>
           <div className='container col-md-5'>
           <Input placeholder="Enter Name"  className='c4' onChange={ e => this.setState({ name: e.target.value })} value={this.state.name} />

           <div className='c11 '>
           <h4>Permanent Address</h4>
           <Input placeholder="Address Line 1 eg. flat no. and colony"  className='c4' onChange={ e => this.setState({ permanentAddress1: e.target.value })} value={this.state.permanentAddress1} />
           <Input placeholder="Address Line 2 eg. city name"  className='c4' onChange={ e => this.setState({ permanentAddress2: e.target.value })} value={this.state.permanentAddress2} />
           <Input placeholder="State"  className='c4' onChange={ e => this.setState({ permanentAddress3: e.target.value })} value={this.state.permanentAddress3} />

           </div>

           <div className='row'>
           <Input placeholder="Date of onboard"  className='c4 col-9' value={this.state.startDate} />
           <DatePicker
           className='c6'
            placeholder='Select Date'
            selected={this.state.startDate}
            onChange={this.startDateChange}
            showTimeSelect


            dateFormat="MMMM d, yyyy"
            />

           </div>
           <Input placeholder="Designation"  className='c4' onChange={ e => this.setState({ desi: e.target.value})} value={this.state.desi}/>
           </div>

           <div className="  text-center c20">
                       <button className="k-button btn-md btn-primary" onClick={this.exportPDFWithComponent}>Download</button>

                   </div>


    </div>










          <div className='container c8 col-md-5'   >
<PDFExport  ref={(component) => this.pdfExportComponent = component} paperSize="A4">

             <div className='text-center'  >

              <img src='geekboy.jpg' className='c7'/>

             </div>
             <div className='c9'>
       {completeDate}
             </div>

             <div className='c10'>
       {this.state.name}
             </div>

             <div className='c10'>
        {this.state.permanentAddress1}
 <br />
        {this.state.permanentAddress2}
<br />
        {this.state.permanentAddress3}


      <div className='text-center c12'>
         <h5 className=''>Offer Letter</h5>
      </div>

      <div className='c13'>
         {"Dear " + this.state.name+ ','}
      </div>

<div>
Congratulations! We are very excited to have you on board!
</div>

<div className='container c14'>
{"The position we are offering you is that of "+ this.state.desi + ". Your working hours will be depend on company Requirement and Work."}
</div>

<div className='container c14'>
{"We would like you to start work on " + joindate+"."}
</div>

<div className='container c14'>
Please do E-sign the enclosed copy of this letter and return it within 7 days of offer letter released to indicate your acceptance of this offer.
</div>

<div className='container c14'>
We are confident you will be able to make a significant contribution to the success of our GeekBoy.tech Private Limited and look forward to working with you.
</div>

<div className='container c17'>
Sincerely,
 </div>

<img src='CHRO.jpeg' className='c21'/>
 <div className='container c15'>
Chirag Gupta
<br />
Chief Human Resource Officer
<br />
GeekBoy.tech Private Limited
  </div>

  <div className='c16 text-center container'>
  <h6>www.GeekBoy.tech</h6>
  </div>




             </div>

 </PDFExport>

          </div>

    </div>



    </div>
  }
}

export default OfferLetter;
