import styles from "./MyClockTime.module.css";
import { useState, useEffect } from "react";
function MyClockTime() {
  const [ctime, setCtime] = useState(new Date());

  useEffect(() => {
    const tm = setInterval(() => {
      setCtime(new Date());
    }, 1000);

    return () => {
      clearInterval(tm);
    };
  }, []);
  return (
    <div className={styles.c3}>현재 시각 : {ctime.toLocaleTimeString()}</div>
  );
}

export default MyClockTime;
