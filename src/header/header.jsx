import React, {Component} from 'react';
import styles from './header.scss'

class Header extends Component {
    render () {
        return (
            <div className={styles.header}>
                <h3 className={styles.bannerTitle}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Header;