//creo una funcion y la transpilacion/ tipos de variables

function holaTsc(param: string, arr: Array<number>, anyValue:undefined, obj: object){
    const saludoUno: string = "hola";
    const saludoDos: string = "mundo";
    return saludoUno + saludoDos;
}

holaTsc(10, [1,2,3,4], undefined, {id:1, nombre: 'gonzalo'})