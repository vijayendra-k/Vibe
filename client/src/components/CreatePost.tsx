import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost: React.FC = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // 5 MB = 5 * 1024 * 1024 bytes
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError(`File ${selectedFile.name} is too large. Maximum size is 5MB.`);
        setFile(null);
        e.target.value = ''; // Reset the input
      } else {
        setError(null);
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !file) return;

    // TODO: Upload file to Firebase Storage, get URL, and save post to Firestore
    alert(`Post submitted! Text: ${text}, File: ${file?.name || 'none'}`);
    setText('');
    setFile(null);
  };

  return (
    <div className="create-post-card">
      <form onSubmit={handleSubmit}>
        <div className="create-post-top">
          <div className="avatar-placeholder"></div>
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="create-post-input"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {file && <div className="file-preview">Attached: {file.name}</div>}

        <div className="create-post-bottom">
          <div className="create-post-actions">
            <label className="action-btn">
              📷 Photo/Video
              <input 
                type="file" 
                accept="image/*,video/*" 
                onChange={handleFileChange} 
                style={{display: 'none'}} 
              />
            </label>
          </div>
          <button type="submit" className="btn-post" disabled={!text.trim() && !file}>Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
