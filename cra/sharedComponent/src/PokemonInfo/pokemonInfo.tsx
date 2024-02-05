import React, { useEffect, useState } from 'react';

const PokemonInfo = () => {
    const [pokemonData, setPokemonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {pokemonData ? (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    {/* Display other data as needed */}
                </div>
            ) : (
                <p>Loading Pokemon data...</p>
            )}
        </div>
    );
};

export default PokemonInfo;