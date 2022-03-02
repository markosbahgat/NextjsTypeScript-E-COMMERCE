import React, { HTMLProps, useState } from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

interface Props extends HTMLProps<HTMLAllCollection>{

}
const StickyTopNavbar:React.FC<Props> = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const ShowNavbar = () => {
        var uls = document.querySelector(".links") as HTMLDivElement;
        checked ? uls.style.bottom = "100%" : uls.style.bottom = "0";
        checked ? setChecked(false) : setChecked(true);
    }
    const handleShowNavbar = () => {
        const menu = document.querySelector(".menu_list") as HTMLDivElement;
        const menuBtn = document.querySelector(".menu_btn") as HTMLDivElement;
        menu.classList.forEach(item => {
            if(item === "active") { 
                menu.classList.remove("active");
                menuBtn.classList.remove("hide");
                
            }
            else { 
                menu.classList.add("active");
                menuBtn.classList.add("hide");
                
            }
        })
    }
    return (
        <nav className='navbar'>
            <div className="content">
                <div className='logo'><a><strong>Navbar Logo</strong></a></div>
                    <ul className="menu_list">
                        <div className='icon cancel_btn' onClick={handleShowNavbar}>
                            <i className="fas fa-times fa-lg"></i>
                        </div>
                        <li><a href="#home" className="active">homepage</a></li>
                        <li><a href="#about">home</a></li>
                        <li><a href="#work">about</a></li>
                        <li><a href="#projects">work</a></li>
                        <li><a href="#contactus">contactus</a></li>
                        <li><a href="#profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
                    </ul>
                    <div className='icon menu_btn' onClick={handleShowNavbar}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
            </div>
        </nav>
     );
}
 
export default StickyTopNavbar;