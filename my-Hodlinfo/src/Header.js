import React, { useEffect, useState } from 'react'
import { MenuItem, FormControl, Select, Button, } from "@material-ui/core";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Header.css"
import TelegramIcon from '@material-ui/icons/Telegram';
import Switch from "react-switch";
function Header() {

    const [state, setState] = useState({ checked: false });
    const handleChange = (checked) => {
        setState({ checked })
    };

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className="timer">
                <div className="value">{remainingTime}</div>
            </div>
        );
    };
    const [currency, setCurrency] = useState(['INR']);
    const [coins, setCoins] = useState([{ "name": 'BTC', "value": "btc" },
    { "name": 'ETH', "value": "eth" },
    { "name": "USDT", "value": "usdt" },
    { "name": "XRP", "value": "xrp" },
    { "name": "TRX", "value": "trx" },
    { "name": "DASH", "value": "dash" },
    { "name": "ZEC", "value": "zec" },
    { "name": "XEM", "value": "xem" },
    { "name": "LOST", "value": "lost" }]);
    return (
        <div className="header">
            <div className="header-left">
                <img className="logo" src="https://hodlinfo.com//static/media/HODLINFO.8f78fc06.png" />
                <p className="element">Powered by <a className="element_1"> Finstreet</a></p>
            </div>
            <div className="header-middle">
                <div className="drop">
                    <FormControl className="app_dropdown" >
                        <Select variant="outlined" value="inr" >
                            {
                                currency.map((country) => (
                                    <MenuItem value="inr" >{country}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className="drop">
                    <FormControl className="app_dropdown" >
                        <Select variant="outlined" value="btc" >
                            <MenuItem value="btc">BTC</MenuItem>
                            {
                                coins.map((coin) => (
                                    <MenuItem value={coin.value} >{coin.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>

                <div className="bay_btn">
                    BUY BTC
                </div>
            </div>
            <div className="header-right">
                <div className="timer-wrapper">
                    <CountdownCircleTimer
                        size="20px"
                        isPlaying
                        duration={60}
                        colors={[["#3dc6c1", 0.33], ["#3dc6c1", 0.33], ["#3dc6c1"]]}
                        onComplete={() => [true, 1000]}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
                <div className="btn_1">
                    <TelegramIcon className="telegram" /> <p>Connect Telegram</p>
                </div>
                <label>
                    <Switch onChange={handleChange} checked={state.checked} />

                </label>
            </div>
        </div>
    )
}

export default Header
