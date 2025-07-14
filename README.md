# UML Generator (with React + Tailwind + Mermaid)

This is a web-based UML diagram generator that allows you to write **Mermaid UML code** and instantly visualize the result.  
Perfect for developers, designers, and software engineers who want quick UML visualizations without the hassle.

---

## Features

- Write Mermaid code directly in the text editor
- Render real-time UML diagrams (class, sequence, etc.)
- Powered by [Mermaid.js](https://mermaid.js.org)
- Styled with Tailwind CSS
- Built with React + Vite + TypeScript

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Mermaid.js**

---

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open your browser
# Visit: http://localhost:5173
```

---

## Usage

1. In the left textarea, input valid Mermaid UML syntax.

   Example:
   ```mermaid
   classDiagram
     class Weapon {
       +fire()
       +reload()
     }
     class Bullet
     Weapon --> Bullet
   ```

2. Click the **“Generate UML”** button.

3. View the rendered diagram on the right!

---

## Project Structure

```
uml-generator/
├── public/
├── src/
│   ├── App.tsx        # Main component with logic
│   ├── main.tsx       # App entry point
│   └── index.css      # Tailwind entry
├── index.html         # HTML root
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Notes

- Mermaid is initialized with `startOnLoad: false` to allow manual rendering.
- SVG is injected using `dangerouslySetInnerHTML`.

---

## To-Do Ideas

- Export diagram as PNG
- GPT Integration for natural-language-to-UML
- Mermaid syntax validation
- Diagram templates

---

## 👨‍💻 Author

Juwon Jung (@p4krq6cj2r)  
AI/Data Science 연구소
