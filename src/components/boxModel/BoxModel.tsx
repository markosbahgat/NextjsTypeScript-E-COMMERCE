import React from "react";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { showModel, essentialState } from "slices/essential.slice";
import { clearCart } from "slices/cart.slice";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

interface Props extends React.HTMLProps<HTMLAllCollection> {}

const BoxModel: React.FC<Props> = ({ children }) => {
	const { t } = useTranslation("common");
	const ShowModel = useAppSelector(essentialState);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const CloseBtn = () => {
		dispatch(showModel(false));
	};
	const sendBtn = () => {
		dispatch(showModel(false));
		router.push("/checkout");
	};
	const ClearBtn = () => {
		dispatch(clearCart());
	};
	return (
		<section className={styles.section} id={styles[`${ShowModel.boxModel && "show"}`]}>
			<div className={styles.popup_outer}>
				<div className={styles.popup_box}>
					<i id={styles.close} className="fas fa-close" onClick={CloseBtn}></i>
					<h1>{t("Cart Products")}</h1>
					<div style={{ width: "85%" }}>{children}</div>
					<div className={styles.button}>
						<button className={styles.clear} onClick={ClearBtn}>
							{t("Clear Cart")}
						</button>
						<button className={styles.cancel} onClick={CloseBtn}>
							{t("Continue Shopping")}
						</button>
						<button className={styles.send} onClick={sendBtn} type="submit">
							{t("Checkout")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BoxModel;
