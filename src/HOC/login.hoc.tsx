import React, { HTMLProps } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import styles from "styles/HOC.module.scss";
import { authState } from "../slices/newUser.slice";
import SignUpForm from "../components/sign-inForm/SignUpForm.component";
import { PostNewUser } from "middelwares";
import { IUser } from "models";
import { SubmitHandler } from "react-hook-form";

interface Props extends HTMLProps<HTMLAllCollection> {}

export const LogInHOC = (props: Props) => {
	const state = useAppSelector(authState);
	const dispatch = useAppDispatch();
	const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
		const { email, name, password, username } = data;

		if (email && password && name && username) {
			dispatch(PostNewUser(data));
		} else {
			alert("error password or email is not the same");
		}
	};
	return (
		<div className={styles.Login_container}>
			<SignUpForm onSubmit={onSubmit} />
		</div>
	);
};
