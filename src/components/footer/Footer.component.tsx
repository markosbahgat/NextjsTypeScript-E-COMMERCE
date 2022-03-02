import React from 'react';
import styles from './Style.module.scss';

interface Props {}
const FixedBottomFooter: React.FC<Props> = () => {
    return ( 
  <footer>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.logo_details}>
          <i className="fab fa-slack"></i>
          <span className={styles.logo_name}>MarkosBahgat</span>
        </div>
        <div className={styles.media_icons}>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className={styles.link_boxes}>
        <ul className={styles.box}>
          <li className={styles.link_name}>Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className={styles.box}>
          <li className={styles.link_name}>Services</li>
          <li><a href="#">App design</a></li>
          <li><a href="#">Web design</a></li>
          <li><a href="#">Logo design</a></li>
          <li><a href="#">Banner design</a></li>
        </ul>
        <ul className={styles.box}>
          <li className={styles.link_name}>Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul className={styles.box}>
          <li className={styles.link_name}>Courses</li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Photoshop</a></li>
        </ul>
        <ul className={styles.box} id={styles.input_box}>
          <li className={styles.link_name}>Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className={styles.bottom_details}>
      <div className={styles.bottom_text}>
        <span className={styles.copyright_text}>Copyright © 2021 <a href="#">MarkosBaghat.</a>All rights reserved</span>
        <span className={styles.policy_terms}>
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>

     );
}
 
export default FixedBottomFooter;