import React, {Component} from 'react';
import styles from './tags.scss'

import Tag from './tag';

class Tags extends Component {

    render () {
        const tagnames = ["Tag 1", "Tag 2", "Tag 3"];
        const tags = tagnames.map((tag) =>
            <li><Tag text={tag} /></li>
        );
        return (
            <div className={styles.tags}>
                <ul>{tags}</ul>
            </div>
        );
    }
}

export default Tags;