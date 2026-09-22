import React, { useState, useEffect } from 'react';

const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
    };

    const handleClick = () => {
      setVisible(false);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleRefresh = () => {
    sessionStorage.setItem('scrollPosition', '0');
    window.location.reload();
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <div
      id="custom-context-menu"
      className="context-menu"
      style={{
        display: visible ? 'block' : 'none',
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <ul>
        <li id="refresh" onClick={handleRefresh}>
          Refresh
        </li>
        <li id="back" onClick={handleBack}>
          Back
        </li>
        <li id="forward" onClick={handleForward}>
          Forward
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
