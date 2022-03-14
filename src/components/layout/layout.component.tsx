import BoxModel from "components/boxModel/BoxModel";
import FixedBottomFooter from "components/footer/Footer.component";
import TopNavbar from "components/Navbar/TopNavbar.component";
import { CARTHOC } from "HOC/cart.hoc";
import React, { HTMLProps } from "react";
import styles from "./style.module.scss";

interface Props extends HTMLProps<HTMLAllCollection> {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className={styles.layout_container}>
				<div className={styles.header}>
					<TopNavbar />
				</div>
				<div className={styles.childern_container}>{children}</div>
				<div className={styles.footer}>
					<FixedBottomFooter />
				</div>
			</div>
			<CARTHOC />
		</>
	);
};

export default Layout;
