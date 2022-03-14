import React from "react";
import oops from "assets/oops.png";
import Image from "next/image";
import styles from "styles/Error404.module.scss";
import Link from "next/link";
import { NextPage } from "next";

const Error404: NextPage = () => {
	return (
		<div className={styles.main_container}>
			<div className={styles.OopsImg}>
				<Image src={oops} alt="Oops!" layout="fill" />
			</div>
			<h4>404, This page is not found</h4>
			<div>
				<Link href="/home">
					<a className={styles.singin_button}>Home</a>
				</Link>
				<Link href="/profile">
					<a className={styles.gohome_button}>Profile</a>
				</Link>
			</div>
		</div>
	);
};
export default Error404;
