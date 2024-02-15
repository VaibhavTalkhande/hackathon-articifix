import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        fetch('http://localhost:5000/api/example')
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error(err))
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
    , [])
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

export default Home;