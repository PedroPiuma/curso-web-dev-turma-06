import { Fragment } from 'react';
import './App.css';
import Nome from './components/Nome/Nome';
import Exercicio02 from './components/Exercicio02/Exercicio02'
import Card from './components/Card/Card';

function App() {
  return (
    <Fragment>
      <Card title='Título' img='icone'>Descrição</Card>
      <Card title='Título 2' img='icone'>Descrição 2</Card>
      <Nome />
      <Exercicio02 />
    </Fragment>
  );
}

export default App;
