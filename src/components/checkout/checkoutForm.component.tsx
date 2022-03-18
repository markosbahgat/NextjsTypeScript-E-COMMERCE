import React, { useState } from "react";
import styles from "./checkout.module.scss";
import { useForm } from 'react-hook-form';
import { IContact, IShipping, IConfirm } from '../../models/interfaces/checkoutContactInfo.model';
import ContactInfo from "components/CheckoutContactInfoForm/ContactInfo.component";
import ShippingInfo from "components/ShippingInfo/ShippingInfo.component";
import ConfirmCheckout from "components/ConfirmCheckout/ConfirmCheckout.component";
import  useTranslation  from 'next-translate/useTranslation';

interface Props { }
export interface FormValues extends IContact, IShipping, IConfirm {}

const CheckoutForm: React.FC<Props> = () => {
	const { t } = useTranslation('common');
	const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormValues>({mode:"all"});
	const [IsActive, setActive] = useState<number>(0);
	const onSubmit = (data: FormValues) => {
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

	}
	const handlePrevBtn = () => {
		setActive((IsActive) => IsActive - 1);
	};
	const props = { handleNextBtn, handlePrevBtn, register, isValid, handleSubmitBtn };
	return (
		<div className={styles.container}>
			<header>{t('Checkout information')}</header>
			<div className={styles.progress_bar}>
			<div className={styles.step}>
			<p id={styles[`${IsActive && "active"}`]}>Name</p>
			<div className={styles.bullet} id={styles[`${IsActive && "active"}`]}>
				<span>1</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive && "active"}`]} onClick={() => setActive(0)}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${IsActive > 1 && "active"}`]}>Contact</p>
			<div className={styles.bullet} id={styles[`${IsActive > 1 && "active"}`]}>
				<span>2</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive > 1 && "active"}`]} onClick={() => setActive(1)}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${IsActive > 2 && "active"}`]}>Birth</p>
			<div className={styles.bullet} id={styles[`${IsActive > 2 && "active"}`]}>
				<span>3</span>
			</div>
			<div className={styles.check} id={styles[`${IsActive > 2 && "active"}`]} onClick={() => setActive(2)}>
				<i className="fa-solid fa-check"></i>
			</div>
			</div>
			</div>
			<div className={styles.form_outer} hidden={IsActive >= 3 && true}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{IsActive >= 0 && (
						<div className={styles.page}  id={styles[`${IsActive >= 1 && 'NextMove1'}`]}>
							<ContactInfo {...props}/>
						</div>
					)}
					{IsActive >= 1 && (
						<div className={styles.page} id={styles[`${IsActive === 2  && 'NextMove2'}`]}>
							<ShippingInfo {...props}/>
						</div>
					)}
					{IsActive >= 2 && (
						<div className={styles.page} id={styles[`${IsActive >= 2 && 'NextStedy'}`]}>
							<ConfirmCheckout {...props}/>
						</div>
					)}
				</form> 
			</div>
			<h1 hidden={IsActive < 3 && true}>Congratulations Mohter Fucker</h1>
	</div>
	);
};

export default CheckoutForm;
