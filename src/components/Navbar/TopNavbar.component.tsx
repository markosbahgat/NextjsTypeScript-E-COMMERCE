import React, { HTMLProps, useState } from "react";
import styles from "./Style.module.scss";
import Link from 'next/link';
import { parseCookies } from "nookies";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showDarkMode, showModel } from "slices/essential.slice";
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from "./Switcher";
import { essentialState } from '../../slices/essential.slice';
import { useTranslation } from "next-i18next";
import { destroyCookie } from 'nookies';
interface Props extends HTMLProps<HTMLAllCollection> {}


const TopNavbar: React.FC<Props> = () => {
	const { t } = useTranslation('navbar');
	const dispatch = useAppDispatch();
	const state = useAppSelector(essentialState);
	const [showNav, setShowNav] = useState<boolean>(false);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const cookies = parseCookies();
	const handleDropdown = () => {
		setShowDropdown((showDropdown) => !showDropdown);
	};
	const handleShowNav = () => {
		setShowDropdown((showDropdown) => !showDropdown);
		setShowNav((showNav) => !showNav);
	};
	const handleCartClick = () => {
		dispatch(showModel(true));
		handleDropdown();
		setShowNav((showNav) => !showNav);
	};
	const handleNavElement = () => setShowNav((showNav) => !showNav);
	const label = t('Dark Mode');
	const handleLogOut = () => {
		setShowDropdown((showDropdown) => !showDropdown);
		setShowNav((showNav) => !showNav);
		destroyCookie(null, "authUser")
		window.location.reload()
	}
	return (
		<nav className={styles.navbar} id={styles[`${state.darkMode && 'dark'}`]}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Link href="/home">
						<a>{t('online store')}</a>
					</Link>
				</div>
				<ul className={styles.menu_list} id={styles[`${showNav && "active"}`]}>
					<div
						className={styles.icon}
						id={styles.cancel_btn}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<i className="fas fa-times fa-lg"></i>
					</div>

					<li onClick={handleNavElement}>
					<FormControlLabel
						control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
							label={label}
							sx={{ color: "white", fontWeight: "bold" }}
							onClick={() => dispatch(showDarkMode(!state.darkMode))}
					/>
					</li>

					<li onClick={handleNavElement}>
						<Link href="/home">
							<a className={styles.active}>{t('Home')}</a>
						</Link>
					</li>

					{cookies.authUser ? (
						<li onClick={handleNavElement}>
							<Link href="/products">
								<a>{t('Products')}</a>
							</Link>
						</li>
					) : (
						<li onClick={handleNavElement}>
							<Link href="/login">
								<a>{t('sign in')}</a>
							</Link>
						</li>
					)}

					<li onClick={handleNavElement}>
						<Link href="/about">
							<a>{t('about')}</a>
						</Link>
					</li>
					<li onClick={handleNavElement}>
						<Link href="/contactus">
							<a>{t('contactus')}</a>
						</Link>
					</li>
					<li style={{ position: "relative" }}>
						<div id={styles.userIcon} onClick={handleDropdown}>
							<i className="fas fa-user fa-lg"></i>
						</div>
						<div className={styles.dropdown_container} id={styles[`${showDropdown && "showDropdown"}`]}>
							<ul>
								<li onClick={handleShowNav}>
									<Link href="/profile">
										<a>
											<i className="fa-solid fa-user"></i> {t('Profile')} 
										</a>
									</Link>
								</li>
								<li onClick={handleShowNav}>
									<Link href="/profile">
										<a>
											<i className="fa-solid fa-screwdriver-wrench"></i>  {t('Settings')}
										</a>
									</Link>
								</li>
								<li onClick={handleShowNav}>
									<Link href="/checkout">
										<a>
											<i className="fa-solid fa-credit-card"></i> {t('Checkout')}
										</a>
									</Link>
								</li>
								<li onClick={handleCartClick}>
									<a>
										<i className="fa-solid fa-cart-shopping"></i> {t('Cart')}
									</a>
								</li>
								<li onClick={handleLogOut}>
									<a>
										<i className="fa-solid fa-right-from-bracket"></i> {t('Logout')}
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div
					className={styles.icon}
					id={styles[`${showNav && "hide"}`]}
					onClick={() => setShowNav((showNav) => !showNav)}>
					<i className="fas fa-bars fa-lg"></i>
				</div>
			</div>
		</nav>
	);
};

export default TopNavbar;
