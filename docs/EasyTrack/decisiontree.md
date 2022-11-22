---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
custom_edit_url: https://github.com/OneStep-elecTRON/onestep-electron-content
---

import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

When we talk about classification type problem statement, one of the most common algorithm that people tend to go with is Decision tree. Let's try to understand Decision tree and how does it work exactly. This algorithm can be used for both classification and regression but in most cases it is used for classification. In decision tree we split our data into different nodes in the tree. For the splitting purpose we use something known as **Entropy** that helps us in selecting the right features to split our data inorder to make our decision tree. Entropy helps us to determine the purity of a split. A pure subsplit means we either get a value of 0 or 1(Yes or No). The goal in Decision tree is to get to the leaf node as quickly as possible. For this purpose we need to select the right features and parameters. Whenever we perform a split, we need to calculate the purity of the split and this is where 