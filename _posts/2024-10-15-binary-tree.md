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
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binary_tree_pre.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### In-order Traversal

An algorithm with the following steps:  
1. Traverse the left subtree.  
2. Visit the root of the tree.  
3. Traverse the right subtree.  

**This algorithm is equivalent to displaying the numbers in ascending order.**
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binary_tree_in.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Post-order Traversal

An algorithm with the following steps:  
1. Traverse the left subtree.  
2. Traverse the right subtree.  
3. Visit the root of the tree.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binary_tree_pos.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

Algorithms implementing binary trees are typically divided into two stages. The first involves building the tree, and the second involves traversing it.  

## Sorting Strategy  
To create a Binary Search Tree, it is crucial to know how to build it correctly. An incorrect construction will result in errors in search algorithms.  

### Node Insertion  
1. If the tree is empty, create a tree with a single node containing the value $$N$$.  
2. If the number $$N$$ is greater than or equal to the value stored in the root node, repeat the procedure on the right subtree of the root node.  
3. If the number $$N$$ is less than the value stored in the root node, repeat the procedure on the left subtree of the root node.  

> ##### NOTE
>
> Smaller values will always be on the left of the root node, eliminating the
> entire right side of the tree. If a value is inserted incorrectly, it is necessary to
> restart the tree creation process.  
{: .block-tip }

Let us say we want to create a Binary Search Tree with the following values:  
$$14, 15, 4, 9, 7, 18, 3, 5, 16, 4, 20, 17, 9, 14, 5$$  
Following the proposed logic, the resulting tree will be:  
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binary_tree_construct.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Node Removal  

In this part, there are several alternatives for removing nodes. All removed elements are replaced with ```null```.

### Removing an External Node  
This is perhaps the easiest way to remove a node.  
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/node_remove.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Removing an Internal Node  

The most complex method of removing a node, as it requires reallocating the children of the removed node while adhering to the insertion logic.  
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/removed_node_internal.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To simplify this process, two strategies can be employed:  
- Replace the removed node with the largest value from its left subtree.  
- Replace the removed node with the smallest value from its right subtree.  

In some cases, it is easier not to remove the node and simply update its information.  

Recursion is also necessary for node removal.  

## Calculating the Height of a Tree  

To calculate the height of a tree, it is necessary to determine the longest path from node $X$ to one of its descendants. The height of a node $X$ can only be calculated after visiting all of $X$'s descendants. **The height of a leaf node is $0.**  

The process involves visiting all the children and then moving upwards, increasing the height value, calculating it from the bottom up.  

This is very similar to the post-order traversal algorithm.  

If a node has a `null` child (no child), a value of `-1` is assigned.  
```java
public static int height(Node no) {  
    if (no == null) {  
        return -1;  
    }  
    int left = height(no.getLeftNode());  
    int right = altura(no.getRightNode());  
    if (left > right) {  
        return 1 + left;  
    }  
    return 1 + right;  
}
```

## Unbalanced Tree  

When a binary tree is unbalanced, it loses efficiency, requiring balancing to restore optimal performance.  
**Any modification to the tree, whether inserting or removing a node, necessitates rebalancing.**

### AVL Tree  
The balancing factor formula:  

**The balance factor of a leaf node is always $0$.**  
The balance factor is calculated using the height of the subtrees:  
**`Balance Factor = height(node.getLeftNode()) - height(node.getRightNode())`**  

Refer to this visual AVL simulator: [AVL Simulator](https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/AVL.html)  

### Identifying an Unbalanced Tree  

A tree is unbalanced when a given node has a **balance factor of $$2$$ or $$-2$$**.  
**The balance factors are always updated dynamically after each operation and should not be stored statically.**

### Rotations  

A technique used to balance the tree based on the node that causes the imbalance.  

#### Left Rotation  
When the tree is unbalanced to the right:  
1. `Node newRoot = node.right`  
2. `Node temp = newRoot.left`  
3. `newRoot.left = node`  
4. `node.right = temp`  

#### Right Rotation  
When the tree is unbalanced to the left:  
1. `Node newRoot = node.getLeftNode()`  
2. `Node temp = newRoot.getRightNode()`  
3. `newRoot.right = node`  
4. `node.left = temp`  

### Special Cases  

Special cases occur when the parent node and child node have opposite balance factors. This can lead to "infinite balancing" if handled improperly.  

#### First Case  
When the parent is negative and the child is positive:  
Perform a **right rotation** on the child, followed by a **left rotation** on the parent. This is known as a **double left rotation**.  

#### Second Case  
When the parent is positive and the child is negative:  
Perform a **left rotation** on the child, followed by a **right rotation** on the parent. This is known as a **double right rotation**.  