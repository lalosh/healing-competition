import React from 'react';
import styles from './helper-chips-container.module.css';
import { HelperChip } from '../helper-chip/helper-chip';
import { Link } from 'react-router-dom';

function HelperChipsContainer() {
    return (<div className={styles.helperChipsContainer}>


        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(x => (
            <Link to="/warriors/helpers/ninja" key={String(x)}>
                <HelperChip />
            </Link>
        ))}

    </div>);
}

export { HelperChipsContainer }