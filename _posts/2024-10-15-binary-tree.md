---
layout: post
title: Binary Tree
date: 2024-10-15 20:00:00
description: Understanding What a Binary Tree Is
tags: math code
categories: algorithm
featured: true
---

### Understanding What a Binary Tree Is

A binary tree is a data structure composed of nodes, where each node can have at most two children: one on the left and one on the right. Each node in the tree contains a value and references to its left and right children, which, in turn, can also have their own children, forming the hierarchical structure characteristic of a tree.

Binary trees are fundamental in the study of data structures, being widely used in algorithms and systems due to their efficiency in searching, inserting, and organizing information. Because of their simplicity and versatility, understanding how they work is essential for advancing in computer science studies.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bst-completa.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### - The first node is called the root  
- Each child of the root is a subtree of the main tree, having its own root and subtrees as well.  
- A leaf is a node that has no children, with both its left and right children being null.  
- Every tree has a height or depth, which is the longest distance from the root to a leaf node.  
- Note that a node in a binary tree is entirely different from a node in a linked list.  

Recursion is extremely important for binary trees.  

## Traversal Strategies  
There are various ways to traverse a binary tree, but all of them must visit every node in the tree.  

This is where recursion plays its most crucial role, being the main mechanism for traversing the tree.  

### Pre-order Traversal  
An algorithm with the following steps:  
1. Visit the root of the tree (**imagine this as a `print()` statement**).  
2. Traverse the left subtree (**this is where recursion begins**).  
3. Traverse the right subtree.  