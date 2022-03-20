import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import styles from "./switcher.module.scss";

interface Props {}

const Switcher = (props: Props) => {
	const router = useRouter();
	const changeLang = (lang: string) => {
		router.push(router.asPath, undefined, { locale: lang });
	};

	return (
		<div id={styles.select}>
			<select
				className="form-select"
				aria-label="Default select example"
				onChange={(e) => changeLang(e.target.value)}
				defaultValue={router.locale}>
				<option value="en">EN</option>
				<option value="ar">AR</option>
			</select>
		</div>
	);
};

export default Switcher;
