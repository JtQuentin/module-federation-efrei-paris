import React from 'react';
import Navbar from '../../sharedComponent/src/navbar'
import Footer from '../../sharedComponent/src/footer'
import PokemonInfo from '../../sharedComponent/src/PokemonInfo/pokemonInfo'
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Navbar />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <PokemonInfo />
    { <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense> }
    <Footer />
  </div>
);

export default App;
