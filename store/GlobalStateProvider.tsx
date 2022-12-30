import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface UserData {
  id: string;
  username: string;
  email: string;
  track: {
    basic: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    intermediate: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    advanced: {
      progress: number;
      