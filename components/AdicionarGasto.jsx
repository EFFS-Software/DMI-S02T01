import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class AdicionarGasto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nuevoGasto: '',
    };
  }

  handleInput = (text) => {
    this.setState({ nuevoGasto: text });
  };

  adicionarGasto = () => {
    if (this.state.nuevoGasto !== '') {
      this.props.onAñadirGasto(this.state.nuevoGasto);
      this.setState({ nuevoGasto: '' });
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Nuevo Gasto"
          value={this.state.nuevoGasto}
          onChangeText={this.handleInput}
        />
        <Button title="Adicionar Gasto" onPress={this.adicionarGasto} />
      </View>
    );
  }
}

export default AdicionarGasto;