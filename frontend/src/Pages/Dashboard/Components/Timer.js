import React, {useContext, useEffect, useState} from "react";
import {getRemainingTimeUntilMsTs} from "../../../Utils/CountDownTimerUtil";
import {AuctionContext} from "../../../Context/Context";


const defaultRemaining = {
    days: '0',
    hours: '00',
    minutes: '01',
    seconds: '00'
}

const ending = {
    "seconds": 'NaN',
    "minutes": 'NaN',
    "hours": 'NaN',
    "days": 'NaN'
}

const Timer = ({countDownTs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemaining);
    const {timeComplete, setTimeComplete} = useContext(AuctionContext);
    let [check, setCheck] = useState(false);
    function updateRemainingTime(countDown) {
        setRemainingTime(getRemainingTimeUntilMsTs(countDown));
        // console.log(getRemainingTimeUntilMsTs(remainingTime))

        if(JSON.stringify(getRemainingTimeUntilMsTs(remainingTime)) ===  JSON.stringify(ending) && check == false)
        {
            setCheck(true);

            if(timeComplete == false)
                setTimeComplete(true);
            else
                setTimeComplete(false);
        }
    }

    useEffect(()=> {
            const intervalId = setInterval(() => {
                updateRemainingTime(countDownTs);
            }, 1000);

            return () => clearInterval(intervalId);
    }, [countDownTs]);


    return (
        <div className='flex justify-center'>
            <div className='text-center'>
                <div >{remainingTime.days}</div>
                <div>Days</div>
            </div>
            <div>
                <div className='mx-3'>:</div>
            </div>
            <div className='text-center'>
                <div>{remainingTime.hours}</div>
                <div>Hours</div>
            </div>
            <div>
                <div className='mx-3'>:</div>
            </div>
            <div className='text-center'>
                <div >{remainingTime.minutes}</div>
                <div>Minutes</div>
            </div>
            <div>
                <div className='mx-3'>:</div>
            </div>
            <div className='text-center'>
                <div >{remainingTime.seconds}</div>
                <div >Seconds</div>
            </div>
            <br />
        </div>
    );
}

export default Timer;