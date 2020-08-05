import React from 'react';
import styles from './helper-chip.module.css';

function HelperChip({ keywords, count }) {

    count = count || Math.ceil(Math.random() * 10000)

    return (<div className={styles.helperChip}>

        {keywords || 'keywords'}

        <span
            className={styles.helperChipNumber}
            style={{
                minWidth: String(count).length > 1 ? `${(String(count).length + 1) * 10}px` : '25px',
                maxWidth: String(count).length > 1 ? `${(String(count).length + 1) * 10}px` : '25px',
            }}>
            {count}
        </span>

    </div>);
}

export { HelperChip };