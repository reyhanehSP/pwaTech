import React from "react";
import styles from "@/components/common/AppButtonNew/appButtonNew.module.scss";
import AppImage from "@/components/common/AppImage";
import { IAppButtonNew } from "@/components/common/AppButtonNew/_types/IAppButtonNew";
const AppButtonNew: React.FC<IAppButtonNew> = ({
  iconUrl,
  disabled,
  text,
  onClick,
  color,
}) => {
  const backGroundColor = disabled
    ? "#F1F0FE"
    :( color
    ? color
    : "linear-gradient(to top, #7569F4, #9187F6)");
  return (
    <button
      onClick={onClick}
      style={{ background: backGroundColor }}
      className={disabled ? styles.disabledButton : styles.button}
      disabled={disabled}
    >
      {iconUrl && <AppImage src={iconUrl} width={20} height={20} />}
      <p style={{marginBottom: "0"}}>{text}</p>
    </button>
  );
};

export default AppButtonNew;
