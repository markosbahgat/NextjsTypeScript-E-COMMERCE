import React from "react";
import { NextPage } from "next";
import styles from "styles/products.module.scss";
import { PRODUCTSHOC } from "../HOC/products.hoc";

const Products: NextPage = () => {
	return (
		<div className={styles.main_home_container}>
			<PRODUCTSHOC />
		</div>
	);
};

export default Products;
