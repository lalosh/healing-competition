import React from 'react';
import styles from './helper-chips-container.module.css';
import { HelperChip } from '../helper-chip/helper-chip';

function HelperChipsContainer() {
    return (<div className={styles.helperChipsContainer}>
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
        <HelperChip />
    </div>);
}

export { HelperChipsContainer }