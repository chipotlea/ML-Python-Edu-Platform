---
id: svm
title: Support Vector Machine (SVM)
sidebar_label: Support Vector Machine (SVM)
custom_edit_url: https://github.com/OneStep-elecTRON/onestep-electron-content
---

import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

Support Vector Machine or SVM is one of the best algorithms when it comes to classification type problems and is very famous among ML Practitioners. In this section we will try and understand how it exactly works. Let's try and understand the whole working with a simple example. Let's say you are watching the republic day parade and there are people standing at both ends of the road. These people are guarded by Police on both the ends and in between, the army is marching. On the right side of the road we have all females and on the left side of the road we have all males.

<p align="center">
<img src="https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/SVM/SVM-1.png" alt="drawing" width="700"/>
</p>

No person  can cross the line created by the Police but each person is allowed to roam freely behind them. The above diagram is nothing but the whole setup of how the SVM works. Let us break it down for you. The people in the above diagram are the two classes or data points. Males are one class and females are the others. The road in between is the hyperplane dividing both these classes. The Police are nothing but the support vectors. So by this we can infer that, in SVM, we need to create a hyperplane that can easily classify the different classes present in our data. The support vectors help in determining the right hyperplane and hence this tells us that we only need a subset of all the data points to determine our hyperplane which would divide our classes in the best possible way and the behaviour of rest of the points won't affect it. These support vectors would remain closest to the border and the rest of points can be at any distance. Also, there must be some distance between our marching band and the police. This distance is known 