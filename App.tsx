import { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {

    const [Fecha, setFecha] = useState('');
    const [Name, setName] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Concepto, setConcepto] = useState('');
    const [Codigo, setCodigo] = useState('');
    const [Cuenta, setCuenta] = useState('');
    const [Credito, setCredito] = useState(0);
    const [Debito, setDebito] = useState(0);

    const saveDate = (text: string) => {
        if (text.length >= 12 && text != '2022-07-29') {
            alert('Error fecha')
            return
        }
        else (Text.length <= 12); {
            setFecha(text);
            console.log(text);
        }
    };

    const saveJournal = () => {
        console.log(` \n La fecha es: ${Fecha} \n\n`)
        console.log(`Nombre Completo: ${Name}  ${Apellido} \n\n`)
        console.log(`Descripción: ${Concepto} \n\n`)
        console.log(`El codigop es: ${Codigo} \n\n`)
        console.log(`El numero de cuenta es: ${Cuenta} \n\n`)
    }
    //*******estos valores aparaceran hasta que precione el boton*******//
    const saveName = (text: string) => {
        setName(text);
    }

    const saveLastName = (text: string) => {
        setApellido(text);
    }

    const saveConcept = (text: string) => {
        setConcepto(text)
    }

    const saveCodigo = (text: string) => {
        setCodigo(text)
    }

    const saveCuenta = (text: string) => {
        setCuenta(text)
    }

    const isNumber = (text: string) => {
        const TextIsNumber = Number(text);
        return !Number.isNaN(TextIsNumber);
    }

    const saveCredit = (text: string) => {
        console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);
    }

    const saveDebit = (text: string) => {
        console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);
    }

    return (
        <View>
            <Text> Journals </Text>

            <Text> Fecha: </Text>
            <TextInput placeholder='Fecha' onChangeText={(text) => saveDate(text)} />

            <Text> Nombre: </Text>
            <TextInput placeholder='Nombre' onChangeText={(text) => saveName(text)} />

            <Text> Apellido: </Text>
            <TextInput placeholder='Apellido' onChangeText={(text) => saveLastName(text)} />

            <Text> Concepto: </Text>
            <TextInput placeholder='Concepto' onChangeText={(text) => saveConcept(text)} />

            <View>

                <Text> Codigo: </Text>
                <TextInput placeholder='Codigo' onChangeText={(text) => saveCodigo(text)} />

                <Text> Cuenta: </Text>
                <TextInput placeholder='Cuenta' onChangeText={(text) => saveCuenta(text)} />

                <Text> Credito: </Text>
                <TextInput placeholder='Credito' onChangeText={(text) => saveCredit(text)} />

                <Text> Debito: </Text>
                <TextInput placeholder='Debito' onChangeText={(text) => saveDebit(text)} />

                <Button title='Guardar' onPress={() => saveJournal()} />
            </View>
        </View>
    );
}
