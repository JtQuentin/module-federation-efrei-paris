import React from 'react';
import Navbar from '../../sharedComponent/src/NavBar/navbar' // Importing the Navbar component
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Navbar />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    {/* <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense> */}
  </div>
);

export default App;
