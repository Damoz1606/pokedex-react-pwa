import { Avatar, Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { pokedexNumber } from '../../lib/utils';

interface Props {
    pokemons: any[],
    expand: boolean,
    eventSelect: (args: any) => void,
    eventClose: (args: any) => void,
}

function Sidebar(props: Props) {

    const handleSelected = (pokemon: any) => {
        props.eventSelect(pokemon)
    }

    return (
        <>
        <div className={props.expand ? 'side-background' : 'hidden'} onClick={() => props.eventClose(null)}></div>
            <Box bgcolor="paper" className={props.expand ? 'fixed side-nav d-flex flex-column overflow-auto side-nav-overflow sidebar-expand' : 'fixed side-nav d-flex flex-column overflow-auto side-nav-overflow sidebar-reduce'}>
                {
                    props.pokemons.map((element: any, key: any) => {
                        console.log(element);
                        return (
                            <Paper square className="w-100 d-flex justify-content-center" key={key} onClick={() => handleSelected(element)}>
                                <div className="side-nav-item">
                                    <span className="sidebar-item-avatar">
                                        {pokedexNumber(key + 1)}
                                    </span>
                                    <div className="sidebar-item-text">
                                        <h6>{element.name}</h6>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Box>
        </>

    )
}

export default Sidebar
