import style from "@/components/common/CheckBox/CheckBox.module.scss";
import { useState } from "react";
import { CheckBoxType } from "./_types/type";

const CheckBox: React.FC<CheckBoxType> = ({value , label , onChange}) => {
  return (
    <div className={style.checkGroup}>
      <label className="checkbox">
        <input
          className={style.checkbox__input}
          type="checkbox"
          value={value}
          onChange={onChange}
        />
        <svg
          className={style.checkbox__icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
        >
          <rect
            width="21"
            height="21"
            x=".5"
            y=".5"
            fill="#FFF"
            stroke="#006F94"
            rx="3"
          />
          <path
            className={style.checkboxTick}
            stroke="#185ee2"
            fill="none"
            stroke-linecap="round"
            stroke-width="4"
            d="M4 10l5 5 9-9"
          />
        </svg>
      </label>
      <span className={style.checkbox__label}>{label}</span>
    </div>
  );
};
export default CheckBox