import React from 'react';
import { observer } from 'mobx-react-lite';
import Container from './components/Container';
import PdfTronContainer from './components/PdfTronContainer';
import CounterContainer from './components/counter/CounterContainer';
import ContainerTodo from './components/counter/ContainerTodo';

const url = 'https://jsonplaceholder.typicode.com/posts'

const App = () => {
    // console.log('observer : ', observer)

    return (
        <div>
            <PdfTronContainer />
            <Container cont={url} array={false}/>
            <CounterContainer />
            <ContainerTodo />
        </div>
    );
}

export default App;
