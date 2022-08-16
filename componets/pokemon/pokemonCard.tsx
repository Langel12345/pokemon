import { Grid, Card, Row, Text } from "@nextui-org/react"
import { FC } from "react"
import { SmalPokemon } from "../../interfaces"
import { useRouter } from 'next/router';

interface Props {
    pokemon : SmalPokemon
}

export const PokemonCard : FC<Props> = ({pokemon}) =>{
    
    const router = useRouter()
    const onClick =( () =>{
        router.push(`/name/${pokemon.name}`)
    })

    const { id, name , img} =pokemon
    return(
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card onClick={onClick}
                hoverable clickable>
            <Card.Body css={ {p :1}}>
                <Card.Image 
                src={ img } 
                width="100%"
                height={140}
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{name}</Text>
                <Text>#{id}</Text>
                </Row>
            </Card.Footer>
            </Card>
        </Grid>
    )
}