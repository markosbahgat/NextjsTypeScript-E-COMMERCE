import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { IProduct } from 'models/interfaces/product.model';
import ProductCard from 'components/landing-page/CardSlider/product-card/product-card.component';


interface Props {
  products: IProduct[],
}

const SlidingCard: React.FC<Props> = ({products}) => {
    return ( 
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.main_container}
        >
        {products.map(item => (
          <SwiperSlide key={item.id}>
             <ProductCard product={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
     );
}
 
export default SlidingCard;