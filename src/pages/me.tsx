import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { eraseCookie } from "../../utils/cookie";

import styles from "../css/me.module.css";

// Global Store
import { GlobalContext } from "../../store/GlobalStateProvider";

function Me() {
  const context = useDocusaurusContext();

  const [userData, setUserData] = useContext(GlobalContext);
  const history = useHistory();

  // If userData not found, route to login.
  useEffect(() => {
    if (!userData) {
      history.replace("/login");
    }
  }, [userData]);

  const handleLogout = () => {
    eraseCookie("token"); // Erases cookie.
    setUserData(null);
  };

  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed with ❤️ at elecTRON."
    >
      <main className="container">
        {userData && (
          <div className={styles.page}>
            <header className={styles.header_custom}>
              <h1>
                Welcome back,{" "}
                <span className={styles.colored}>{userData.username}!</span>
              </h1>
              <div className={styles.setting}>
                <div className={styles.email}>
                  Your Email:{" "}
                  <div className={styles.colored}>{userData.email}</div>
                </div>
                <div className={styles.logout} onClick={handleLogout}>
                  Logout
                </div>
              </div>
            </header>
            <div className={styles.sections}>
              <section className={styles.section}>
                {/* title */}
                <h1>Here's how you're doing in the ML tracks.</h1>
                <div>
                  {/* row of cards */}
                  <div className="row">
                    {/* card 1 */}
                    <div className={clsx("col col--4")}>
                      <div className="text--center">
                        <div className={styles.card}>
                          <div className={styles.title}>Basic</div>
                          <div className={styles.progress}>
                            Progress: {userData.track.basic.progress}%
                          </div>
                          <div className={styles.progress}>
                            Quizzes Solved: {userData.track.basic.quizScore | 0}
                            /{userData.track.basic.totalQuizAnswered | 0}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* card 2 */}
                    <div className={clsx("col col--4")}>
                      <div className="text--center">
                        <div className={styles.card}>
                          <div className={styles.title}>Intermediate</div>

                          <div className={styles.progress}>
                            Progress: {userData.track.intermediate.progress}%
                          </div>
                          <div className={styles.progress}>
                            Quizzes Solved:{" "}
                            {userData.track.intermediate.quizScore}/
                            {userData.track.intermediate.totalQuizAnswered}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* card 3 */}
                    <div className={clsx("col col--4")}>
                      <div className="text--center">
                        <div className={styles.card}>
                          <div className={styles.title}>Advanced</div>

                          <div className={styles.progress}>
                            Progress: {userData.track.advanced.progress}%
                          </div>
                          <div className={styles.progress}>
                            Quizzes Solved: {userData.track.advanced.quizScore}/
                            {userData.track.advanced.totalQuizAnswered}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Me;
