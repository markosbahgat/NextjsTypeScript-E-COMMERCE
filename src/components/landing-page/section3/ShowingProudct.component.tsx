import React from "react";
import Image from "next/image";
import img from "assets/img1.jpg";
import styles from "./style.module.scss";
import { useAppSelector } from 'store/hooks';
import { essentialState } from 'slices/essential.slice';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface Props {}

const ShowingProduct: React.FC<Props> = () => {
	const state = useAppSelector(essentialState);
	const { t } = useTranslation('common');
	return (
		<div className={styles.main_container} id={styles[`${state.darkMode && 'dark'}`]}>
			<div className={styles.header_title_container}>
				<h1>{t('This Is Title Forr Showing Product')}</h1>
			</div>
			<div className={styles.middel_container}>
				<div className={styles.img_container}>
					<Image src={img} alt="productImg" layout="fill" priority />
				</div>
				<div className={styles.data_container}>
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<p>Lorem ipsum dolor sit </p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus soluta rerum odio veniam quis
						vero omnis? Similique obcaecati recusandae consequuntur dignissimos dolore, earum.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus distinctio maiores, est cumque
						dolorum expedita perspiciatis placeat suscipit voluptatibus, enim quae unde esse veritatis
						rerum! Voluptatum ducimus temporibus expedita dolore.
					</p>
					<p>Lorem ipsum dolor sit amet consectetur</p>
				</div>
			</div>
			<div className={styles.buttons_container}>
				<button>
					<Link href="/products">
						<a>
							{t('Shop Now')} <i className="fa-solid fa-arrow-right-long"></i>
						</a>
					</Link>
				</button>
			</div>
		</div>
	);
};

export default ShowingProduct;
