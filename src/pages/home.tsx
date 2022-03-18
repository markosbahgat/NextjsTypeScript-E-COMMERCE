import React from "react";
import { NextPage } from "next";
import styles from "styles/home.module.scss";
import { HomeHOC } from "HOC";
import storage from "store/storage";
import { essentialState } from "slices/essential.slice";
import { useAppSelector } from "store/hooks";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common', 'navbar']))
		},
	};
}

const Home: NextPage = (props) => {
	const {t} = useTranslation('common')
	const getauth = async () => {
		await storage.setItem("test", "this is a simple test from markos bahgat");
		const Test = await storage.getItem("persist:root");
		Test && console.log(JSON.parse(JSON.parse(Test).fetch));
		return Test;
	};
	console.log(getauth());
	const state = useAppSelector(essentialState);
	return (
		<div className={styles.main_home_container} id={styles[`${state.darkMode && 'dark'}`]}>
			<HomeHOC />
		</div>
	);
};

export default Home;
