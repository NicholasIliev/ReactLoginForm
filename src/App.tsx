import React from "react";
import LoginForm from "./components/LoginForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
