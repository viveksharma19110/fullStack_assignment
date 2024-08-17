import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5500/cards?title=${title}&description=${description}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // Navigate to home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  return (
    <div>
      <button
        className="bg-white text-black px-4 py-2 rounded"
        onClick={handleToggle}
      >
        Submit a request
      </button>
      {isVisible && (
        <div className="bg-gray-100 p-4 mt-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Submit a Request</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Submit;