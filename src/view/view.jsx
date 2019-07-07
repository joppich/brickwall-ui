import React, {Component} from 'react';
import styles from './view.scss';

import Tags from '../tags/tags';
import Toc from '../posts/toc';
import Post from '../posts/post';

class View extends Component {
    render () {
        return (
            <div className={styles.View}>
                <Tags />,
                <Toc />,
                <Post />
            </div>
        ) 
    }
}

export default View;