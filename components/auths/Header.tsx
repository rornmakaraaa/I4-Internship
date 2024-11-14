import React, { useEffect, useState } from 'react';

export default function Header() {
  const [usernameInitial, setUsernameInitial] = useState<string | null>(null);

  // Retrieve the first letter of the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsernameInitial(storedUsername.charAt(0).toUpperCase());
    }
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-blue-800 text-white border-b border-gray-300">
      <h1 className="font-bold text-4xl">CamAi</h1>
      <div className="flex items-center space-x-4">
        {usernameInitial && (
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-blue-800 font-semibold text-lg">
            {usernameInitial}
          </div>
        )}
      </div>
    </header>
  );
}