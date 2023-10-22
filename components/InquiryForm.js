// components/InquiryForm.js

import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, InputNumber,notification } from 'antd';
import moment from 'moment';
import emailjs from 'emailjs-com';
import { showNotification } from './notification';

emailjs.init('xwAq-0ho-HD_8d_4j');
const  InquiryForm = (props)=>{
  const [form] = Form.useForm();
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [numberOfMembers, setNumberOfMembers] = useState('');
  const [formData, setFormData] = useState({
    checkinDate: '',
    checkoutDate: '',
    contactName: '',
    contactEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'checkinDate':
        setCheckinDate(value);
        break;
      case 'checkoutDate':
        setCheckoutDate(value);
        break;
      case 'contactName':
        setContactName(value);
        break;
      case 'contactEmail':
        setContactEmail(value);
        break;
      case 'numberOfMembers':
        setNumberOfMembers(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (values) => {

    showNotification(
      "Success!!",
      "The Inquiry Email has been sent!",
      "success"
    );
    props?.handleModalChangeFromform()

    // Send inquiry email using EmailJS
    // emailjs
    //   .send('service_0o92v6t', 'template_kwrsl22', {
    //     checkinDate: moment(values?.checkinDate).format('YYYY-MM-DD'),
    //     checkoutDate: moment(values?.checkoutDate).format('YYYY-MM-DD'),
    //     contactName: values?.contactName,
    //     contactEmail: values?.contactEmail,
    //     numberOfMembers: values?.numberOfMembers,
    //     villaName: villa?.name,
    //   })
    //   .then(() => {
    //     // Email sent successfully
    //     console.log('Email sent successfully');


    //     // Close the chat popup after submitting the form
    //     onClose();
    //   })
    //   .catch((error) => {
    //     // Email sending failed
    //     console.error('Email sending failed:', error);
    //   });
  };
  
  

  return (
    <div>
      <h4>Send an Inquiry</h4>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="checkinDate"
          label="Check-In Date"
          rules={[{ required: true, message: 'Please select a check-in date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="checkoutDate"
          label="Check-Out Date"
          rules={[{ required: true, message: 'Please select a check-out date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="contactName"
          label="Your Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="contactEmail"
          label="Your Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="numberOfMembers"
          label="Number of Members"
          rules={[{ required: true, message: 'Please enter the number of members' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Inquiry
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InquiryForm;