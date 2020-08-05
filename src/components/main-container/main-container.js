import React from 'react';
import styles from './main-container.module.css';

function MainContainer(props) {
    return (<div className={styles.mainContainer}>{props.children}</div>);
}

export { MainContainer };