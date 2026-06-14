import React from 'react';

const Bookmarks: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'white', 
      padding: '40px', 
      borderRadius: '8px', 
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2>Your Bookmarks</h2>
      <p style={{color: '#65676b'}}>You haven't saved any posts yet.</p>
    </div>
  );
};

export default Bookmarks;
