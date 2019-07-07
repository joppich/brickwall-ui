import React, {Component} from 'react';
import styles from './post.scss'

class Post extends Component {
    render () {
        return (
            <div className={styles.post}>
                <span>Text</span>
            </div>
        );
    }
}

export default Post;