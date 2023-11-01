import React, { Component } from 'react';
import { View } from 'react-native';
import ListarGastos from './components/ListarGastos';
import AdicionarGasto from '.components/AdicionarGasto';

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
        <ListarGastos />
        <AdicionarGasto onAdicionarGasto={this.adicionarGasto} />
      </View>
    );
  }
}

export default App;