---
layout: post
title: Recursion
date: 2024-09-28 11:12:00-0400
description: Understanding What is Recursion
tags: math code
categories: algorithm
---
### Recursion: The Most Controversial Algorithm in Computing – Why?

The concept of recursion is straightforward: a function that calls itself. But why is it so controversial? In the world of computing, you typically have two options: you either love recursion or hate it.

To explore this further, let's establish two key rules:

#### Rule #1
A recursion must always call itself; otherwise, it isn’t recursion.

#### Rule #2
A recursive function requires a base case to prevent it from running infinitely. Beyond this, additional logic can be applied.

---

Imagine you're searching your grandmother's basement and stumble upon a mysterious locked suitcase. She tells you the key is likely inside a box. However, this box contains other smaller boxes, and so on. The key is inside one of these boxes, and your task is to search for it.

This process can be summarized as a recursive function:

1. Look inside a box.
2. If you find the key, you’re done.
3. If you find another box, look inside that box.

Here’s how this would look in Python code:

```python
def search_for_key(box):
    for item in box:
        if item.is_a_box():
            search_for_key(item)
        elif item.is_a_key():
            print("Found the key!")
```

- **Base Case:** The item found is a key, so there’s no need to search further.
- **Recursion:** If the item found is another box, search inside the new box for the key.

---

### The Stack in Recursion

Understanding recursion requires a good grasp of stacks, a simple data structure with strict rules. In a stack, you can only insert an item at the top, and you can only remove the topmost item.

Imagine a stack with items being added sequentially, starting from item 1 up to item 5. If you want to remove item 3, you must first remove item 5, then item 4, to finally access item 3.

| STACK |        |
|-------|--------|
| 0     | Item 5 |
| 1     | Item 4 |
| 2     | Item 3 |
| 3     | Item 2 |
| 4     | Item 1 |

A stack operates on a **First-In, Last-Out (FILO)** principle: the first item in is the last item out.  

This concept aligns with recursion because, in terms of code execution, computers use a **call stack** to manage function calls. Every time a function is invoked, it is pushed onto the stack, and it’s only removed once the function finishes execution.

---

### Factorial Example: Recursive Call Stack

Let’s say we want to calculate the factorial of a number using recursion:

```python
def factorial(x):
    if x == 1:
        return 1
    else:
        return x * factorial(x - 1)
```

Now, calling `factorial(3)` works as follows:

#### First Call:
| FACTORIAL |     |
|-----------|-----|
| x         | 3   |

This function then calls `factorial(2)`.

#### Second Call:
| FACTORIAL |     |
|-----------|-----|
| x         | 2   |
| x         | 3   |

Next, it calls `factorial(1)`.

#### Third Call:
| FACTORIAL |     |
|-----------|-----|
| x         | 1   |
| x         | 2   |
| x         | 3   |

At this point, the base case is reached (`x == 1`), so the recursion stops, and the functions begin resolving in reverse order:

1. Return `1` (from `factorial(1)`).
2. Calculate `2 * factorial(1) = 2`.
3. Calculate `3 * factorial(2) = 6`.

The final result is `6`.