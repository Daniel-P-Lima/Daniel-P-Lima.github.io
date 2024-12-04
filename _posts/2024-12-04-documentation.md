---
layout: post
title: The Art of Effective Technical Documentation
date: 2024-12-04 15:57:00
description: A guide to creating clear and efficient technical documentation for successful project management.
tags: formatting documentation guide
categories: document
featured: true
toc:
  sidebar: left
---

# Introduction  
## How Documentation Works**  

Large systems are typically developed over time by different individuals. A significant challenge new employees face when encountering a new system is their lack of knowledge about it, often relying on guidance from someone already familiar with the system. This is where technical documentation plays a vital role, simplifying the understanding of the system as a whole and eliminating the need for word-of-mouth training.  

The culture of maintaining documentation has historically been neglected. For instance, even Google faces challenges with its documentation practices, as highlighted in Riona MacNamara's talk (see references). Software engineers often lack the time and motivation to create or update documentation, yet it is undeniably essential for streamlining many processes.  

This document will propose strategies and resources to enhance the technical documentation of projects.

## What to Document?  

Determining what to document is the first step toward effective documentation. Consider what questions you would ask when encountering the system for the first time and which information would be most useful. Two critical aspects to focus on are:  

- **What questions are asked repeatedly?**  
- **What information is only available through specific individuals?**  

If there are clear answers to these questions, they should be documented.  

Imagine you wrote a long and complex piece of code a year ago, and now you want to revisit it for improvements. However, you no longer understand half of the code and are forced to review it line by line, taking ages to comprehend it fully. If the code had been documented in a technical yet straightforward manner, the process would be far quicker and more efficient.

## How to Document?

More important than simply starting to write is ensuring that documentation is done the right way. The structure and style of the documentation significantly impact its usefulness and readability. Engaging with the team—both those creating and those using the documentation—is a crucial first step in building effective materials.  

Being simple, concise, and to the point is essential. Avoid overly lengthy or complex documentation, as it makes reading more difficult. Since documentation needs to be updated regularly, it is vital to ensure it is easy to edit and straightforward to understand.

## Collaboration

Collaboration within the development team is a crucial step toward creating concise and effective documentation. Involving the team in key aspects of the project not only enhances the quality of the documentation but also contributes to the overall success of the project's development.

# Best Practices   

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets\img\good_practices.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. **Define the Project Scope**  
   Clearly and objectively outline the project’s scope, making the initial understanding more accessible.  

2. **Acknowledge the Team**  
   Include contributors, reviewers, editors, and publishers in the project's scope. Ensure everyone involved is credited along with their roles.  

3. **Identify Topics and Subtopics**  
   Break the documentation into clearly organized topics and subtopics. This systematic structure allows users to easily navigate and find the information they need.  

4. **Be Specific About Expected Outcomes**  
   Clearly define what the project aims to achieve so the team knows when success has been reached. Specify the expected results and a timeline for achieving them, providing a solid definition of completion.  

5. **Document Technical Parameters and Environmental Requirements**  
   Ensure that all necessary specifications and technologies involved in executing the project are outlined for the team.  

6. **Define Deliverables**  
   Be explicit about what will be delivered at the end of the project. Clearly state what the final outcome will be and how it will benefit the company upon completion.  

7. **Update Documentation Regularly**  
   Use a documentation tool that maintains a version history of each document, enabling reference to previous versions when needed. Regular updates may require revisiting historical versions to track the project's progress.  

8. **Set Prerequisites**  
   Define the assumptions and requirements for the project's success.  

9. **List Materials Used**  
   Provide an upfront list of materials (e.g., operating systems, software). Just as a recipe specifies ingredients at the beginning, this helps streamline the documentation process.  

10. **Use Diagrams**  
    Incorporate diagrams to visualize processes and workflows. These enhance accessibility, especially for individuals who learn better through visual representations.  

11. **Include Dates**  
    Adding dates is a simple yet effective way to provide temporal context within the documentation, especially when dealing with multiple versions of the same project.

# Methods for Documentation  

## README  
One of the oldest and most common practices for documenting projects is the README file. Placed in the root directory of the project, it typically includes the documentation, useful links, tools used, and other relevant details. While this structure can vary depending on the project, the following is a basic prototype:  

1. **Project Objective**  
2. **How It Works**  
   - Tools used  
   - Programming languages  
   - Data structures  
3. **Code Access and Execution**  
4. **Guidelines for Making Changes**  
5. **Update and Monitoring Process**  
6. **Useful Links**  

# Structure Suggestions  

- **Objective**  
  Provide a technical description of the project’s purpose, including links to additional technical resources.  

- **How It Works**  
  Explain the software architecture used, the types of requests made, and how they are processed. Mention all languages and frameworks utilized throughout the project. Visual representations of the architecture, such as diagrams, are highly recommended.  

- **Code Access and Execution**  
  Specify the location of the source code, how to execute it, and any dependencies or downloads required to fully run the application.  

- **Use Standard Templates**  
  Employing standard templates or schemas helps streamline documentation efforts, avoiding the need to reinvent the wheel.  

# Useful Tools  

- **Read the Docs**  
  Similar to other documentation platforms like GitBook, Read the Docs is more advanced. It can sync with GitHub repositories by selecting specific repositories and requires a `.readthedocs.yaml` file in the repository's root directory.  

- **GitBook**  
  GitBook serves as a project documentation platform that simplifies document management. It allows any invited team member to access and contribute to the documentation easily.



## Integration Features  

With integration capabilities, tools like GitBook can synchronize with various platforms already used by teams, such as Jira, GitHub, Figma, and more.  

### **GitHub Synchronization**  
GitHub synchronization allows technical teams to connect GitHub repositories with GitBook, transforming Markdown files into polished, user-friendly documentation. This functionality enables you to edit directly in GitBook while keeping the content synchronized with the codebase in GitHub—and vice versa. However, it appears that only Markdown files, not code files, can be synchronized.  

### **ServiceNow**  
ServiceNow functions similarly to Jira but offers a broader range of features. It may be a more comprehensive choice for teams looking for advanced functionalities beyond basic task management.  

### **Document360**  
Document360 is a documentation tool that supports companies throughout the software development lifecycle, streamlining processes and workflows. It provides end-to-end support, from ideation to product launch, keeping the team informed about upcoming tasks, who is responsible for them, and their deadlines. This tool appears to be a highly effective option for enhancing productivity and clarity.  

---
# Conclusion  
Effective technical documentation is more than a formality—it's a critical component of successful project management. By adopting best practices, leveraging modern tools like GitBook and Document360, and fostering collaboration within teams, organizations can bridge knowledge gaps, improve workflows, and deliver exceptional results with greater efficiency.

# References:
- *Documentação Técnica* – Isaac Felisberto de Souza, 2021  
- *How to Create Project Documentation with Examples & Benefits* – Selvaraaju Murugesan, 2022  
- *Awesome-documentation* – vipulgupta2048, 2023  
- *Document Like a Scientist* – Karissa Peth, 2019  
- *The Knowledge: Towards a Culture of Engineering Documentation* – Riona MacNamara, 2016