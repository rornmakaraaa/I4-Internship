import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1 className="font-bold text-black-500 text-4xl">CamAi</h1>
      <div className="user-info">
        <div className="bell-icon">🔔</div>
        <div className="user-avatar">
          <img src="/profile.jpg" alt="Mama" />
        </div>
        <div className="user-name">Mama</div>
      </div>
<style jsx>{`
  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  }
  .user-info {
  display: flex;
  align-items: center;
  }
  .bell-icon {
  margin-right: 15px;
  font-size: 24px;
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