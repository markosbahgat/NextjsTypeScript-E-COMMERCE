import React, { HTMLProps, useState } from 'react';
import styles from './Style.module.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';
import nookies from 'nookies';
interface Props extends HTMLProps<HTMLAllCollection>{

}
const StickyTopNavbar:React.FC<Props> = () => {
    const [showNav , setShowNav] = useState<boolean>(false);
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}><a><strong>Navbar Logo</strong></a></div>
                    <ul className={styles.menu_list} id={styles[`${showNav && 'active'}`]}>
                        <div className={styles.icon} id={styles.cancel_btn} onClick={() => setShowNav(showNav => !showNav)}>
                            <i className="fas fa-times fa-lg"></i>
                        </div>
                        <li><Link href='/home'><a className={styles.active}>homepage</a></Link></li>
                        <li><Link href='/login'><a>sign in</a></Link></li>
                        <li><Link href='/products'><a>Products</a></Link></li>
                        <li><Link href='/about'><a>about</a></Link></li>
                        <li><Link href='/contactus'><a>contactus</a></Link></li>
                        <li><Link href='/user'><a><i className="fas fa-user fa-lg"></i></a></Link></li>
                    </ul>
                    <div className={styles.icon} id={styles[`${showNav && 'hide'}`]} onClick={() => setShowNav(showNav => !showNav)}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
            </div>
        </nav>
     );
}
 
export default StickyTopNavbar;