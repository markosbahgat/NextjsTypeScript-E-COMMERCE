import React from "react";
import styles from "./ConfirmCheckout.module.scss";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "components/checkout/checkoutForm.component";

interface Props {
	handlePrevBtn: () => void;
	handleSubmitBtn: () => void;
	register: UseFormRegister<FormValues>;
	isValid: boolean;
}

const ConfirmCheckout: React.FC<Props> = ({ handleSubmitBtn, handlePrevBtn, register, isValid }) => {
	return (
		<div style={{ position: "relative" }}>
			<div className={styles.title}>Login Details:</div>
			<div className={styles.field}>
				<div className={styles.label}>Username</div>
				<input type="text" {...register("UserName", { required: true })} />
			</div>
			<div className={styles.field}>
				<div className={styles.label}>Password</div>
				<input type="password" {...register("Password")} />
			</div>
			<div className={styles.field} id={styles.btns}>
				<button type="button" className={styles.prev_3} id={styles.prev} onClick={handlePrevBtn}>
					Previous
				</button>
				<button type="submit" disabled={!isValid} className={styles.submit} onClick={handleSubmitBtn}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default ConfirmCheckout;
