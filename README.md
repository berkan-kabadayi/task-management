# 🚀 Modern Task Management System

A sleek, modern, and high-performance Task Management application built with React, TypeScript, and React-Bootstrap. This project features a robust Drag-and-Drop system, allowing users to efficiently organize tasks across different stages.

## ✨ Features

- **Drag and Drop Interface**: Seamlessly move tasks between columns (To Do, In Progress, Done) or reorder them within a column using `@hello-pangea/dnd`.
- **Task Creation**: Quickly add new tasks via a modern Modal form with validation.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Premium Dark Theme**: Features a professional dark UI with smooth transitions, linear gradients, and interactive hover effects.
- **Full Type Safety**: Developed with TypeScript for better maintainability and developer experience.

## 🛠️ Tech Stack

| Category          | Tools                    | Description                                                    |
| ----------------- | ------------------------ | -------------------------------------------------------------- |
| **Framework**     | React 18                 | Modern UI library with Hooks for declarative components.      |
| **Language**      | TypeScript               | Strict typing for enhanced code quality and developer experience. |
| **UI & Styling**  | React Bootstrap & CSS3   | Pre-built components with custom dark theme styling.          |
| **Drag & Drop**   | @hello-pangea/dnd        | Smooth and accessible drag-and-drop functionality.            |
| **ID Generation** | nanoid                   | Lightweight, secure unique ID generation.                     |

## 🚀 Getting Started

Follow these steps to get the project running locally:

1. **Clone the repository:**
```bash
   git clone https://github.com/berkan-kabadayi/task-management.git
```

2. **Navigate to the project directory:**
```bash
   cd task-management
```

3. **Install dependencies:**
```bash
   npm install
   # or
   yarn install
```

4. **Start the development server:**
```bash
   npm run dev
   # or
   yarn dev
```

## 📂 Project Structure
```
src/
├── components/     # UI Components (TaskBoard, TaskCard, TaskColumn, AddTaskForm)
├── data/           # Initial mockup data (initialTask.ts)
├── types/          # TypeScript interfaces (types.ts)
├── App.css         # Global styles and dark theme variables
├── App.tsx         # Main application entry point & state management
├── index.css       # Base styles
└── main.tsx        # React DOM rendering
```

## ⚙️ Key Implementation Details

- **State Management**: Uses React's `useState` hook to manage the global task list.
- **Drag Logic**: The `onDragEnd` handler in `TaskBoard.tsx` manages complex array reordering and status updates when a task is dropped.
- **Theming**: Utilizes CSS variables for a consistent and easily customizable dark color palette.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/berkan-kabadayi/task-management/issues).

---

Made with ❤️ by [Berkan Kabadayı](https://github.com/berkan-kabadayi)