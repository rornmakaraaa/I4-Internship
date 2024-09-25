import React, { useState, useEffect, useRef } from 'react';
import {FaEdit,FaTrash, FaUser } from "react-icons/fa";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  lastActive: string;
  dateAdded: string;
}

interface VerticalOptionsProps {
  user: User;
}

const Options: React.FC<VerticalOptionsProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    console.log(`Editing user: ${user.name}`);
  };

  const handleDelete = () => {
    console.log(`Deleting user: ${user.name}`);
  };

  const handleViewProfile = () => {
    console.log(`Viewing profile of: ${user.name}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none p-2"
        aria-label="Options"
      >
        ⋮
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 bg-white shadow-lg w-36 z-10 transition-opacity duration-300 ease-in-out">
          <button
            onClick={handleEdit}
            className="flex flex-row w-full text-left px-4 py-2 hover:bg-gray-100">
              <FaEdit className="mr-2 mt-1" style={{ color: 'blue' }}/>
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex flex-row w-full text-center px-4 py-2 hover:bg-gray-100">
              <FaTrash className="mr-2 mt-1" style={{ color: 'red' }}/>
            Delete
          </button>
          <button
            onClick={handleViewProfile}
            className="flex flex-row w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              <FaUser className="mr-2 mt-1"/>
            View Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Options;