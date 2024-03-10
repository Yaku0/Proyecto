const readlineSync = require('readline-sync');
// inicio del proyecto
let totalDeMaletasRegistradas = 0;
let totalConDescuento = 0;
let pesoTotalMaletas = 0;
let pesoMaximoMaleta = 0; 
let maletaMasPesada = 0;

let totalMaletasHombres = 0; 
let pesoTotalHombres = 0; 
let totalMaletasMujeres = 0; 
let pesoTotalMujeres = 0; 


const ciudadesAdmitidas = ['San Andres', 'Pereira', 'Medellin', 'Cali', 'Manizales', 'Barranquilla', 'Bogota'];
const promedioPesoHombres = totalMaletasHombres > 0 ? pesoTotalHombres / totalMaletasHombres : 0;
const promedioPesoMujeres = totalMaletasMujeres > 0 ? pesoTotalMujeres / totalMaletasMujeres : 0;

function ingresarMaleta() {
    console.info('Peso máximo de la maleta sin pago extra: 23 kg');
    const pesoMaximoMaleta = 23;

    do {
        let peso = parseFloat(readlineSync.question('Ingrese el peso de la maleta: '));

        if (isNaN(peso)) {
            console.error('El peso ingresado no es válido.');
        } else if (peso <= 0) {
            console.error('El peso ingresado debe ser mayor que cero.');
        } else {
            if (peso <= pesoMaximoMaleta) {
                console.info('Su maleta ha sido registrada con éxito.');
                totalDeMaletasRegistradas++; // Contador de las maletas

                if (peso > pesoMaximoMaleta) {
                    pesoMaximoMaleta = peso;
                    maletaMasPesada = `Maleta con peso ${peso} kg`;
                }
                
                let genero = readlineSync.question('Ingrese el género de la persona que lleva la maleta (hombre/mujer): ');
                if (genero.toLowerCase() === 'hombre') {
                    totalMaletasHombres++;
                    pesoTotalHombres += peso;
                } else if (genero.toLowerCase() === 'mujer') {
                    totalMaletasMujeres++;
                    pesoTotalMujeres += peso;
                } else {
                    console.error('Género no reconocido. Por favor, ingrese "hombre" o "mujer".');
                    continue; // Saltar la iteración actual del bucle y pedir nuevamente el género
                }
    

                let ciudad = '';
                do {
                    ciudad = readlineSync.question('Ingrese la ciudad a la que se dirige: ').trim();
                    if (!ciudadesAdmitidas.includes(ciudad)) {
                        console.error('Ciudad no admitida. Por favor, ingrese una ciudad válida.');
                    }
                } while (!ciudadesAdmitidas.includes(ciudad));

                console.info(`Maleta registrada con destino a ${ciudad}.`);

                // Agregar el peso total
                pesoTotalMaletas += peso;

            } else {
                console.info('No puede registrar su maleta.');
                if (peso >= 24) {
                    let opcion = readlineSync.question('¿Desea pagar $5000 extra por la maleta? (s/n): ');
                    if (opcion.toLowerCase() === 's') {
                        console.info('Maleta registrada con pago extra.');
                        totalDeMaletasRegistradas++; // Aumentar el contador

                        let genero = readlineSync.question('Ingrese el género de la persona que lleva la maleta (hombre/mujer): ');

                        if (genero.toLowerCase() === 'hombre') {
                            totalMaletasHombres++;
                            pesoTotalHombres += peso;
                        } else if (genero.toLowerCase() === 'mujer') {
                            totalMaletasMujeres++;
                            pesoTotalMujeres += peso;
                        } else {
                            console.error('Género no reconocido. Por favor, ingrese "hombre" o "mujer".');
                            continue; //  pedir nuevamente el género
                        }

                        let ciudad = '';
                        do {
                            ciudad = readlineSync.question('Ingrese la ciudad a la que se dirige: ');
                            ciudad = ciudad.trim();
                            if (!ciudadesAdmitidas.includes(ciudad)) {
                                console.error('Ciudad no admitida. Por favor, ingrese una ciudad válida.');
                            }
                        } while (!ciudadesAdmitidas.includes(ciudad));

                        console.info(`Maleta registrada con destino a ${ciudad} (con pago extra).`);

                        // Agregar el peso de la maleta al peso total
                        pesoTotalMaletas += peso;

                        // Descuento
                        if (ciudad.toLowerCase() === 'cali') {
                            totalConDescuento += peso * 0.85;
                        } else {
                            totalConDescuento += peso;
                        }
                        pesoTotalMaletas += peso;
                    } else {
                        console.info('No se puede registrar la maleta.');
                    }
                }
            }
        }
    } while (readlineSync.question('¿Desea ingresar otra maleta? (s/n): ').toLowerCase() === 's');
}

ingresarMaleta();
// maletas registradas, descuento y peso total
console.info(`El peso total de las ${totalDeMaletasRegistradas} maletas registradas en el avión es: ${pesoTotalMaletas} kg`);
console.info(`El valor total otorgado por concepto de descuentos hacia el destino de Cali es: ${totalConDescuento.toFixed(2)}`);
// la maleta con mayor peso
console.info(`La maleta más pesada en el avión es: ${maletaMasPesada}`);
// Calcular promedio de peso de maletas por género


console.info(`En promedio, los hombres llevan ${totalMaletasHombres} maletas por un peso de ${promedioPesoHombres} kg.`);
console.info(`En promedio, las mujeres llevan ${totalMaletasMujeres} maletas por un peso de ${promedioPesoMujeres} kg.`);