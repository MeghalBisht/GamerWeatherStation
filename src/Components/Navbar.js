import React, { useEffect, useState } from 'react';
import Showdata from '../Components/Showdata';
import styles from '../CompStyles/navStyle.module.css';

const api = {
    apiKey: "b7c8499401a59798ac94c975ff4e057c",
    base: "https://api.openweathermap.org/data/2.5/"
}



function Navbar() {

    let textInput = null;
    useEffect(() => {
        textInput.focus();
    })



    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.apiKey}`)
            .then(res =>
                res.json())
            .then(result => {
                if (result.cod != "404") {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                }
                if (result.cod == "404") {
                    alert(`Wait! ${query}? that's a wrong city name!`)
                    setWeather("");
                    setQuery('');
                    console.log(result);
                }
                if (result.cod == "400") {
                    alert("Specify the location!")
                    setWeather("");
                    setQuery('');
                    console.log(result);
                }
            }).catch(err => {
                setError(err);
                console.log("error is", err);
            })
    }


    return (

        <section className={
            (typeof error != "undefined") ? styles.Nav
                : styles.noNav
        }>
            <div className={styles.wrapperDiv}>
                <div className={styles.toggleImg}>
                    <img className={
                        (typeof weather.main != "undefined") ? styles.nodisplayImg
                            : styles.displayImg
                    } src={require('../image.jpg')} alt="" />
                    <img className={
                        (typeof weather.main != "undefined") ? ((weather.main.temp < 16) ?
                            styles.displayImg
                            : styles.nodisplayImg)
                            : styles.nodisplayImg
                    } src={require('../cold.jpg')} alt="" />
                    <img className={
                        (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ?
                            'displayImg'
                            : styles.nodisplayImg)
                            : styles.nodisplayImg
                    } src={require('../hot.jpg')} alt="" />
                </div>
                <div className={styles.inputBtns}>
                    <input ref={(e) => { textInput = e; }} placeholder="Search location.." onChange={e => setQuery(e.target.value)} value={query} />
                    <button onClick={clickHandler}>search</button>
                </div>
            </div>
            <Showdata props={weather} />
        </section>
    )
}

export default Navbar

