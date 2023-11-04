import React from "react";
import s from "./CurrentDayInfo.module.scss";
import cloud from "../../assets/images/cloud.png";
import IndicatorSvgSelector from "../../assets/icons/indicators/IndicatorSvgSelector";

const CurrentDayInfo = ({ data }) => {
  return (
    <div className={s.currentDayInfo}>
      <ul className={s.current_day_list}>
        <li className={s.item_info}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="temp" />
          </div>
          <p className={s.indicator_name}>temperature</p>
          <p className={s.indicator_value}>
            feels like {Math.round(data.main.feels_like)}°C
          </p>
        </li>

        <li className={s.item_info}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="humidity" />
          </div>
          <p className={s.indicator_name}>humidity</p>
          <p className={s.indicator_value}>{data.main.humidity}%</p>
        </li>

        <li className={s.item_info}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="pressure" />
          </div>
          <p className={s.indicator_name}>pressure</p>
          <p className={s.indicator_value}>{data.main.pressure} hPa</p>
        </li>

        <li className={s.item_info}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="wind" />
          </div>
          <p className={s.indicator_name}>wind</p>
          <p className={s.indicator_value}>{data.wind.speed} m/s</p>
        </li>
      </ul>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </div>
  );
};

export default CurrentDayInfo;
