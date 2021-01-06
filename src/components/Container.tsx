import React, {useState} from 'react';
import ContainerData from './ContainerData';
import { Style } from './styled';

export interface Cont {
    cont?: string
    array?: boolean
}

const Container = (props: Cont) => {
    const [state, setState] = useState([])

    const handleClick = (item: any) => {
        if(item === 0) {
            return fetch(`${props.cont}`)
                .then(response => response.json())
                .then(json => setState(json))
        }

        return fetch(`${props.cont}${item}`)
            .then(response => response.json())
            .then(json => setState(json))
    }

    return (
        <Style>
            <div>
                <button onClick={() => handleClick(0)}>get Data</button>
            </div>
            <div>
                <ContainerData onClick={() => handleClick(0)} data={state} array={props.array} />
            </div>
        </Style>
    )
}

export default Container;
