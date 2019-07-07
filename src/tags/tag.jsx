import React, {Component} from 'react';
import styles from './tag.scss'

class Tag extends Component {
    render () {
        return (
            <div className={styles.tag}>
                <span className={styles.tagText}>{this.props.text}</span>
            </div>
        );
    }
}

export default Tag;