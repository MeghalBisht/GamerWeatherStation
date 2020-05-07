import React from 'react';
import styles from '../CompStyles/showData.module.css';



function Showdata(props) {

    const dateBuilder = d => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();
        return ` ${day}, ${date} ${month} ${year}`
    }
    return (
        <div className={styles.showData}>
            {(typeof props.props.main != "undefined") ? (
                <div>
                    <div className={styles.location}>{props.props.name}, {props.props.sys.country}</div>
                    <div className={styles.locationDate}>{dateBuilder(new Date())}</div>
                    <div className={styles.locationTemp}>
                        <span>
                            {Math.floor(props.props.main.temp)}&deg;C
                </span>
                    </div>
                    <div className={styles.locationWeather}>{props.props.weather[0].main}</div>
                </div>
            ) :
                (
                    <>
                        <img className={styles.gamerImg} src={require('../meghal.jpg')} alt="" />
                        <h1 className={styles.location}>Gamerdidi Reporting!</h1>
                        <div className={styles.locationSearch}>Search temperature here..</div>
                    </>)}
        </div>
    )
}

export default Showdata
