import React, {Component} from 'react';
import styles from './toc.scss'

class Toc extends Component {
    render () {
        return (
            <div className={styles.toc}>
                <h5>Content</h5>
                <ul>
                    <li>Post 1</li>
                </ul>
            </div>
        );
    }
}

export default Toc;