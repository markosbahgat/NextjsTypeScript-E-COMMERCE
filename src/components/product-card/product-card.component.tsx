import React, { HTMLProps } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import logo from './assets/logo.jpg'
import product1 from './assets/blue.png'
import product2 from './assets/yellow.png'
import product3 from './assets/pink.png'
import { IProduct } from '../../models/interfaces/product.model';


interface Props extends HTMLProps<HTMLAllCollection>{
    product:IProduct
}

const handleSlidePage = (e:any) => {
    if(e.target.classList.contains("circle")){
        const circle = document.querySelector('.color_option .active') as HTMLDivElement;
        const mainImg = document.querySelector(".main_images .active") as HTMLDivElement;
        const secondImg = document.querySelector(`.main_images .${e.target.id}`) as HTMLDivElement;
        circle.classList.remove("active");
        e.target.classList.add("active");
        mainImg.classList.remove("active")
        secondImg.classList.add("active")
    }
    
}
const ProductCard: React.FC<Props> = ({product}) => {
    return ( 
        <div className={styles.product_card}>
            <div className={styles.logo_cart}>
                <div className={styles.cart_img_container}>
                    <Image src={logo} alt="logo" className={styles.cart_img} />
                </div>
                <i className="fas fa-shopping-bag"></i>
            </div>
            <div className={styles.main_images}>
                <div className={styles.product_img} id={styles.active}>
                    <Image src={product.image} alt="blue" id={styles.img} layout="fill" priority />
                </div>
            </div>
        <div className={styles.shoe_details}>
                <span className={styles.shoe_name}>{product.title.slice(0, 20)}....</span>
                <p>{product.description.slice(0, 50)}.....</p>
                <div className={styles.stars}>
                    <span>{product.rating.rate}</span>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half'></i>
                </div>
                </div>
                <div className={styles.color_price}>
                <div className={styles.color_option} onClick={(e) => handleSlidePage(e)}>
                    <span className={styles.color}>Colour:</span>
                    <div className={styles.circles}>
                    <span className={styles.circle}  id={styles.blue}></span>
                    <span className={styles.circle} id={styles.pink}></span>
                    <span className={styles.circle} id={styles.yellow}></span>
                    </div>
                </div>
                <div className={styles.price}>
                    <span className={styles.price_num}>${product.price}</span>
                    <span className={styles.price_letter}>fees: Nine dollar only</span>
                </div>
                </div>
                <div className={styles.button}>
                <div className={styles.button_layer}></div>
                <button>Add To Cart</button>
                </div>
</div>
     );
}
 
export default ProductCard;