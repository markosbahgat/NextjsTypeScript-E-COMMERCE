import BoxModel from "components/boxModel/BoxModel";
import React, { HTMLProps } from "react";
import styles from "styles/HOC.module.scss";
import ProductCart from "../components/cart-product/Product-Cart.component";
import { useAppSelector } from "../store/hooks";
import { cartState } from "../slices/cart.slice";
import useTranslation from 'next-translate/useTranslation';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const CARTHOC = (props: Props) => {
	const state = useAppSelector(cartState);
	const { t } = useTranslation('common');
	return (
		<BoxModel>
			{state.cartProducts.length >= 1 ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						alignItems: "center",
					}}>
					<div className={styles.all_products_container}>
						{state.cartProducts?.map((product) => (
							<ProductCart product={product} key={product.id} />
						))}
					</div>
					<div style={{ width: "100%" }}>
						<hr style={{ height: "3px", backgroundColor: "black" }} />
						<div className={styles.price_container}>
							<h1>{t('OverAll Price') }:</h1>
							<span>${Math.round(state.overAllPrice)}</span>
						</div>
					</div>
				</div>
			) : (
				<h1
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						alignItems: "center",
						overflow: "auto",
						height: "50vh",
					}}>
						{t('No Products in the cart!')}
				</h1>
			)}
		</BoxModel>
	);
};
