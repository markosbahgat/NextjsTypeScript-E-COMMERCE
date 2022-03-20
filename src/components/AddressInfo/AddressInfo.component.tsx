import React from "react";
import styles from "./AddressInfo.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { IContact } from "../../models/interfaces/checkoutContactInfo.model";

interface Props {
	handlePrevBtn: () => void;
	handleNextBtn: () => void;
}

const AddressInfo: React.FC<Props> = ({ handleNextBtn, handlePrevBtn }) => {
	const { register } = useForm<IContact>();
	return (
		<div style={{ position: "relative" }}>
			<div className={styles.title}>Date of Birth:</div>
			<div className={styles.field}>
				<div className={styles.label}>Date</div>
				<input type="text" />
			</div>
			<div className={styles.field}>
				<div className={styles.label}>Gender</div>
				<select>
					<option>Male</option>
					<option>Female</option>
					<option>Other</option>
				</select>
			</div>
			<div className={styles.field} id={styles.btns}>
				<p className={styles.prev_2} id={styles.prev} onClick={handlePrevBtn}>
					Previous
				</p>
				<p className={styles.next_2} id={styles.next} onClick={handleNextBtn}>
					Next
				</p>
			</div>
		</div>
	);
};

export default AddressInfo;
