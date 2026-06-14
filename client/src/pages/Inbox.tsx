import React from 'react';

const Inbox: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'white', 
      padding: '40px', 
      borderRadius: '8px', 
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2>Your Inbox</h2>
      <p style={{color: '#65676b'}}>You have no new messages.</p>
    </div>
  );
};

export default Inbox;
