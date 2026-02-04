# 🚀 Modern Task Management System

A sleek, modern, and high-performance Task Management application built with React, TypeScript, and React-Bootstrap. This project features a robust Drag-and-Drop system, allowing users to efficiently organize tasks across different stages.

## ✨ Features

- **Drag and Drop Interface:** Seamlessly move tasks between columns (To Do, In Progress, Done) or reorder them within a column using `@hello-pangea/dnd`.
- **Task Creation:** Quickly add new tasks via a modern Modal form with validation.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **Premium Dark Theme:** Features a professional dark UI with smooth transitions, linear gradients, and interactive hover effects.
- **Full Type Safety:** Developed with TypeScript for better maintainability and developer experience.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling:** [React Bootstrap](https://react-bootstrap.github.io/) & Custom CSS3
- **Drag & Drop:** [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **ID Generation:** [nanoid](https://github.com/ai/nanoid)

## 🚀 Getting Started

Follow these steps to get the project running locally:

1. **Clone the repository:**

   ```
   git clone https://github.com/berkan-kabadayi/task-management.git
   Navigate to the project directory:

   ```

2. Navigate to the project directory:

   cd task-management

3. Install dependencies:

   npm install

   # or

   yarn install

4. Start the development server:

npm run dev

# or

yarn dev

## 📂 Project Structure

src/
├── components/ # UI Components (TaskBoard, TaskCard, TaskColum, AddTaskForm)
├── data/ # Initial mockup data (initialTask.ts)
├── types/ # TypeScript interfaces (types.ts)
├── App.css # Global styles and dark theme variables
├── App.tsx # Main application entry point & state management
├── index.css # Base styles
└── main.tsx # React DOM rendering

## ⚙️ Key Implementation Details

State Management: Uses React's useState hook to manage the global task list.

Drag Logic: The onDragEnd handler in TaskBoard.tsx manages complex array reordering and status updates when a task is dropped.

Theming: Utilizes CSS variables for a consistent and easily customizable dark color palette.
