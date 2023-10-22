import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
// import fs from 'fs';
// import path from 'path';
import styles from '../styles/mainContiner.module.scss';
import { Card, Row, Col, Avatar,Modal,Carousel,FloatButton, Button, Radio, Space, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import InquiryForm from '../components/InquiryForm';


const { Meta } = Card;
const Home = ({ imagePaths }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inqModalVisible, setInqModalVisible] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [selectedOccasion, setSelectedOccasion] = useState('vacation'); 
  
  const openModal = (images) => {
    setCarouselImages(images);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCarouselImages([]);
  };
  const handleBtnClick = () => {
    if(inqModalVisible){
      setInqModalVisible(false);
    }else if(!inqModalVisible){
      setInqModalVisible(true);
    }
  };

  const handleModalChange = () => {
    if(inqModalVisible){
      setInqModalVisible(false);
    }else if(!inqModalVisible){
      setInqModalVisible(true);
    }
  };
  const handleModalChangeFromform = ()=>{
    setInqModalVisible(false);
  }
  


  const imageInfo = [
    {
      src: 'v11.jpg',
      title: 'Holiday Villa 1',
      description: 'This is the description for Villa 1',
      price: 1000,
      detailImageSrc: ['v11.jpg', 'v14.jpg',],
      occasion: 'Holiday',
    },
    {
      src: 'v12.jpg',
      title: 'vacation Villa 1',
      description: 'This is the description for Villa 1',
      price: 1200,
      occasion: 'vacation',
      detailImageSrc: ['v12.jpg', 'v14.jpg',],
    },
    {
      src: 'v13.jpg',
      title: 'Holiday Villa 2',
      description: 'This is the description for Villa 2',
      price: 900,
      detailImageSrc: ['v13.jpg', 'v14.jpg',],
      occasion: 'Holiday',
    },
    {
      src: 'v14.jpg',
      title: 'vacation Villa 2',
      description: 'This is the description for Villa 2',
      price: 1000,
      detailImageSrc: ['v14.jpg', 'v14.jpg',]
    },
    {
      src: 'v15.jpg',
      title: 'vacation Villa 3',
      description: 'This is the description for Villa 3',
      price: 1200,
      price: 1200, detailImageSrc: ['v15.jpg', 'v14.jpg',],
      occasion: 'vacation',

    },
    {
      src: 'v16.jpg',
      title: 'Holiday Villa 3',
      description: 'This is the description for Villa 3',
      price: 900,
      price: 1200, detailImageSrc: ['v16.jpg', 'v14.jpg',],
      occasion: 'Holiday',

    },
    {
      src: 'v11.jpg',
      title: 'vacation Villa 4',
      description: 'vacation This is the description for Villa 4',
      price: 1000,
      detailImageSrc: ['v11.jpg', 'v14.jpg',],
      occasion: 'vacation',
    },
    {
      src: 'v11.jpg',
      title: 'vacation Villa 5',
      description: 'This is the description for Villa 5',
      price: 1000,
      detailImageSrc: ['v11.jpg', 'v14.jpg',],
      occasion: 'vacation',
    },
    {
      src: 'v16.jpg',
      title: 'vacation Villa 2',
      description: 'This is the description for Villa 2',
      price: 1000,
      detailImageSrc: ['v11.jpg', 'v14.jpg',],
      occasion: 'vacation',
    },
  ];

  const handleOccasionChange = (occasion) => {
    setSelectedOccasion(occasion);
  };
  const filteredImageInfo = imageInfo.filter((image) => image?.occasion === selectedOccasion);


  return (
<>
      <Row gutter={[16, 16]}>
      <div className={styles.menuBar}>
        <NavBar />
      </div>
      <div className={styles.filterBtns}>
          <Radio.Group value={selectedOccasion}>
          <Radio.Button 
              value="vacation"
              onClick={() => handleOccasionChange('vacation')}
          >
            Vacation Villas
          </Radio.Button>
          <Radio.Button 
            value="Holiday"
            onClick={() => handleOccasionChange('Holiday')}
          >
            Holiday Villas
          </Radio.Button>
        </Radio.Group>
        </div>
      {filteredImageInfo?.map((image, index) => (
        <Col span={8} className="gutter-row" key={index}>
          <Card 
            title={<span className={styles.MainTitle}>{image.title}</span>} 
            hoverable
            onClick={() => openModal(image.detailImageSrc?.map(src => `/uploads/${src}`))}
          >
            <img src={`/uploads/${image.src}`} className={styles.cardImage} />
            <div className={styles.metaData}>
            <Meta
              // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={`₹${image.price}`}
              description={image.description}
            />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
    <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        centered
        width={800}
      >
        <Carousel autoplay dotPosition='top'>
          {carouselImages?.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} className={styles.cardImageInmodule} />
            </div>
          ))}
        </Carousel>
      </Modal>
      <Modal
        visible={inqModalVisible}
        onCancel={handleModalChange}
        footer={null}
        centered
        width={800}
      >
        <InquiryForm handleModalChangeFromform={handleModalChangeFromform}/>
      </Modal>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" onClick={handleBtnClick}/>

    {/*  <Row gutter={[16, 16]}>
       <div className={styles.menuBar}>
         <NavBar />
       </div>
       {imagePaths?.map((imagePath, index) => (
         <Col span={8} className="gutter-row" key={index}>
           <Card title={`Villa ${index + 1}`} hoverable>
             <img src={`/uploads/${imagePath}`} className={styles.cardImage} />
             <Meta
               avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
               title="Card title"
               description="This is the description"
             />
           </Card>
         </Col>
       ))}
     </Row> */}
    </>
  );
};

// export async function getServerSideProps() {
//   const uploadsDir = path.join(process.cwd(), 'public/uploads');
//   const imagePaths = fs.readdirSync(uploadsDir);

//   return {
//     props: { imagePaths },
//   };
// }

export default Home;
