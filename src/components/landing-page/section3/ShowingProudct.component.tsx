import React from 'react'
import Image from 'next/image';
import img from 'assets/img1.jpg';
import styles from './style.module.scss';

interface Props {}

const ShowingProduct:React.FC<Props> = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.header_title_container}>
                <h1>this is title forr showing product</h1>
            </div>
            <div className={styles.middel_container}>
                <div className={styles.img_container}><Image src={img} alt="productImg" layout='fill' priority/></div>
                <div className={styles.data_container}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem ipsum dolor sit </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus soluta rerum odio veniam quis vero omnis? Similique obcaecati recusandae consequuntur dignissimos dolore, earum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus distinctio maiores, est cumque dolorum expedita perspiciatis placeat suscipit voluptatibus, enim quae unde esse veritatis rerum! Voluptatum ducimus temporibus expedita dolore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
            <div className={styles.buttons_container}><button>Shop Now <i className="fa-solid fa-arrow-right-long"></i></button></div>
        </div>
    )
}

export default ShowingProduct