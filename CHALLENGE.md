# TodoApp - Extended Challenge

## 📋 General Requirements

- As a client, I want an application that manages a list of pending tasks.
- As a client, I want an application created with Vite and developed with React/JavaScript.

## 🧩 Components

- As a client, I want a `<Header/>` component that renders a level #1 heading with the text '_TodoApp_'.
- As a client, I want a `<Subheader>` component that renders a level #2 heading with the text '_Todo List Manager_'. This component should receive a `subtitle` prop to make it reusable in other parts of the application.
- As a client, I want a `<ListHeader>` component that renders a level #3 heading with the text '_Todo List_'. This component should receive a `content` prop to make it reusable in other parts of the application.
- As a client, I want an `<ItemCard>` component that renders an item of an unordered list with all the required information. This component should receive an `item` prop to make it reusable in other parts of the application.
  - Item title should be rendered using a level #4 heading.
    - It must be strikethrough if the status item is '_done_'.
    - It must be bold if the status item is '_in progress_'.
    - It must be regular if the status item is '_pending_'.
  - Item description should be rendered using a paragraph.
  - Item status should be rendered using a span.
    - It must be in green if the status item is '_done_'.
    - It must be in blue if the status item is '_in progress_'.
    - It must be in grey if the status item is '_pending_'.
- As a client, I want an `<ItemsList>` component that renders an unordered list with an `<ItemCard>` for each item in the list. This component should receive an `itemsList` prop to make it reusable in other parts of the application.
- As a client, I want a `<ListContainer/>` component that renders only the elements it wraps [`<ListHeader>` and `<ItemsList>`].

## ✨ New Features

- **Task Creation Form:**

  - As a client, I want a `<TaskForm>` component that allows users to create new tasks.
  - The form should include fields for:
    - Task title (required).
    - Task description (required).
    - Task status (default to '_pending_').
  - The form should include a submit button to add the task to the list.

- **State Persistence:**

  - As a client, I want the application to persist pending tasks in its state.
  - The newly added tasks should be displayed in the `<ItemsList>` component.
  - The application should maintain the list state even after re-renders.

- **Component Testing:**

  - As a client, I want basic unit tests for the following components:
    - `<ItemsList>`: To ensure it correctly renders the list of tasks.
    - `<ItemCard>`: To validate that items are displayed with the correct formatting according to their status.

- **CI Configuration:**
  - As a client, I want `LintStaged` and `Husky` to be configured in the project to validate the CI process.
  - Linting and formatting should be automatically checked before committing changes.
  - Pre-commit hooks should run tests to ensure code stability.

## 🎨 Styles

- As a client, I want the application to adhere to the design of the provided prototype.
- As a client, I want each component to be responsible only for its styles to avoid collisions.
- As a client, I want class names to adhere to BEM notation.
- As a client, I want the design to be 'mobile first'.

## 🌐 Browser

- As a client, I want the browser tab to display '_TodoApp_'.
- As a client, I want the console to show no errors.

## 🚀 DevOps and Deployment

- As a client, I want the application to be deployed and available through a URL in the preview environment before going to production.

---

This challenge extends the previous version by adding task creation, state management, component testing, and CI validation with LintStaged and Husky. Good luck!
