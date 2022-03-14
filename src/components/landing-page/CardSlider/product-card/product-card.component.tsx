import React, { HTMLProps } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import logo from "assets/logo.jpg";
import { IProduct } from "models/interfaces/product.model";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { appendCart, increament } from "slices/cart.slice";
import { cartState } from "slices/cart.slice";
import { showModel } from "slices/essential.slice";

interface Props extends HTMLProps<HTMLAllCollection> {
	product: IProduct;
}

const handleSlidePage = (e: any) => {
	if (e.target.classList.contains("circle")) {
		const circle = document.querySelector(".color_option .active") as HTMLDivElement;
		const mainImg = document.querySelector(".main_images .active") as HTMLDivElement;
		const secondImg = document.querySelector(`.main_images .${e.target.id}`) as HTMLDivElement;
		circle.classList.remove("active");
		e.target.classList.add("active");
		mainImg.classList.remove("active");
		secondImg.classList.add("active");
	}
};
const ProductCard: React.FC<Props> = ({ product }) => {
	const dispatch = useAppDispatch();
	const state = useAppSelector(cartState);
	const handleAppendCart = () => {
		if (state.cartProducts.length > 0) {
			const SameProuduct = state.cartProducts.find((item) => item.id === product.id);
			if (SameProuduct) dispatch(increament({ product: product, amount: SameProuduct.amount + 1 }));
			else dispatch(appendCart({ ...product, amount: 1 }));
		} else {
			dispatch(appendCart({ ...product, amount: 1 }));
		}
	};
	return (
		<div className={styles.product_card}>
			<div className={styles.logo_cart}>
				<div className={styles.cart_img_container}>
					<Image src={logo} alt="logo" className={styles.cart_img} />
				</div>
				<i className="fas fa-shopping-bag" onClick={() => dispatch(showModel(true))}></i>
			</div>
			<div className={styles.main_images}>
				<Link href={"/product/" + product.id}>
					<a>
						<div className={styles.product_img}>
							<Image src={product.image} alt="blue" id={styles.img} layout="fill" priority />
						</div>
					</a>
				</Link>
			</div>
			<div className={styles.shoe_details}>
				<span className={styles.shoe_name}>{product.title.slice(0, 20)}....</span>
				<p>{product.description.slice(0, 50)}.....</p>
			</div>
			<div className={styles.price}>
				<span className={styles.price_num}>PRICE: ${product.price}</span>
			</div>
			<div className={styles.buttons_container}>
				<div className={styles.button} onClick={() => dispatch(showModel(true))}>
					<div className={styles.button_layer}></div>
					<button>
						<i className="fa-solid fa-cart-shopping"></i> Cart
					</button>
				</div>
				<div className={styles.button} onClick={() => handleAppendCart()}>
					<div className={styles.button_layer}></div>
					<button>Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
