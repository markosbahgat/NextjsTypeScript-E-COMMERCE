import BoxModel from "components/boxModel/BoxModel";
import FixedBottomFooter from "components/footer/Footer.component";
import TopNavbar from "components/Navbar/TopNavbar.component";
import { CARTHOC } from "HOC/cart.hoc";
import React, { HTMLProps } from "react";
import styles from "./style.module.scss";

interface Props extends HTMLProps<HTMLAllCollection> {}

const Layout: React.FC<Props> = ({ children }) => {
	const [showBtn, setShowBtn] = React.useState<boolean>(false)
	window.addEventListener('scroll', () => {
		if (window.scrollY > 600) setShowBtn(true)
		else setShowBtn(false)
	})
	const handleGoUp = () => {
		window.scrollTo({
			top: 0,
			behavior:"smooth"
		})
	}
	return (
		<>
			
			<div style={{display:`${showBtn ? 'block': 'none'}`}} className={styles.up_container}>
				<button onClick={handleGoUp}><i className="fa-solid fa-angles-up"></i></button>
			</div>
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
