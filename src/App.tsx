import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false });

export default function App() {
  const [designCode, setDesignCode] = useState('');
  const [umlCode, setUmlCode] = useState('');
  const [diagramSvg, setDiagramSvg] = useState('');

  const generateUML = () => {
    setUmlCode(designCode);
  };

  useEffect(() => {
    if (umlCode) {
      try {
        mermaid.render('mermaid-diagram', umlCode).then(({ svg }) => {
          setDiagramSvg(svg);
        });
      } catch (err) {
        setDiagramSvg('<p style="color:red">Invalid Mermaid syntax.</p>');
      }
    }
  }, [umlCode]);

  return (
    <div className="p-6 grid grid-cols-2 gap-6 bg-white min-h-screen">
      <div>
        <h2 className="text-xl font-semibold mb-2">Enter Mermaid UML Code</h2>
        <textarea
          value={designCode}
          onChange={(e) => setDesignCode(e.target.value)}
          className="w-full h-80 border p-2"
          placeholder={`e.g.\nclassDiagram\n  Class01 <|-- Class02\n  Class03 *-- Class04`}
        />
        <button onClick={generateUML} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Generate UML</button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">UML Diagram</h2>
        <div
          className="bg-gray-50 p-4 border rounded overflow-auto"
          dangerouslySetInnerHTML={{ __html: diagramSvg }}
        />
      </div>
    </div>
  );
}
