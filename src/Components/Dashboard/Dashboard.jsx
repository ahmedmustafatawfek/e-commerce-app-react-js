import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={`container w-50 ${styles.hero}`}>
        <p>
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </div>
    </>
  );
}
