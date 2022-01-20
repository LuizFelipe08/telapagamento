import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

export default  function Picker () {
    const place = {
        label: 'Escolha uma opção',
        value: null,
        color: '#000',
        fontSize: 20
    }
    return(
        <RNPickerSelect
        placeholder={place}
        items = {[
            { key: '1', label: 'Placa Avulsa', value:'Placa Avulsa'},
            { key: '2',label: 'Placa de Moto', value:'Placa de Moto'},
            { key: '3',label: 'Par de Placas', value:'Par de Placas'} 
        ]}
        onValueChange={ (valor) => console.log(valor)}
        style={{
            inputIOS: {
                fontSize: 20,
                color: '#000'
            },
            inputAndroid: {
                fontSize: 20,
                color: '#000'
            }
        }}
        />
    )
}