import React from 'react';
import styles from '../CompStyles/myInfo.module.css';
import { LinkedIn, GitHub } from '@material-ui/icons';



function Myinfo() {
    return (
        <div>
            <div className={styles.myId}>
                <ul>
                    <li><a href="https://github.com/Gamerdidi"><GitHub fontSize="large" style={{ color: "#f6f8fa" }} /></a></li>
                    <li><a href="https://www.linkedin.com/in/meghal-bisht-777451177/"><LinkedIn fontSize="large" style={{ color: "#0e76a8" }} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Myinfo
