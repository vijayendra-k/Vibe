import React from 'react';
import CreatePost from '../components/CreatePost';

const Feed: React.FC = () => {
  return (
    <div>
      <CreatePost />
      {/* Placeholder for actual posts */}
      <div style={{
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        textAlign: 'center',
        color: '#65676b'
      }}>
        No posts yet. Be the first to Vibe!
      </div>
    </div>
  );
};

export default Feed;
