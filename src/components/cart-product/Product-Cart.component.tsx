import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import { IProWithAmount } from "../../models/interfaces/product.model";
import { decreament, increament, removeCart } from "slices/cart.slice";
import { useAppDispatch } from "../../store/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from 'react-responsive';

interface Props {
	product: IProWithAmount;
}

const ProductCart: React.FC<Props> = ({ product }) => {
	const isMobile = useMediaQuery({query:"(max-width:1000px)"})
	const dispatch = useAppDispatch();
	const notify = () => toast("Product has been succsussfuly Deleted..!");
	const handleDec = () => {
		if (product.amount > 1) {
			dispatch(decreament({ product: product, amount: product.amount - 1 }));
		}
	};
	const handleInc = () => {
		dispatch(increament({ product: product, amount: product.amount + 1 }));
	};
	const handleDelete = () => {
		dispatch(removeCart({ product: product, amount: product.amount }));
		notify();
	};

	return (
		<>
			<ToastContainer />
			<div className={styles.main_container}>
				<div className={styles.main_img_container}>
					<div className={styles.img_contaienr}>
						<Image src={product.image} alt="productCart" priority layout="fill" />
					</div>
					<div className={styles.name_container}>
						<h1>{product.title.slice(0, 11)}....</h1>
						<p>{isMobile? `$${product.price}` :  product.description.slice(0, 30)}</p>
					</div>
				</div>
				<div className={styles.data_container}>
					{!isMobile && <p>${product.price}</p>}
					<hr />
					<div className={styles.ProductCount_container}>
						<button onClick={handleDec}>
							<i className="fa-solid fa-minus"></i>
						</button>
						<div>{product.amount}</div>
						<button onClick={handleInc}>
							<i className="fa-solid fa-plus"></i>
						</button>
					</div>
					<div className={styles.delete_container} onClick={handleDelete}>
						<i className="fa-solid fa-trash-can"></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCart;
