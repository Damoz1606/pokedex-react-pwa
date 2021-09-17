import React from 'react'

interface Props {
    back_sprite: string;
    front_sprite: string;
}

function Pokeimage(props: Props) {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="poke-image">
                <img src={props.front_sprite} alt="" />
            </div>
            <div className="poke-image">
                <img src={props.back_sprite} alt="" />
            </div>
        </div>
    )
}

export default Pokeimage
