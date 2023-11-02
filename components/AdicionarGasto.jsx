import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class AdicionarGasto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nuevoGasto: {
        nombre: '',
        valor: '',
      },
    };
  }

  handleNombreInput = (text) => {
    this.setState((prevState) => ({
      nuevoGasto: {
        ...prevState.nuevoGasto,
        nombre: text,
      },
    }));
  };

  handleValorInput = (text) => {
    this.setState((prevState) => ({
      nuevoGasto: {
        ...prevState.nuevoGasto,
        valor: text,
      },
    }));
  };

  adicionarGasto = () => {
    if (this.state.nuevoGasto.nombre !== '' && this.state.nuevoGasto.valor !== '') {
      this.props.onAdicionarGasto(this.state.nuevoGasto);
      this.setState({
        nuevoGasto: {
          nombre: '',
          valor: '',
        },
      });
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Nombre del Gasto"
          value={this.state.nuevoGasto.nombre}
          onChangeText={this.handleNombreInput}
        />
        <TextInput
          placeholder="Valor del Gasto"
          value={this.state.nuevoGasto.valor}
          onChangeText={this.handleValorInput}
          keyboardType="numeric"
        />
        <Button title="Adicionar Gasto" onPress={this.adicionarGasto} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});

export default AdicionarGasto;