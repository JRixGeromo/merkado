import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' instead of 'react-dom'
import './src/styles/tailwind.css'; // Import your styles

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Merkado
        </h1>
        <p className="text-gray-600 mb-6">
          We are excited to have you here. Let's get started with your journey!
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

// Get the root element and use `createRoot`
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!); // Use `createRoot` instead of `render`

// Render the app
root.render(<WelcomePage />);
