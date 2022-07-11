import React from 'react';
import styles from "./Header.module.scss";
import { connect } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = props => {


    return (
        <div className={styles.continer}>
            <div className={styles.menu}>
                <GiHamburgerMenu />
            </div>
            Header
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