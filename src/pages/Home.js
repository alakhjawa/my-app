import React from 'react';

const Home = ({ visits, bannerId }) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Banner ID: {bannerId}</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
};

export default Home;

