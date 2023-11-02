import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import ModificarGasto from './ModificarGasto';

class ListarGastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gastos: [
        { nombre: 'Gasto 1', valor: 10 },
        { nombre: 'Gasto 2', valor: 20 },
        { nombre: 'Gasto 3', valor: 30 },
      ],
      gastoSeleccionado: null,
    };
  }

  adicionarGasto = (nuevoGasto) => {
    this.setState((prevState) => ({
      gastos: [...prevState.gastos, nuevoGasto],
    }));
  };

  modificarGasto = (gasto) => {
    this.setState({ gastoSeleccionado: gasto });
  };

  guardarCambios = (gastoEditado) => {
    const gastosActualizados = this.state.gastos.map((gasto) =>
      gasto === this.state.gastoSeleccionado ? gastoEditado : gasto
    );
    this.setState({
      gastos: gastosActualizados,
      gastoSeleccionado: null,
    });
  };

  render() {
    return (
      <View>
        <Text>Lista de Gastos:</Text>
        <FlatList
          data={this.state.gastos}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nombre} - Valor: ${item.valor}</Text>
              <Button title="Editar" onPress={() => this.modificarGasto(item)} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {this.state.gastoSeleccionado && (
          <ModificarGasto
            gastoActual={this.state.gastoSeleccionado}
            onGuardarCambios={this.guardarCambios}
          />
        )}
      </View>
    );
  }
}

export default ListarGastos;