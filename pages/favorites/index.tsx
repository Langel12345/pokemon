
import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react'
import { Layout } from '../../componets/layouts'
import { FavoritePokemons } from '../../componets/pokemon';
import { NoFavorites } from '../../componets/ui'
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
    useEffect( () =>{
        setFavoritesPokemons( localFavorites.pokemos() );
    },[])
    return (
        <Layout title='Pokemos Favoritos'>
            {
                favoritesPokemons.length === 0
                ? (  <NoFavorites />)
                : (<FavoritePokemons pokemons={favoritesPokemons} /> )
            }
        </Layout>
    )
}

export default FavoritesPage