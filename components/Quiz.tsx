import React, { useContext, useState } from "react";
import clsx from "clsx";
import update from "immutability-helper";

import axios from "../utils/api";
import { eraseCookie, getCookie } from "../utils/cookie";
import styles from "../src/css/quiz.module.css";

// Global Store
import { GlobalContext } from "../store/GlobalStateProvider";

export const Quiz: React.FC = ({ children, ...props }) => {
  return (
    <div className={styles.quiz} {...props}>
      {children}
    </div>
  );
};

export const Question: React.FC = ({ children, ...props }) => {
  return (
    <div className={styles.question} {...props}>
      {children}
    </div>
  );
};

interface AnswerPanelProps {
  answers: string[];
  correctIndex: number;
  track: "basic" | "intermediate" | "advanced";
}

export const AnswerPanel: React.FC<AnswerPanelProps> = ({
  answers,
  correctIndex,
  track,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userData, setUserData] = useContext(GlobalContext);

  const handleOnClick = (index: number) => {
    if (selectedIndex === -1) {
      // Means, if user havent attempted quiz yet
  