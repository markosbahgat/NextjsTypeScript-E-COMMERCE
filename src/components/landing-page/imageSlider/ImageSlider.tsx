import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import img1 from "assets/img1.jpg";
import img2 from "assets/img2.jpg";
import img3 from "assets/img3.jpg";
import img4 from "assets/img4.jpg";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useAppSelector } from "../../../store/hooks";
import { essentialState } from "../../../slices/essential.slice";

interface Props {}

const ImageSlider: React.FC<Props> = () => {
	const { t } = useTranslation("common");
	const state = useAppSelector(essentialState);
	let counter = 0;
	const [i, setI] = useState<number>(0);
	const images = [img1, img1, img2, img3, img4];
	const Slider = () => {
		if (counter > images.length - 2) {
			setI(0);
			counter = 0;
		}
		counter++;
		setI((i) => i + 1);
		setTimeout(() => Slider(), 3000);
	};
	useEffect(() => {
		Slider();
	}, []);
	const handleScroll = () => {
		window.scrollTo({ top: 1850, behavior: "smooth" });
	};
	return (
		<div className={styles.banner} id={styles[`${state.darkMode && "dark"}`]}>
			<div className={styles.slider}>
				<Image src={images[i]} alt="backgroundImage" id={styles.slideImg} layout="fill" />
			</div>
			<div className={styles.overlay}>
				<div className={styles.navbar}></div>
				<div className={styles.slideShow_content}>
					<h1>{t("ONLINE STORE WEBSTIE")}</h1>
					<span>{t("Lorem")}</span>
					<a onClick={handleScroll}>{t("Explore Latest Categories")}</a>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
