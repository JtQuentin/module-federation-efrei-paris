import React from 'react';
import Navbar from '../../sharedComponent/src/NavBar/navbar' // Importing the Navbar component
import Footer from '../../sharedComponent/src/Footer/footer' // Importing the Footer component
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Navbar />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    {/* <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense> */}
    <Footer />
  </div>
);

export default App;
