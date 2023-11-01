import React, { Component } from 'react';
import { View } from 'react-native';
import ListarGastos from './components/ListarGastos';
import AdicionarGasto from './components/AdicionarGasto';
import Titulo from './components/Titulo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gastos: [],
    };
  }

  adicionarGasto = (nuevoGasto) => {
    this.setState((prevState) => ({
      gastos: [...prevState.gastos, nuevoGasto],
    }));
  };

  render() {
    return (
      <View>
        <Titulo texto="Registro de Gastos" />
        <ListarGastos />
        <AdicionarGasto onAdicionarGasto={this.adicionarGasto} />
      </View>
    );
  }
}

export default App;