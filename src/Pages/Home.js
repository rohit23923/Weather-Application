import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import bgimg from '../Assests/bg.jpg';
import Form from '../Components/Form';
import Info from '../Components/Info';
import Sevendays from '../Components/Sevendays';

const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  width: '85%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    width: '70%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%',
  },
}));

const Information = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  padding: '10px',
  [theme.breakpoints.up('md')]: {
    width: '72%',
    height: '90%',
  },
}));

const Image = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgimg})`,
  width: '100%',
  height: '40vh',
  backgroundSize: 'cover',
  borderRadius: '20px',
  [theme.breakpoints.up('md')]: {
    width: '28%',
    height: '90%',
    borderRadius: '20px 0 0 20px',
  },
}));

const Home = () => {
  const [result, setResult] = useState({});
  const [sevenDaysData, setSevendata] = useState(null);

  return (
    <>
      <Container>
        <Image />
        <Information>
          <Form setresult={setResult} />
          <Info result={result} setSevendata={setSevendata} />
        </Information>
      </Container>
      <Sevendays sevenDaysData={sevenDaysData} />
    </>
  );
};

export default Home;
