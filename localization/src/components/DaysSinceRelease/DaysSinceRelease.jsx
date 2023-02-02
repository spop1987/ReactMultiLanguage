import React from "react";
import { useTranslation } from "react-i18next";

const DaysSinceRelease = (props) => {
    const {t} = useTranslation()
    let number_of_days = props.numberOfDays;
    return(
        <div>
            <div className="d-flex flex-column align-items-start">
                <h1 className="font-weight-normal mb-3">
                {t('welcome_message')}
                </h1> 
                <p>
                {t('days_since_release', {number_of_days})}
                </p>
            </div>
        </div>  
    )
}

export default DaysSinceRelease;