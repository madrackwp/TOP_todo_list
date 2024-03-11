https://www.theodinproject.com/lessons/node-path-javascript-todo-list

# Functional requirements:

- Dynamically create todos
  - User input
- Different project areas
- Store this locally on their machines (localStorage)

## Todos:

Each todo must have:

- Title
- Description
- Due Date
- Priority
- Notes (checklist)
- Checklist (checklist)
- Delete method
- Toggle Complete method

## Concepts to implement:

1. Seperate application logic from DOM-related code (using seperate modules)
2. Use webpack to package modules
3. SOLID Design Principles

### Colours used:

#37392E
#19647E
#28AFB0
#DDCECD
#EEE5E5

### localStorage storage

localStorage
|- todo_data
||- todos (array)
|||- id
|||- title
|||- description
|||- dueDate
|||- priority
|||- completed
