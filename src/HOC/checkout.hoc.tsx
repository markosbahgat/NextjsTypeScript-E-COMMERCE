import React, { HTMLProps } from "react";
import { useAppSelector } from "store/hooks";
import { cartState } from "slices/cart.slice";
import ItemsContianer from "components/checkout/items.component";
import Link from "next/link";
import CheckoutForm from "components/checkout/Checkout.component";
import styles from 'styles/CheckoutHOC.module.scss';

interface Props extends HTMLProps<HTMLAllCollection> { }

export const CHECKOUTHOC = (props: Props) => {
	const state = useAppSelector(cartState);
	if (state.cartProducts.length > 0) {
		return (
			<div className={styles.checkout_container}>
				<CheckoutForm />
				<ItemsContianer cartProucts={state.cartProducts} total={state.overAllPrice} />
			</div>
		);
	} else {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "30px",
					textAlign: "center",
					minHeight: "100vh",
				}}>
				<p style={{ fontSize: "30px" }}>Go Shopping and Get Some Products in the Cart, Man!</p>
				<Link href="/products">
					<a
						style={{
							color: "black",
							textDecoration: "none",
							padding: "0.5em 1em",
							boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
							fontSize: "20px",
							borderRadius: "10px",
						}}>
						Go To Products
					</a>
				</Link>
			</div>
		);
	}
};
