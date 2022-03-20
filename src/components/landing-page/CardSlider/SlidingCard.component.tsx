import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { IProduct } from "models/interfaces/product.model";
import ProductCard from "components/landing-page/CardSlider/product-card/product-card.component";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../store/hooks";
import { essentialState } from "../../../slices/essential.slice";

interface Props {
	products: IProduct[];
}

const SlidingCard: React.FC<Props> = ({ products }) => {
	const isMobile = useMediaQuery({ query: "(max-width:1000px)" });
	const state = useAppSelector(essentialState);
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={isMobile ? 0 : 30}
			slidesPerView={isMobile ? 1 : 3}
			navigation={!isMobile}
			loop
			className={styles.main_container}
			id={styles[`${state.darkMode && "dark"}`]}>
			{products.map((item) => (
				<SwiperSlide key={item.id}>
					<ProductCard product={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SlidingCard;
