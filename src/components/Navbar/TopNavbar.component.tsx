import React, { HTMLProps, useState } from "react";
import styles from "./Style.module.scss";
import Link from 'next/link';
import { parseCookies } from "nookies";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showDarkMode, showModel } from "slices/essential.slice";
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from "./Switcher";
import { essentialState } from '../../slices/essential.slice';
import  useTranslation  from 'next-translate/useTranslation';
import { destroyCookie } from 'nookies';
import Switcher from "components/langSwitcher/Switcher.component";
import { useRouter } from "next/router";
interface Props extends HTMLProps<HTMLAllCollection> {}


const TopNavbar: React.FC<Props> = () => {
	const { t } = useTranslation('navbar');
	const dispatch = useAppDispatch();
	const state = useAppSelector(essentialState);
	const [showNav, setShowNav] = useState<boolean>(false);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const cookies = parseCookies();
	const router = useRouter();
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

	const label = t(state.darkMode ?'Light Mode' : 'Dark Mode');

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
						<a data-testing="Logo">{t('online store')}</a>
					</Link>
				</div>
				<ul className={styles.menu_list} id={styles[`${showNav && "active"}`]}>
					<div
						className={styles.icon}
						id={styles.cancel_btn}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<i className="fas fa-times fa-lg"></i>
					</div>

					<li>
					<FormControlLabel
						control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
							label={label}
							sx={{ color: "white", fontWeight: "bold" }}
							onClick={() => dispatch(showDarkMode(!state.darkMode))}
					/>
					</li>

					<li onClick={handleNavElement}>
						<Link href="/home">
							<a className={styles[`${router.pathname === '/home' && "active"}`]}>{t('Home')}</a>
						</Link>
					</li>

					{cookies.authUser ? (
						<li onClick={handleNavElement}>
							<Link href="/products">
								<a className={styles[`${router.pathname === '/products' && "active"}`]}>{t('Products')}</a>
							</Link>
						</li>
					) : (
						<li onClick={handleNavElement}>
							<Link href="/login">
								<a className={styles[`${router.pathname === '/login' && "active"}`]}>{t('sign in')}</a>
							</Link>
						</li>
					)}

					<li onClick={handleNavElement}>
						<Link href="/about">
							<a className={styles[`${router.pathname === '/about' && "active"}`]}>{t('about')}</a>
						</Link>
					</li>
					<li onClick={handleNavElement}>
						<Link href="/contactus">
							<a className={styles[`${router.pathname === '/contactus' && "active"}`]}>{t('contactus')}</a>
						</Link>
					</li>
					<li  id={styles.select}>
						<Switcher />
					</li>
					{cookies.authUser && (
						<li style={{ position: "relative" }}>
							<div id={styles.userIcon} onClick={handleDropdown} data-testing="dropDown_button">
								<i className="fas fa-user fa-lg"></i>
							</div>
							{showDropdown && (
								<div className={styles.dropdown_container}>
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
										<li onClick={handleCartClick} data-testing="cart_button">
											<a>
												<i className="fa-solid fa-cart-shopping"></i> {t('Cart')}
											</a>
										</li>
										<li onClick={handleLogOut} data-testing="logOut">
											<a>
												<i className="fa-solid fa-right-from-bracket"></i> {t('Logout')}
											</a>
										</li>
									</ul>
								</div>
							)}
						</li>
					)}
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
