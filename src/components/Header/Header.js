import React, { useRef } from 'react';
import styles from "./Header.module.scss";
import { connect } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from '../SideMenu/SideMenu';
import ButtonClose from '../templates/ButtonClose/ButtonClose';

const Header = props => {

    const sideMenuRef = useRef(null);

    const heandlerMenu = open => {
        if (sideMenuRef.current) {
            if (open) {
                sideMenuRef.current.style.transform = 'translateX(0px)';
            } else {
                sideMenuRef.current.style.transform = 'translateX(-100vw)';
            }
        }
    };

    return (
        <div className={styles.continer}>
            <div ref={sideMenuRef} className={styles.side_menu_box}>
                <div className={styles.side_menu_box_right}>
                    <div className={styles.side_menu_close}>
                        <ButtonClose close={heandlerMenu} />
                    </div>
                    <SideMenu heandlerMenu={heandlerMenu} />
                </div>
                <div onClick={() => heandlerMenu(false)} className={styles.side_menu_box_left} />
            </div>
            <div onClick={() => heandlerMenu(true)} className={styles.menu}>
                <GiHamburgerMenu />
            </div>
            <div className={styles.besad}>
                בס"ד
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
    }
}
export default connect(mapStateToProps, {})(Header);