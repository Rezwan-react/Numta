import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [showCleanButton, setShowCleanButton] = useState(false); // New state

  const handleClick = () => {
    let num = inputValue.trim();

    if (num === "" || isNaN(num)) {
      setError("Please enter a valid number");
      setResult("");
      setShowCleanButton(false);
      return;
    }

    setError("");
    let output = Array.from({ length: 10 }, (_, i) => 
      `${num} x ${i + 1} = ${num * (i + 1)}`
    ).join("\n");

    setResult(output);
    setShowCleanButton(true); // Show clean button after calculation
  };

  const handleClean = () => {
    setInputValue("");
    setResult("");
    setError("");
    setShowCleanButton(false); // Hide clean button
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="w-96 p-4 bg-[#9B7EBD] border-2 border-yellow-400 rounded-lg text-center">
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-4 font-bold text-3xl text-center border-2 border-blue-600 rounded-lg focus:outline-none"
          />
          {error && <p className="mt-2 text-xl text-red-500">{error}</p>}
        </div>
        <div className="mb-4">
          <button
            onClick={handleClick}
            disabled={!inputValue.trim()}
            className={`px-4 py-4 text-lg font-semibold text-white rounded-md active:scale-95 transition ${
              !inputValue.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-[#A6AEBF] hover:bg-[#8f98aa]"
            }`}
          >
            Click me
          </button>
        </div>
        {showCleanButton && ( // Show clean button after calculation
          <div className="mb-4">
            <button
              onClick={handleClean}
              className="px-4 py-4 text-lg font-semibold text-white bg-red-500 rounded-md active:scale-95 hover:bg-red-600 transition"
            >
              Clean
            </button>
          </div>
        )}
        <div className="w-full h-[400px] p-4 text-3xl bg-white rounded-lg flex justify-center items-center">
          <h1 className="whitespace-pre-line transition-all duration-300">{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
