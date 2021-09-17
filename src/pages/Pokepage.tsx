import React, { useCallback } from 'react'
import Pokedashboard from '../components/Pokedashboard/Pokedashboard'
import Pokedescription from '../components/Pokedescription/Pokedescription'
import Pokeimage from '../components/Pokeimage/Pokeimage'

interface Props {
    pokemon: any
}

function Pokepage(props: Props) {

    const getPokedata = useCallback(() => {
        const data = []
        data.push(["Stadistics", "Value"]);
        if (props.pokemon.stats) {
            for (const stat of props.pokemon.stats) {
                data.push([stat.stat.name, stat.base_stat])
            }
        }
        return data;
    }, [props.pokemon])

    return (
        <div className="w-100 d-flex justify-content-center flex-column">
            {
                props.pokemon ?
                    <>
                        <Pokeimage front_sprite={props.pokemon.sprites.front_default} back_sprite={props.pokemon.sprites.back_default} />
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-center row">
                                    {props.pokemon.types.map((element: any, key: any) => {
                                        return (
                                            <div className="col-auto text-capitalize" key={key}>{element.type.name}</div>
                                        )
                                    })}
                                </div>
                                {/* <div className="col">
                        <Pokedescription />
                    </div> */}
                            </div>
                            <div className="col-md">
                                <Pokedashboard data={getPokedata()} />
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    )
}

export default Pokepage
