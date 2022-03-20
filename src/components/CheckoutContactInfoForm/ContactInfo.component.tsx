import React from "react";
import styles from "./contactInfo.module.scss";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "components/checkout/checkoutForm.component";

interface Props {
	handleNextBtn: () => void;
	register: UseFormRegister<FormValues>;
	isValid: boolean;
}

const ShippingInfo: React.FC<Props> = ({ handleNextBtn, register, isValid }) => {
	const handleNext = () => {
		handleNextBtn();
	};
	return (
		<div>
			<div className={styles.title}>Basic Info:</div>
			<div className={styles.names_container}>
				<div className={styles.field}>
					<div className={styles.label}>First Name</div>
					<input type="text" {...register("First_Name")} />
				</div>
				<div className={styles.field}>
					<div className={styles.label}>Last Name</div>
					<input type="text" {...register("Last_Name")} />
				</div>
			</div>
			<div className={styles.fullWidth_field}>
				<div className={styles.label}>Email</div>
				<input type="email" {...register("Email")} />
			</div>
			<div className={styles.fullWidth_field}>
				<div className={styles.label}>Phone Number</div>
				<input type="phone" {...register("Phone_Number")} />
			</div>
			<div className={styles.fullWidth_field}>
				<div className={styles.label}>Company</div>
				<input type="text" {...register("Company")} />
			</div>
			<div className={styles.fullWidth_field}>
				<div className={styles.label}>Postal Code</div>
				<input
					type="number"
					{...register("Postal_Code", {
						required: { value: true, message: "please enter the postal code because its required" },
					})}
				/>
			</div>
			<div className={styles.fullWidth_field}>
				<button
					type="button"
					disabled={!isValid}
					className={styles.firstNext}
					id={styles.next}
					onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
};

export default ShippingInfo;
