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

  const