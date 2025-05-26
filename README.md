# 🧠 Sortify – Sorting Algorithm Visualizer

Sortify is an interactive web application that visually demonstrates how various sorting algorithms work. It allows users to understand the logic and time complexity of different sorting techniques through animations, pseudocode highlighting, and color-coded operations.

---

## 🚀 Features

- 🎨 Visual representation of sorting algorithms
- ⚡ Adjustable speed and array size
- 📌 Pseudocode line tracking while sorting
- 🧩 Modal popup with algorithm info, complexity, and color state
- 🎯 Algorithms included:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort

---

## 🛠 Tech Stack

- **React** – Frontend UI
- **Tailwind CSS** – Styling
- **React Router** – Routing between components
- **ShadCN UI** – UI components
- **Vite** – Fast build tool for development

---

## 📁 Folder Structure
<pre>
sortingProject/
├── public/
│ └──icon.png
├── src/
│ ├── algorithms/
│ │ ├── bubbleSort.js
│ │ ├── heap.js
│ │ └── ...other algorithms
│ ├── components/
│ │ ├── ui/
| | | ├── button.jsx
| | | └── card.jsx
│ │ ├── AlgorithmInfo.jsx
│ │ ├── Bar.jsx
│ │ ├── FloatingParicles.jsx
│ │ ├── Nav.jsx
│ │ ├── Visualizer.jsx
│ │ └── PseudoCodeHighlight.js
│ ├── lib/
| | └── utils.js
│ ├── pages/
| | ├── About.jsx 
| | ├── Description.jsx
| | └── Home.js 
│ ├── data/
| | ├── pseudoCode.jsx
│ │ └── sortingAlgorithm.js
│ ├── util/
│ │ └── delay.js
│ ├── visualizer/
| | └── SortingVisualizer.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
└── README.md
</pre>
---

# To run Sortify locally
- git clone `https://github.com/08abhinav/Sortify.git`
- cd sortingProject
<pre> ```bash 
npm i 
# or 
yarn i 
# or 
pnpm i 
``` </pre>

- run the server
<pre> ```bash
npm run dev 
# or 
yarn dev 
# or
pnpm dev 
``` </pre>

- Open `http://localhost:5173` with your browser.

