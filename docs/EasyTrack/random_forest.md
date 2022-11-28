---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
custom_edit_url: https://github.com/OneStep-elecTRON/onestep-electron-content
---

import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

Now that we know about Decision trees, let's look at another algorithm that uses these decision trees in order to give much better results. Random forest is an **Ensemble** technique which simply means that it is not a single model but a combination of multiple models. In ensembling, we have 2 main techniques: Bagging and Boosting. In Random forest, we use Bagging whereas in algorithms like Adaboost, XGBoost make use of Boosting.<br/>

Let's take a real life example here. Consider you have a data set with features of people and you need to classify whether the person is male or female. Random forest is mostly used for class