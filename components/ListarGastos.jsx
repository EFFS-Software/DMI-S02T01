import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class ListarGastos extends Component {
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
        <Text>Lista de Gastos:</Text>
        <FlatList
          data={this.state.gastos}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default ListarGastos;