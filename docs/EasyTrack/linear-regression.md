---
id: linear-regression
title: Linear Regression
sidebar_label: Linear Regression
custom_edit_url: https://github.com/OneStep-elecTRON/onestep-electron-content
---
import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

There are mainly three types of algorithms in Machine Learning, namely: Supervised, Unsupervised and Reinforcement Learning. Since, Linear Regression is a Supervised Machine Learning algorithm , we'll focus on that for this topic. <br/>

Supervised Machine Learning means that the algorithm is first trained on a labelled dataset (generally referred to as training data) to form a model. After this, the machine is provided with a new set of data (known as the test data), and the model uses the acquired knowledge to predict the outcomes for this test data. For instance, when we were kids, our parents taught us what a cow, rabbit, snake, squirrel, etc. are. In other words, they trained us. After that, whenever we see an animal now (test data), we are able to classify it depending on our knowledge. This is Supervised Learning. <br/>

Supervised ML algorithms are of 2 types: <br/>
1. Classification: In this, the output variable is a category (discrete, categorical target variable) <br/>
2. Regression: In this, the output variable is a value (continuous target variable) <br/>

Let's talk about regression now. <br/>

The term "regression" means "coming back to the average". <br/> 

Regression Analysis is a mathematical measure to determine the average relationship between two or more variables in terms of original units of data. In regression analysis, we have two types of variables: Dependent variable (target/output variable) and independent variable (predictor/input variable). The variable whose value is to be predicted is called dependent variable, whereas the variable which is used for prediction is called independent variable. <br/>

Simple linear regression is defined as `Y = aX + b`, where , Y is the dependent variable and X is the independent variable. a and b are coefficients, which we'll understand below by a simple example.<br/>

Let us assume that marks scored by a student in exams is only related to number of hours he studied. We went to a class and collected data on marks scored and study-hours of various students. This data is represented by blue dots in the figure below. 

<p align="center">
<img src="https://raw.githubusercontent.com/Anjali001/onestep-electron-content/main/Courses/easy_track/Linear%20Regression/regress.jpg" alt="Linear Regression Image" width="700"/>
</p>

The straight line (red color) is called best fit line or regression line. It is called best fit because the error between the predicted values and the observed values is minimum for this line. Now as we can see, a student can score 25 marks even if they don't study at all. This is called in