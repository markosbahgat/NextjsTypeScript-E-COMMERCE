import React, { useState } from "react";
import styles from "./checkout.module.scss";
import { useForm } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';
import ContactInfo from "components/CheckoutContactInfoForm/ContactInfo.component";
import ShippingInfo from "components/ShippingInfo/ShippingInfo.component";
import ConfirmCheckout from "components/ConfirmCheckout/ConfirmCheckout.component";

interface Props { }

const CheckoutForm: React.FC<Props> = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<IContact>();
	const [IsActive, setActive] = useState<number>(0);
	const onSubmit = (data: IContact) => {
		console.log(data)
	};

	
	const handleNextBtn = () => {
		console.log(IsActive)
		setActive((IsActive) => IsActive + 1);
	};
	const handleSubmitBtn = () => {
		setActive((IsActive) => IsActive + 1);
		setTimeout(function () {
			alert("Your Form Successfully Signed up");
			window.location.reload();
		}, 800);
	};
	const handlePrevBtn = () => {
		setActive((IsActive) => IsActive - 1);
	};
	
	return (
		<div className={styles.container}>
			<header>Checkout information</header>
			<div className={styles.progress_bar}>
			<div className={styles.step}>
			<p id={styles[`${IsActive && "active"}`]}>Name</p>
			<div className={styles.bullet} id={styles[`${IsActive && "active"}`]}>
				<span>1</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${IsActive > 1 && "active"}`]}>Contact</p>
			<div className={styles.bullet} id={styles[`${IsActive > 1 && "active"}`]}>
				<span>2</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive > 1 && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${IsActive > 2 && "active"}`]}>Birth</p>
			<div className={styles.bullet} id={styles[`${IsActive > 2 && "active"}`]}>
				<span>3</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive > 2 && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
			</div>
			</div>
			{IsActive < 3 ? (
				<div className={styles.form_outer}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.page}  id={styles[`${IsActive >= 1 && 'NextMove1'}`]}>
							<ContactInfo handleNextBtn={handleNextBtn} />
						</div>
						<div className={styles.page} id={styles[`${IsActive === 2  && 'NextMove2'}`]}>
							<ShippingInfo handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
						</div>
							<div className={styles.page} id={styles[`${IsActive >= 2 && 'NextStedy'}`]}>
							<ConfirmCheckout handlePrevBtn={handlePrevBtn} handleSubmitBtn={handleSubmitBtn} />
						</div>
					</form> 
				</div>

			) : ( 
					<h1>Congratulations Mohter Fucker</h1>
			)}
	</div>
	);
};

export default CheckoutForm;
