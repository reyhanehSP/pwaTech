import React from "react"
import style from "@/components/common/Progress/progress.module.scss"
import {ProgressType} from "@/components/common/Progress/_types/progressType"

const Progress: React.FC<ProgressType> = ({ index }) => {
  console.log(index)
  return <progress className={style.progress} value={index} max={4} />;
};
export default Progress