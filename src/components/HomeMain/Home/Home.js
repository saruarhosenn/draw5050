import React from 'react';
import AboutText from '../AboutText/AboutText';
import Banner from '../Banner/Banner';
import Newslatter from '../Newslatter/Newslatter';
import Question from '../Question/Question';
import StateSelectMenu from '../StateSelectMenu/StateSelectMenu';
import './Home.css'
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <StateSelectMenu></StateSelectMenu>
            <AboutText></AboutText>
            <Question></Question>
            <Newslatter></Newslatter>
        </>
    );
};

export default Home;