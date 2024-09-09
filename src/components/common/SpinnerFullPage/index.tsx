import Spinner from "@/components/common/Spinner";
import styles from "@/components/common/SpinnerFullPage/SpinnerFullPage.module.scss";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
