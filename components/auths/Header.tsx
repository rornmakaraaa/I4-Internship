import React from 'react';
import { FaBell} from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <h1 className="font-bold text-4xl text-white">CamAi</h1>
      <div className="user-info">
      <FaBell className="bell-icon text-white" style={{ fontSize: '24px', marginRight: '15px' }} />
        <div className="user-avatar">
          <img src="/profile.jpg" alt="Mama" />
        </div>
      </div>
<style jsx>{`
  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1E3A8A;
  border-bottom: 1px solid #ddd;
  }
  .user-info {
  display: flex;
  align-items: center;
  }
  .user-avatar img {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  }
  .user-name {
  font-size: 20px;
  font-weight: bold;
  }
  `}</style>
</header>
);
}