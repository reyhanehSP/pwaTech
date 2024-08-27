import style from "@/components/common/Loading/Loading.module.scss"
const Loading = () => {
    return (
      <div className={style.loaderContainer}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    );
}
export default Loading