import { Grid  } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../componets/layouts';
import { PokemonListResponse, SmalPokemon } from '../interfaces';
import { useRouter } from 'next/router'
import { PokemonCard } from '../componets/pokemon';

interface Props {
  pokemons : SmalPokemon[]
}
const HomePage: NextPage<Props> = ({pokemons}) => {
  let router = useRouter()
  return (
    <Layout title='Listado de Pokemos'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map((pokemon) =>(
            <PokemonCard key ={pokemon.id}
              pokemon={ pokemon }
            />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps : GetStaticProps = async (ctx)=>{
    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemons : SmalPokemon[] = data.results.map( (poke ,i ) =>({
      ...poke,
      id: i+1,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }))
    return {
      props:{
          pokemons
      }
    }
}
export default HomePage
