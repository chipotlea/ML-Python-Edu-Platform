---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
custom_edit_url: https://github.com/OneStep-elecTRON/onestep-electron-content
---

import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

Now that we know about Decision trees, let's look at another algorithm that uses these decision trees in order to give much better results. Random forest is an **Ensemble** technique which simply means that it is not a single model but a combination of multiple models. In ensembling, we have 2 main techniques: Bagging and Boosting. In Random forest, we use Bagging whereas in algorithms like Adaboost, XGBoost make use of Boosting.<br/>

Let's take a real life example here. Consider you have a data set with features of people and you need to classify whether the person is male or female. Random forest is mostly used for classification purpose but you can use it for regression tasks as well. The very first step in bagging is splitting the main data set into smaller sets to feed to different models. So we split our data set of features and feed it to differnt models, which in our case are the Decision trees. These features can be anything such as the length of hair, facial features, etc. After giving few records to our first model, we perform resampling before giving records to the next model. This step is called Row sampling with replacement.This steps is also known as **Bootstrapping**. Each models trains on their sample of data i.e the features of the person and when we give it the test data, the model makes a prediction or gives an output.<br/>

Once we have our outputs from the different models, we make use of a voting classifier. This helps us in considering the maximum outputs of one category. Basically, helps us in determing the output that has occured most number of times. This step is also known as **Aggregation**. Because of these steps, Bagging is also known as **Bootstrap Aggregation**. <br/>

<p align="center">
<img src="https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Co