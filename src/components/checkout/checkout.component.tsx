import React, { useState, useRef } from "react";
import styles from "./checkout.module.scss";
import { useForm } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';

interface Props { }

const CheckoutForm: React.FC<Props> = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<IContact>();
	const [bulletIsActive, setBulletActive] = useState<number>(0);
	const Slides = useRef<HTMLDivElement | null>(null);
	const slideMoves = Slides.current?.style;
	const onSubmit = (data: IContact) => {
		console.log(data)
	};

	
	const handleNextBtn = () => {
		switch (bulletIsActive) {
			case 0:
				console.log("fuck")
				slideMoves?.marginLeft = "-25%";
				break;
				case 1:
				console.log("yeah man")
				slideMoves?.marginLeft = "-50%";
				break;
			case 2:
				slideMoves?.marginLeft = "-75%";
				break;
			default:
				slideMoves?.marginLeft = "-25%";
				break;
		}
		setBulletActive((bulletIsActive) => bulletIsActive + 1);
	};
	const handleSubmitBtn = () => {
		setBulletActive((bulletIsActive) => bulletIsActive + 1);
		setTimeout(function () {
			alert("Your Form Successfully Signed up");
			window.location.reload();
		}, 800);
	};
	const handlePrevBtn = () => {
		switch (bulletIsActive) {
			case 1:
				slideMoves?.marginLeft = "0%";
				break;
			case 2:
				slideMoves?.marginLeft = "-25%";
				break;
			case 3:
				slideMoves?.marginLeft = "-50%";
				break;
			default:
				break;
			}
		setBulletActive((bulletIsActive) => bulletIsActive - 1);
	};
	
	return (
		<div className={styles.container}>
			<header>Checkout information</header>
			<div className={styles.progress_bar}>
			<div className={styles.step}>
			<p id={styles[`${bulletIsActive && "active"}`]}>Name</p>
			<div className={styles.bullet} id={styles[`${bulletIsActive && "active"}`]}>
				<span>1</span>
			</div>
			<div className={styles.check} id={styles[`${bulletIsActive && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${bulletIsActive > 1 && "active"}`]}>Contact</p>
			<div className={styles.bullet} id={styles[`${bulletIsActive > 1 && "active"}`]}>
				<span>2</span>
			</div>
			<div className={styles.check} id={styles[`${bulletIsActive > 1 && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${bulletIsActive > 2 && "active"}`]}>Birth</p>
			<div className={styles.bullet} id={styles[`${bulletIsActive > 2 && "active"}`]}>
				<span>3</span>
			</div>
			<div className={styles.check} id={styles[`${bulletIsActive > 2 && "active"}`]}>
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
		<div className={styles.step}>
			<p id={styles[`${bulletIsActive === 4 && "active"}`]}>Submit</p>
			<div className={styles.bullet} id={styles[`${bulletIsActive === 4 && "active"}`]}>
				<span>4</span>
			</div>
			<div className={styles.check} id={styles[`${bulletIsActive === 4 && "active"}`]}>
				<i className="fa-solid fa-check"></i>
				</div>
			</div>		
		</div>
		<div className={styles.form_outer}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.page} ref={Slides}>
					<div className={styles.title}>Basic Info:</div>
					<div className={styles.names_container}>
						<div className={styles.field}>
							<div className={styles.label}>First Name</div>
							<input type="text" {...register("First_Name")} />
						</div>
						<div className={styles.field}>
							<div className={styles.label}>Last Name</div>
							<input type="text" {...register("Last_Name")}/>
						</div>
					</div>
					<div className={styles.fullWidth_field}>
						<div className={styles.label}>Email</div>
						<input type="email" {...register("Email")}/>
					</div>
					<div className={styles.fullWidth_field}>
						<div className={styles.label}>Phone Number</div>
						<input type="phone" {...register("Phone_Number")}/>
					</div>
					<div className={styles.fullWidth_field}>
						<div className={styles.label}>Company</div>
						<input type="text" {...register("Company")}/>
					</div>
					<div className={styles.fullWidth_field}>
						<div className={styles.label}>Postal Code</div>
						<input type="number" {...register("Postal_Code")}/>
					</div>
					<div className={styles.fullWidth_field}>
						<p   className={styles.firstNext} id={styles.next} onClick={handleNextBtn}>
							Next
						</p>
					</div>
				</div>
				<div className={styles.page}>
					<div className={styles.title}>Contact Info:</div>
					<div className={styles.field}>
						<div className={styles.label}>Email Address</div>
						<input type="text" />
					</div>
					<div className={styles.field}>
						<div className={styles.label}>Phone Number</div>
						<input type="Number" />
					</div>
					<div className={styles.field} id={styles.btns}>
						<p className={styles.prev_1} id={styles.prev} onClick={handlePrevBtn}>
							Previous
						</p>
						<p className={styles.next_1} id={styles.next} onClick={handleNextBtn}>
							Next
						</p>
					</div>
				</div>
				<div className={styles.page}>
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
				<div className={styles.page}>
					<div className={styles.title}>Login Details:</div>
					<div className={styles.field}>
						<div className={styles.label}>Username</div>
						<input type="text" />
					</div>
					<div className={styles.field}>
						<div className={styles.label}>Password</div>
						<input type="password" />
					</div>
					<div className={styles.field} id={styles.btns}>
						<p className={styles.prev_3} id={styles.prev} onClick={handlePrevBtn}>
							Previous
						</p>
						<p className={styles.submit} onClick={handleSubmitBtn}>
							Submit
						</p>
					</div>
				</div>
			</form> 
		</div>
	</div>
	);
};

export default CheckoutForm;
