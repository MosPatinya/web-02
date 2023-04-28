import '../App.css';
import React, { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';


function Theme() {

    const [theme, setTheme] = useState('light');
    const [front, setFront] = useState('front-black');
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleChange = val => {
        setChecked(val)
        if (checked === true) {
            setTheme('dark');
            setFront('front-white');
            document.body.className = theme;
        } else {
            setTheme('light');
            setFront('front-black');
            document.body.className = theme;
        }
    }

    return (
        <div className={`App ${theme}`}>
            <div className='header1'>
                <ReactSwitch
                    checked={checked}
                    onChange={handleChange}
                    onColor='#000000'
                    onHandleColor='#ffffff'
                    offColor='#ff3300'
                    offHandleColor='#ffffff'
                // checkedIcon = {<img className='icon-home' src={require('./images/sun.png')} />}
                // uncheckedIcon = {<img className='icon-home' src={require('./images/moon.png')} />}

                />
            </div>
            <div className='container-fr'>
                <div className={`${front}`}>
                    <h1>crossmoss.com !!</h1>
                </div>
            </div>
        </div>
    );
}
export default Theme;