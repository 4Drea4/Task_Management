
# README Template 
*Andrea E. December 8<sup>th<sup> 2025* 

## Table of contents 
 ### Table of contents 
  1. [Overview](#Overview)
     1. [Features](#Features) 
     2. [Usage](#Usage)
  2. [Problem](#problem)     
     1. [Problem Breakdown/ Goal](#problem-breakdown-goal)
     2. [Questions and Answer](#questions--answers)
     3. [Input?](#input-)
     4. [Output?](#output-)
     5. [Step by step Plan](#step-by-step-process-what-will-i-need-to-do)
  3. [What I did step by step](#what-i-did-in-detail)
  4. [Trouble Shooting ](#troubleshooting)
  5. [Reflection](#reflection)
  6. [References](#references)
     1. [Programs Used ](#programs-i-used) 

## Project Overview 
In this lab, I created a task management application that demonstrates dynamic list rendering, proper key usage and conditional rendering. Using Typescript I created components that handle lists of data, implemented filtering, and show different states based on task properties. This project focused on list rendering, key management, conditional rendering and component composition in React. 

## Problem 
### Problem Breakdown!/ Goal
1. Component Implementation:
→ Implement each component according to its interface requirements.
→ Use proper TypeScript types and interfaces.
→ Implement list rendering with unique keys.
→Add conditional rendering based on task properties.

2. List Management:

→ Render the task list with proper key props.
→ Implement filtering functionality.
→ Handle task status changes.
→ Implement task deletion.

3. Visual Feedback:

→ Show different styles based on task status and priority.
→ Implement hover and active states.
→ Add visual indicators for task properties.

4.Component Composition:

→ Compose components to create a complete task management interface.
→ Handle prop passing between components.
→ Implement proper event handling.


### Questions + Answers  

### Input
All data will be pre-inserted into the app component, however we will be able to interact with the data by filtering it, changing the status, and deleting it. 




## Troubleshooting 
   I ran into several errors as I was pulling in information from props, and unsure of what data to put where. I relied on past examples for clarity and when I could not resolve the problem on my own I resulted to asking for additional assistance.

### Problems 

1.  Mapping through a more complex problem takes thorough understanding of what you are trying to accomplish on a very detailed level. 
2. Use State is still very new, mixed with the understanding of react and now conditionals and lists making this is a very difficult project. 
3. 
4. 

### Solutions


1. I continued to read through the directions, and utilized examples to create that task manager.
2. I pulled every resource I could out of my aresenal, in depth explanations with instructors, watching numerous videos available on youtube, reading react documentation, discussing concepts with classmates, not sleeping enough, playing react in the background as I sleep hoping that the white noise seeps into my brain as I sleep. 


## Reflection
1. How did you ensure unique keys for your list items?
   - By using key to the id of the from the Task object I assigned the value.
2. What considerations did you make when implementing the filtering functionality?
   - I originally was going to manage the state for multiple objects but with some re-direction from my instructing assistant I found it more straight forward to use a single state object. So we created a Filters type and added an handle change that could work for both elements. I also understand the logic for TaskFilter as it does not do the filtering but lets the parent app complete it, however I did not implement this successfully on the UI. 
3. How did you handle state updates for task status changes?
   - The tasks state livies in the App and handles callback function.
4. What challenges did you face when implementing conditional rendering?
- I found it difficult to handle unions in the beginning, I found it tricky to successfully map through the contents of each component with respect to where the parent was needed. The syntax of use state has become a bit more familiar however with conditionals and keys being very new I did have difficulties and relied heavily on past examples. The way components engage with parent app is a bit difficult to implement although I am understanding it more conceptually. 

## References 
- [React - Conecptually and how things interact](https://youtu.be/edsuuCsiah0?si=eJKVAvQAK_KjYmlb)
- [Conditionals](https://youtu.be/XvURBpFxdGw?si=RddXUHgEaJdjE_cQ)
- [Parent Child interactions](https://youtu.be/NkKrPeX1W5E?si=lI-ayR1tTDIPCl3R)
- [Objects in state](https://youtu.be/YxQlt3n1ZPA?si=ppaOTWZ1F3lDoyof)

### Programs I used 
n/a

### Websites I used
- [handles](https://legacy.reactjs.org/docs/handling-events.html)
- [State examples](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react)
- [Hooks](https://forum.freecodecamp.org/t/react-hooks-how-to-use-updated-state-immediately/638822)

Disclaimer:
I received very hands on assistance from a few classmates on this project. 
- Eduart with rendering in the app and composition of mapping over my task list items. <br>
- Javon with project planning, use state assistance and resources. <br>
- Bryans assistance in office hourse <br>
- Group 1 With emotional support.<br>
