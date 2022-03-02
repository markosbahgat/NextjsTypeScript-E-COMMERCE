import React from 'react'
import { NextPage } from 'next';
import { HomeHOC } from 'HOC/home.hoc';
import styles from 'styles/home.module.scss';

const Home:NextPage = () => {
    
return (
    <div className={styles.main_home_container}>
        <HomeHOC/>
    </div>
  );
}

export default Home;