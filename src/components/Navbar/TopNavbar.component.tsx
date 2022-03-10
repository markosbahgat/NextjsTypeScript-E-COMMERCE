import React, { HTMLProps, useState } from 'react';
import styles from './Style.module.scss';
import Link from 'next/link';
import {parseCookies} from 'nookies';
import { useAppDispatch } from '../../store/hooks';
import { showModel } from 'slices/essential.slice';


interface Props extends HTMLProps<HTMLAllCollection>{}

const TopNavbar:React.FC<Props> = () => {

    const dispatch = useAppDispatch();
    const [showNav , setShowNav] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const cookies = parseCookies();
    const handleDropdown = () => setShowDropdown(showDropdown => !showDropdown);
    const handleCartClick = () => {
        dispatch(showModel(true))
        handleDropdown();
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link  href='/home'>
                        <a>Online Store</a>
                    </Link>
                </div>
                <ul className={styles.menu_list} id={styles[`${showNav && 'active'}`]}>
                    <div className={styles.icon} id={styles.cancel_btn} onClick={() => setShowNav(showNav => !showNav)}>
                        <i className="fas fa-times fa-lg"></i>
                    </div>
                    <li><Link href='/home'><a className={styles.active}>Home</a></Link></li>
                    {cookies.authUser ? 
                    (<li><Link href='/products'><a>Products</a></Link></li>) :
                        (<li><Link href='/login'><a>sign in</a></Link></li>)}
                    <li><Link href='/about'><a>about</a></Link></li>
                    <li><Link href='/contactus'><a>contactus</a></Link></li>
                    <li style={{position:"relative"}}>
                        <div id={styles.userIcon} onClick={handleDropdown}>
                            <i className="fas fa-user fa-lg" ></i>
                        </div>
                        <div className={styles.dropdown_container} id={styles[`${showDropdown && 'showDropdown'}`]}>
                            <ul>
                                <li onClick={handleDropdown}><Link href='/profile'><a><i className="fa-solid fa-user"></i> Profile</a></Link></li>
                                <li onClick={handleDropdown}><Link href='/profile'><a><i className="fa-solid fa-screwdriver-wrench"></i> Settings</a></Link></li>
                                <li onClick={handleDropdown}><Link href='/checkout'><a><i className="fa-solid fa-credit-card"></i> Checkout</a></Link></li>
                                <li onClick={handleCartClick}><a><i className="fa-solid fa-cart-shopping"></i> Cart</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                    <div className={styles.icon} id={styles[`${showNav && 'hide'}`]} onClick={() => setShowNav(showNav => !showNav)}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
            </div>
        </nav>
     );
}
 
export default TopNavbar;