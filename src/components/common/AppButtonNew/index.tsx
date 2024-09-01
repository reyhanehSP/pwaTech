import React from 'react'
import styles from "@/components/common/AppButtonNew/appButtonNew.module.scss";
import AppImage from "@/components/common/AppImage";
import {IAppButtonNew} from "@/components/common/AppButtonNew/_types/IAppButtonNew";
const AppButtonNew:React.FC<IAppButtonNew> = ({iconUrl,disabled,text,onClick}) => {
  return (
      <button
          onClick={onClick}
          className={disabled ? styles.disabledButton :styles.button}
          disabled={disabled}
      >
          <AppImage
              src={iconUrl}
              width={20}
              height={20}
          />
          <p>{text}</p>
      </button>
  )
}

export default AppButtonNew
