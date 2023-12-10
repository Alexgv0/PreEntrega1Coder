const Costos = {
    NOCHE : 150,
    COMIDA : 60,
    MASAJES : 20,
    GYM : 10
}

const Datos =  {
    personas : parseInt(prompt("Ingrese la cantidad de personas que van a quedarse:")),
    noches : parseInt(prompt("Ingrese la cantidad de noches que deseas quedarte:")),
    comidas : parseInt(prompt("Ingrese la cantidad de comidas que desean al dia:")),
    masajes : parseInt(prompt("Ingrese la cantidad de personas que desean usar el servicio de masajes:")),
    gym : parseInt(prompt("Ingrese la cantidad de personas que desean ingresar a la sala de musculación:"))
}

const Total = {
    noches : 0,
    comidas : 0,
    masajes : 0,
    gym : 0,
    todo : 0
}

const verificar_datos = (datos) => {

    while (isNaN(datos.personas) || (datos.personas <= 0)) {
        alert(`Usted ingreso '${datos.personas}' lo cual no es un valor positivo de cantidad de personas.`);
        alert(`Por favor ingresarlo correctamente.`);
        datos.personas = parseInt(prompt("Ingrese la cantidad de personas que van a quedarse:"));
    }
    while (isNaN(datos.noches) || (datos.noches <= 0)) {
        alert(`${datos.noches} noches no es una cantidad valida de noches para quedarse.`);
        alert(`Por favor ingresarlo correctamente.`);
        datos.noches = parseInt(prompt("Ingrese la cantidad de noches que deseas quedarte:"));
    }
    while (isNaN(datos.gym) || (datos.gym > datos.personas)) {
        alert(`Usted ingreso '${datos.gym}' en las personas que desean utilizar la sala de musculacion, 
        lo cual no encaja con la cantidad de personas que van a quedarse.`);
        alert(`Por favor ingresarlo correctamente.`);
        datos.gym = parseInt(prompt("Ingrese la cantidad de personas que desean ingresar a la sala de musculación:"));
    }
    while (isNaN(datos.masajes) || (datos.masajes > datos.personas)) {
        alert(`Usted ingreso '${datos.masajes}' en las personas que desean el servicio de masaje, 
        lo cual no encaja con la cantidad de personas que van a quedarse. Por favor ingresarlo correctamente.`);
        datos.masajes = parseInt(prompt("Ingrese la cantidad de personas que desean ingresar a la sala de masajes:"));
    }
    if (isNaN(datos.comidas) || (datos.comidas <= 0)) {
        alert(`Esta seguro de no querer agregar ninguna comida a su orden?.`);
        alert(`Intentelo nuevamente, si vuelve a colocar un valor invalido o '0' no se agregara ninguna comida`);
        datos.comidas = parseInt(prompt("Ingrese la cantidad de comidas que desean al dia:"));
    }
    

}

const calcular_gastos = (datos, costo, resultados) => {
    resultados.noches = datos.personas*datos.noches*costo.NOCHE;
    resultados.comidas = datos.personas*datos.noches*datos.comidas*costo.COMIDA;
    resultados.masajes = datos.noches*datos.masajes*costo.MASAJES;
    resultados.gym = datos.noches*datos.gym*costo.GYM
    resultados.todo = datos.personas*datos.noches*(costo.NOCHE + datos.comidas*costo.COMIDA)+
    datos.noches*((datos.masajes*costo.MASAJES) + (datos.gym*costo.GYM));
}

const mostrar_resultados = (datos) => {
    for (const elemento in datos) {
        alert(`El costo total por ${elemento} es: ${datos[elemento]} USD`);
    }
}


verificar_datos(Datos);
calcular_gastos(Datos, Costos, Total);
mostrar_resultados(Total);
