import useTranslation  from 'next-translate/useTranslation';
import React from "react";
import { essentialState } from "slices/essential.slice";
import { useAppSelector } from "store/hooks";
import styles from "./style.module.scss";

interface Props {}

const Counter: React.FC<Props> = () => {

	const { t } = useTranslation('common');
	const [counter, setCounter] = React.useState<number>(0);
	const state = useAppSelector(essentialState);
	React.useEffect(() => {
		let time = setInterval(() => {
			setCounter((counter) => counter + 100);
		}, 5);
		setTimeout(() => {
			clearInterval(time);
		}, 5000);
	}, []);

	return (
		<div>
			<div className={styles.main_container} id={styles[`${state.darkMode && 'dark'}`]}>
				<div className={styles.counter_container}>
					<i className="fa-solid fa-users"></i>
					<h3>{(counter + 1056415).toLocaleString()}</h3>
					<h1>{t('Users')}</h1>
					<p>{t('we serve millions of users around the world everyday as you can see')}</p>
				</div>
				<hr />
				<div className={styles.counter_container}>
					<i className="fa-solid fa-bag-shopping"></i>
					<h3>{(counter + 105000).toLocaleString()}</h3>
					<h1>{t('Products')}</h1>
					<p>{t('we have alot of producct to shop freerly mother fucker')}</p>
				</div>
				<hr />
				<div className={styles.counter_container}>
					<i className="fa-solid fa-truck-fast"></i>
					<h3>{(counter + 1000).toLocaleString()}</h3>
					<h1>{t('Shipped Product')}</h1>
					<p>{t('Thousend of products shipped every day')}</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
