import FixedBottomFooter from 'components/footer/Footer.component'
import StickyTopNavbar from 'components/Navbar/TopNavbar.component'
import React, { HTMLProps } from 'react'
import styles from './style.module.scss';

interface Props extends HTMLProps<HTMLAllCollection>{}

const Layout:React.FC<Props> = ({children}) => {
  return (
    <div className={styles.layout_container}>
        <div className={styles.header}>
            <StickyTopNavbar/>
        </div>
        <div className={styles.childern_container}>
            {children}
        </div>
        <div className={styles.footer}>
            <FixedBottomFooter/>
        </div>
    </div>
  )
}

export default Layout