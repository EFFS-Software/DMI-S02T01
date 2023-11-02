import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class ModificarGasto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gastoEditado: {
        nombre: this.props.gastoActual.nombre,
        valor: this.props.gastoActual.valor.toString(),
      },
    };
  }

  handleNombreInput = (text) => {
    this.setState((prevState) => ({
      gastoEditado: {
        ...prevState.gastoEditado,
        nombre: text,
      },
    }));
  };

  handleValorInput = (text) => {
    this.setState((prevState) => ({
      gastoEditado: {
        ...prevState.gastoEditado,
        valor: text,
      },
    }));
  };

  guardarCambios = () => {
    if (this.state.gastoEditado.nombre !== '' && this.state.gastoEditado.valor !== '') {
      this.props.onGuardarCambios(this.state.gastoEditado);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Nombre del Gasto"
          value={this.state.gastoEditado.nombre}
          onChangeText={this.handleNombreInput}
        />
        <TextInput
          placeholder="Valor del Gasto"
          value={this.state.gastoEditado.valor}
          onChangeText={this.handleValorInput}
          keyboardType="numeric" 
        />
        <Button title="Guardar Cambios" onPress={this.guardarCambios} />
      </View>
    );
  }
}

export default ModificarGasto;