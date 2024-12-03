---
layout: post
title: Understanding Binary Trees and AVL Trees
date: 2024-10-15 20:00:00
description: A Comprehensive Guide to Binary Trees and AVL Trees
tags: data structures, algorithms, java, programming
categories: algorithms
featured: true
toc:
  sidebar: left
---

# Understanding What a Binary Tree Is

A binary tree is a hierarchical data structure composed of nodes, where each node can have at most two children: a left child and a right child. Each node contains a value and references to its left and right children, which can themselves be roots of their own subtrees, forming a recursive, tree-like structure.

Binary trees are fundamental in computer science, widely used in algorithms and systems for efficient searching, inserting, and organizing information. Understanding how they work is essential for advancing in data structures and algorithms.

# Key Concepts

- Root: The topmost node in the tree.
- Subtree: Each child of a node can be considered the root of its own subtree.
- Leaf: A node with no children; both its left and right references are null.
- Height/Depth: The length of the longest path from the root to a leaf node.

- Node in Binary Tree vs. Linked List: Nodes in a binary tree can have two children, while nodes in a linked list have only one next reference.
Recursion plays a crucial role in binary trees, particularly in traversal and manipulation operations.

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

# Traversal Strategies

Traversing a binary tree means visiting every node in a specific order. Recursion is commonly used due to the tree's recursive nature.

## Pre-order Traversal
1. Visit the root node.
2. Traverse the left subtree recursively.
3. Traverse the right subtree recursively.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binary_tree_pre.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## In-order Traversal

An algorithm with the following steps:  
1. Traverse the left subtree.  
2. Visit the root of the tree.  
3. Traverse the right subtree.  

**This traversal results in nodes being visited in ascending order in a binary search tree.**
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

# Building a Binary Search Tree (BST)

A Binary Search Tree (BST) is a binary tree where each node follows the property:

- Left Subtree: Contains values less than the node's value.
- Right Subtree: Contains values greater than the node's value.
## Node Insertion Algorithm
1. If the tree is empty, create a new node as the root with the value N.
2. If N is less than the current node's value, insert N into the left subtree.
3. If N is greater than the current node's value, insert N into the right subtree.
4. Duplicate values are typically not allowed in a BST.

> ##### NOTE
>
> Note: Smaller values are always on the left of a node, and larger values are on the 
> right. Correct insertion is crucial for maintaining the BST property.
{: .block-tip }

For example, inserting the values:
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

## Calculating the Height of a Tree  

To calculate the height of a tree, it is necessary to determine the longest path from node $$X$$ to one of its descendants. The height of a node $$X$$ can only be calculated after visiting all of $$X$$'s descendants. **The height of a leaf node is $$0$$.**  

The process involves visiting all the children and then moving upwards, increasing the height value, calculating it from the bottom up.  

This is very similar to the post-order traversal algorithm.  

If a node has a `null` child (no child), a value of `-1` is assigned.  
```java
public static int height(Node node) {  
    if (no == null) {  
        return -1;  
    }  
    int left = height(node.getLeftNode());  
    int right = height(node.getRightNode());  
    if (left > right) {  
        return 1 + left;  
    }  
    return 1 + right;  
}
```

# Balancing the Tree: AVL Trees

An AVL tree is a self-balancing BST where the difference in heights (balance factor) between the left and right subtrees is at most 1 for all nodes.

## Balance Factor
For a node N:
```java
balanceFactor = height(N.left) - height(N.right);
```
- Balance Factor of 0: Left and right subtrees are of equal height.
- Balance Factor of 1: Left subtree is one level higher than the right.
- Balance Factor of -1: Right subtree is one level higher than the left.
- Balance Factor beyond ±1: The tree is unbalanced at that node.

# Identifying an Unbalanced Tree
A tree becomes unbalanced when any node has a balance factor less than -1 or greater than 1.

# Rotations  

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
---
# Now that we've covered the theory, let's move on to practice.  
All the code in this article will be written in Java, but feel free to write it in the language of your choice.

# The Node Class

## Structure and Purpose
The Node class is the building block of the binary tree. Each node contains:

- Data: The value stored in the node (e.g., an integer).
- Left Child: A reference to the left child node.
- Right Child: A reference to the right child node.
- Height: Keep track of the node's height in the tree.

```java 
public class Node {
    int data;
    int height;
    Node left;
    Node right;
    
    public Node(int data) {
        this.data = data;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

```
### Explanation:

The Node class has three fields: data, left, and right.
The constructor initializes the data field and sets left and right to null, indicating that the node initially has no children.
Added a height attribute to keep track of the node's height in the tree.
--- 

# Insertion with Balancing

When inserting a node into an AVL tree, we follow these steps:

Standard BST Insertion: Insert the node as you would in a regular binary search tree.
Update Heights: Update the height of each node from the insertion point up to the root.
Calculate Balance Factor: For each node, calculate the balance factor.
Balance the Tree: If the balance factor is not within -1 to 1, perform rotations to rebalance the tree.
## Types of Imbalances and Rotations Needed
Left-Left (LL) Case: Right Rotation
Right-Right (RR) Case: Left Rotation
Left-Right (LR) Case: Left Rotation on Left Child, then Right Rotation
Right-Left (RL) Case: Right Rotation on Right Child, then Left Rotation
```java
private Node insertNode(Node node, int data) {
    if (node == null)
        return new Node(data);

    if (data < node.data)
        node.left = insertNode(node.left, data);
    else if (data > node.data)
        node.right = insertNode(node.right, data);
    else
        return node;

    node.height = 1 + Math.max(height(node.left), height(node.right));

    int balance = getBalance(node);

    if (balance > 1 && data < node.left.data)
        return rightRotate(node);

    if (balance < -1 && data > node.right.data)
        return leftRotate(node);

    if (balance > 1 && data > node.left.data) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    if (balance < -1 && data < node.right.data) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}
```
---
# Left Rotation

A left rotation is performed when a node becomes unbalanced due to an extra node in its right subtree. It restructures the tree to reduce the height of the right subtree.

## When to Use Left Rotation
Right-Right (RR) Case: Occurs when a node is inserted into the right subtree of the right child of an unbalanced node.
How Left Rotation Works
Given an unbalanced node A with right child B:

Assign B's left child to A's right child.
Set B as the new root of the subtree.
Assign A as the left child of B.
```java
private Node leftRotate(Node x) {
    Node y = x.right;
    Node T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(height(x.left), height(x.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;

    return y;
}
```
--- 
# Right Rotation

A right rotation is performed when a node becomes unbalanced due to an extra node in its left subtree. It restructures the tree to reduce the height of the left subtree.

## When to Use Right Rotation
Left-Left (LL) Case: Occurs when a node is inserted into the left subtree of the left child of an unbalanced node.
How Right Rotation Works
Given an unbalanced node A with left child B:

Assign B's right child to A's left child.
Set B as the new root of the subtree.
Assign A as the right child of B.
```java
private Node rightRotate(Node y) {
    Node x = y.left;
    Node T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(height(y.left), height(y.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;

    return x;
}
```
---
# Deletion with Balancing

Deletion in an AVL tree involves:

Standard BST Deletion: Remove the node as in a standard binary search tree.
Update Heights: Update the height of nodes from the deletion point up to the root.
Calculate Balance Factor: For each node, calculate the balance factor.
Balance the Tree: Perform necessary rotations to rebalance the tree if any node becomes unbalanced.

```java
private Node deleteNode(Node root, int data) {
    if (root == null)
        return root;

    if (data < root.data)
        root.left = deleteNode(root.left, data);
    else if (data > root.data)
        root.right = deleteNode(root.right, data);
    else {
        if ((root.left == null) || (root.right == null)) {
            Node temp = (root.left != null) ? root.left : root.right;
            if (temp == null) {
                root = null;
            } else {
                root = temp;
            }
        } else {
            Node temp = minValueNode(root.right);
            root.data = temp.data;
            root.right = deleteNode(root.right, temp.data);
        }
    }

    if (root == null)
        return root;

    root.height = Math.max(height(root.left), height(root.right)) + 1;

    int balance = getBalance(root);

    if (balance > 1 && getBalance(root.left) >= 0)
        return rightRotate(root);

    if (balance > 1 && getBalance(root.left) < 0) {
        root.left = leftRotate(root.left);
        return rightRotate(root);
    }

    if (balance < -1 && getBalance(root.right) <= 0)
        return leftRotate(root);

    if (balance < -1 && getBalance(root.right) > 0) {
        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
}
```
--- 
# Traversal Methods
## In-order traversal
```java
    public void traverseInOrder(Node node) {
        if (node != null) {
            traverseInOrder(node.left);
            System.out.print(" " + node.data);
            traverseInOrder(node.right);
        }
    }
```
## Pre-order traversal
```java
    public void traversePreOrder(Node node) {
        if (node != null) {
            System.out.print(" " + node.data);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
        }
    }
```
## Pos-order traversal
```java
    public void traversePostOrder(Node node) {
        if (node != null) {
            traversePostOrder(node.left);
            traversePostOrder(node.right);
            System.out.print(" " + node.data);
        }
    }
```
---
# Utility Methods
## Height and Balance Factor
```java
private int height(Node node) {
    if (node == null)
        return 0;
    return node.height;
}

private int getBalance(Node node) {
    if (node == null)
        return 0;
    return height(node.left) - height(node.right);
}
``` 
## Minimum Value Node
```java
private Node minValueNode(Node node) {
    Node current = node;

    while (current.left != null)
        current = current.left;

    return current;
}
```
---
# The Complete BinaryTree Class 
```java
public class BinaryTree {
    Node root;

    private int height(Node N) {
        if (N == null)
            return 0;
        return N.height;
    }

    private int getBalance(Node N) {
        if (N == null)
            return 0;
        return height(N.left) - height(N.right);
    }

    private Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;

        return x;
    }

    private Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;

        return y;
    }

    public void insert(int data) {
        root = insertNode(root, data);
    }

    private Node insertNode(Node node, int data) {
        if (node == null)
            return (new Node(data));

        if (data < node.data)
            node.left = insertNode(node.left, data);
        else if (data > node.data)
            node.right = insertNode(node.right, data);
        else
            return node;

        node.height = 1 + Math.max(height(node.left), height(node.right));

        int balance = getBalance(node);

        if (balance > 1 && data < node.left.data)
            return rightRotate(node);

        if (balance < -1 && data > node.right.data)
            return leftRotate(node);

        if (balance > 1 && data > node.left.data) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        if (balance < -1 && data < node.right.data) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    public void delete(int data) {
        root = deleteNode(root, data);
    }

    private Node deleteNode(Node root, int data) {
        if (root == null)
            return root;

        if (data < root.data)
            root.left = deleteNode(root.left, data);
        else if (data > root.data)
            root.right = deleteNode(root.right, data);
        else {
            if ((root.left == null) || (root.right == null)) {
                Node temp = null;
                if (temp == root.left)
                    temp = root.right;
                else
                    temp = root.left;

                if (temp == null) {
                    root = null;
                } else
                    root = temp;
            } else {
                Node temp = minValueNode(root.right);

                root.data = temp.data;

                root.right = deleteNode(root.right, temp.data);
            }
        }

        if (root == null)
            return root;

        root.height = Math.max(height(root.left), height(root.right)) + 1;

        int balance = getBalance(root);
   
        if (balance > 1 && getBalance(root.left) >= 0)
            return rightRotate(root);

        if (balance > 1 && getBalance(root.left) < 0) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        if (balance < -1 && getBalance(root.right) <= 0)
            return leftRotate(root);

        if (balance < -1 && getBalance(root.right) > 0) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    private Node minValueNode(Node node) {
        Node current = node;

        while (current.left != null)
            current = current.left;

        return current;
    }

    public void traverseInOrder(Node node) {
        if (node != null) {
            traverseInOrder(node.left);
            System.out.print(" " + node.data);
            traverseInOrder(node.right);
        }
    }

    public void traversePreOrder(Node node) {
        if (node != null) {
            System.out.print(" " + node.data);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
        }
    }

    public void traversePostOrder(Node node) {
        if (node != null) {
            traversePostOrder(node.left);
            traversePostOrder(node.right);
            System.out.print(" " + node.data);
        }
    }
}
```
--- 
# Conclusion
Understanding binary trees and their balanced versions, like AVL trees, is essential for efficient data management in computer science. By implementing insertion and deletion operations with balancing, we ensure that the tree remains efficient for all operations, maintaining O(log n) time complexity.
---
# References
- Visual AVL Simulator: [AVL Simulator](https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/AVL.html)
- Data Structures and Algorithms in Java
--- 