import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SignUpForm.module.scss";
import { IUser } from "models";

interface Props {
	onSubmit: (data: IUser) => void;
}

const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUser>();
	const [showPassword1, setShowPassword1] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword1((showPassword1) => !showPassword1);
	};

	return (
		<main className={styles.login_block}>
			<h1 className={styles.page_title}>First Step</h1>
			<h5 className={styles.title_span}>Personal Information</h5>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.LoginForm}>
				<div className={styles.input_container}>
					<label className={styles.input_label}>Full Name</label>
					<input
						type="text"
						id={styles[`${errors.name && "error"}`]}
						className={styles.input_field}
						placeholder="Enter your Full Name...."
						{...register("name", { required: true })}
					/>
					<i className="fas fa-envelope fa-lg"></i>
				</div>
				<div className={styles.input_container}>
					<label className={styles.input_label}>Email Address</label>
					<input
						type="email"
						id={styles[`${errors.email && "error"}`]}
						className={styles.input_field}
						placeholder="Enter your email"
						{...register("email", {
							required: true,
							pattern:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
						})}
						
					/>
					<i className="fas fa-envelope fa-lg"></i>
					{errors.email?.type === "required" && <span color="red">Please Confirm Email</span>}
				</div>
				<div className={styles.input_container}>
					<label className={styles.input_label}>User Name</label>
					<input
						id={styles[`${errors.username && "error"}`]}
						className={styles.input_field}
						placeholder="Enter your userName"
						{...register("username", { required: true })}
						type="text"
					/>
					<i className="fas fa-lock fa-lg"></i>
					{errors.username?.type === "required" && <span color="red">This field is required</span>}
				</div>
				<div className={styles.input_container}>
					<label className={styles.input_label}>Password</label>
					<input
						id={styles[`${errors.password && "error"}`]}
						type={showPassword1 ? "text" : "password"}
						className={styles.input_field}
						placeholder="Enter your password"
						{...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}
					/>
					<i className="fas fa-lock fa-lg"></i>
					<div onClick={handleClickShowPassword} className={styles.visibility_icon}>
						{showPassword1 ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
					</div>
					{errors.password?.type === "required" && <span color="red">Please Confirm Password</span>}
				</div>
				<button type="submit" className={styles.singin_button}>
					Continue
				</button>
			</form>
		</main>
	);
};

export default SignUpForm;
