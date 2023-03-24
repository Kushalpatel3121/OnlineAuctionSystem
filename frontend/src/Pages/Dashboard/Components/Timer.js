import React, {useContext, useEffect, useState} from "react";
import {getRemainingTimeUntilMsTs} from "../../../Utils/CountDownTimerUtil";
import {AuctionContext} from "../../../Context/Context";


const defaultRemaining = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
}
const Timer = ({countDownTs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemaining);
    const {submit, setSubmit} = useContext(AuctionContext);

    function updateRemainingTime(countDown) {
        setRemainingTime(getRemainingTimeUntilMsTs(countDown));
        if(remainingTime == defaultRemaining)
        {
            // window.location.reload();
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