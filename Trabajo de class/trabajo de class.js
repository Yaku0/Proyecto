class formula1
{
    team = '';
    motor = '';
    pilotosPorEquipo = 0;
    titulosGanados = 0;
    patrocinadoresPorEquipo = 0;
}

const carro1 = new formula1();
carro1.team = 'ferrari';
carro1.motor = 'v12';
carro1.pilotosPorEquipo = 3;
carro1.titulosGanados = 9;
carro1.patrocinadoresPorEquipo = 5

const carro2 = new formula1();
carro2.team = 'mercedes';
carro2.motor = 'v12';
carro2.pilotosPorEquipo = 2;
carro2.titulosGanados = 14;
carro2.patrocinadoresPorEquipo = 8

const carro3 = new formula1();
carro3.team = 'AstonMartin';
carro3.motor = 'v12';
carro3.pilotosPorEquipo = 2;
carro3.titulosGanados = 3;
carro3.patrocinadoresPorEquipo = 4

const carro4 = new formula1();
carro4.team = 'RedBull';
carro4.motor = 'v12';
carro4.pilotosPorEquipo = 4;
carro4.titulosGanados = 13;
carro4.patrocinadoresPorEquipo = 8

const carro5 = new formula1();
carro5.team = 'Haas';
carro5.motor = 'v12';
carro5.pilotosPorEquipo = 8;
carro5.titulosGanados = 4;
carro5.patrocinadoresPorEquipo = 3

const carro6 = new formula1();
carro6.team = 'zentorno';
carro6.motor = 'v12';
carro6.pilotosPorEquipo = 10;
carro6.titulosGanados = 9;
carro6.patrocinadoresPorEquipo = 5

const carro7 = new formula1();
carro7.team = 'Sprik';
carro7.motor = 'v8';
carro7.pilotosPorEquipo = 2;
carro7.titulosGanados = 8;
carro7.patrocinadoresPorEquipo = 5

const carro8 = new formula1();
carro8.team = 'mazda';
carro8.motor = 'v12';
carro8.pilotosPorEquipo = 4;
carro8.titulosGanados = 14;
carro8.patrocinadoresPorEquipo = 6

const carro9 = new formula1();
carro9.team = 'chevrolet';
carro9.motor = 'v12';
carro9.pilotosPorEquipo = 3;
carro9.titulosGanados = 0;
carro9.patrocinadoresPorEquipo = 7

const carro10 = new formula1();
carro10.team = 'toyota';
carro10.motor = 'v8';
carro10.pilotosPorEquipo = 2;
carro10.titulosGanados = 1;
carro10.patrocinadoresPorEquipo = 0

const carro11 = new formula1();
carro11.team = 'jaguar';
carro11.motor = 'v12';
carro11.pilotosPorEquipo = 4;
carro11.titulosGanados = 0;
carro11.patrocinadoresPorEquipo = 1

const carro12 = new formula1();
carro12.team = 'corvette';
carro12.motor = 'v8';
carro12.pilotosPorEquipo = 4;
carro12.titulosGanados = 2;
carro12.patrocinadoresPorEquipo = 15

const carro13 = new formula1();
carro13.team = 'maceratti';
carro13.motor = 'v12';
carro13.pilotosPorEquipo = 3;
carro13.titulosGanados = 7;
carro13.patrocinadoresPorEquipo = 11

const carro14 = new formula1();
carro14.team = 'lamborguini';
carro14.motor = 'v12';
carro14.pilotosPorEquipo = 5;
carro14.titulosGanados = 19;
carro14.patrocinadoresPorEquipo = 20

const carro15 = new formula1();
carro15.team = 'pagani';
carro15.motor = 'v12';
carro15.pilotosPorEquipo = 3;
carro15.titulosGanados = 2;
carro15.patrocinadoresPorEquipo = 3


const titulosGanados = carro14. titulosGanados + carro6. titulosGanados + carro12. titulosGanados;
console. log({titulosGanados});
let teamMasGanador = carro6;
if(carro6.titulosGanados > teamMasGanador.titulosGanados){
    teamMasGanador = carro6;
}
if (carro14.titulosGanados > teamMasGanador.titulosGanados){
    teamMasGanador = carro14;
}
console. log('El team mas con mayor titulos ganados de la formula uno es: ${teamMasGanador.titulosGanados}');

const pilotosPorEquipo = carro5.pilotosPorEquipo + carro6.pilotosPorEquipo + carro11. pilotosPorEquipo;
console. log({pilotosPorEquipo});
let equipoConMasPilotos = carro6;
if(carro6.pilotosPorEquipo > equipoConMasPilotos.pilotosPorEquipo){
    pilotosPorEquipo = carro6;
}
if (carro5.pilotosPorEquipo> equipoConMasPilotos.pilotosPorEquipo){
    equipoConMasPilotos = carro5;
}
console. log('El team mas numero de pilotos en la formula uno es: ${equipoConMasPilotos.pilotosPorEquipo}');


class tricksGames
{
    team = '';
    computadoras = 0;
    jugadoresPorEquipo = 0;
    torneosGanados = 0;
    patrocinadoresPorEquipo = 0;
}

const jugador1 = new tricksGames();
team1.team = 'deborhs';
team1.computadoras = 4;
team1.jugadoresPorEquipo = 4;
team1.torneosGanados = 2;
team1.patrocinadoresPorEquipo = 3; 

const team2 = new tricksGames();
team2.team = 'fluts';
team2.computadoras = 5;
team2.jugadoresPorEquipo = 4;
team2.torneosGanados = 4;
team2.patrocinadoresPorEquipo = 13;

const team3 = new tricksGames();
team3.team = 'glads';
team3.computadoras = 4;
team3.jugadoresPorEquipo = 4;
team3.torneosGanados = 12;
team3.patrocinadoresPorEquipo = 12;

const team4 = new tricksGames();
team4.team = 'flotus';
team4.computadoras = 3;
team4.jugadoresPorEquipo = 3;
team4.torneosGanados = 2;
team4.patrocinadoresPorEquipo = 4;

const team5 = new tricksGames();
team5.team = 'blumix';
team5.computadoras = 4;
team5.jugadoresPorEquipo = 5;
team5.torneosGanados = 15;
team5.patrocinadoresPorEquipo = 16;

const team6 = new tricksGames();
team6.team = 'perk';
team6.computadoras = 2;
team6.jugadoresPorEquipo = 2;
team6.torneosGanados = 0;
team6.patrocinadoresPorEquipo = 1;

const team7 = new tricksGames();
team7.team = 'sohut';
team7.computadoras = 5;
team7.jugadoresPorEquipo = 5;
team7.torneosGanados = 11;
team7.patrocinadoresPorEquipo = 13;

const team8 = new tricksGames();
team8.team = 'shelby';
team8.computadoras = 7;
team8.jugadoresPorEquipo = 8;
team8.torneosGanados = 6;
team8.patrocinadoresPorEquipo = 11;

const team9 = new tricksGames();
team9.team = 'vlaunt';
team9.computadoras = 2;
team9.jugadoresPorEquipo = 3;
team9.torneosGanados = 1;
team9.patrocinadoresPorEquipo = 2;

const team10 = new tricksGames();
team10.team = 'chents';
team10.computadoras = 5;
team10.jugadoresPorEquipo = 6;
team1o.torneosGanados = 2;
team10.patrocinadoresPorEquipo = 4;

const team11 = new tricksGames();
team11.team = 'porks';
team11.computadoras = 4;
team11.jugadoresPorEquipo = 5;
team11.torneosGanados = 0;
team11.patrocinadoresPorEquipo = 0;

const team12 = new tricksGames();
team12.team = 'republiks';
team12.computadoras = 3;
team12.jugadoresPorEquipo = 3;
team12.torneosGanados = 1;
team12.patrocinadoresPorEquipo = 2;

const team13 = new tricksGames();
team13.team = 'donths';
team13.computadoras = 8;
team13.jugadoresPorEquipo = 9;
team13.torneosGanados = 12;
team13.patrocinadoresPorEquipo = 13;

const team14 = new tricksGames();
team14.team = 'pantheons';
team14.computadoras = 3;
team14.jugadoresPorEquipo = 3;
team14.torneosGanados = 3;
team14.patrocinadoresPorEquipo = 0;

const team15 = new tricksGames();
team15.team = 'warriors';
team15.computadoras = 2;
team15.jugadoresPorEquipo = 2;
team15.torneosGanados = 10;
team15.patrocinadoresPorEquipo = 9;

const torneosGanados = team5. torneosGanados + team7. torneosGanados + team10. torneosGanados;
console. log({torneosGanados});
let teamMasExitoso = team5;
if(carro6.torneosGanados > teamMasExitoso.torneosGanados){
    teamMasExitoso = team5;
}
if (carro7.torneosGanados > teamMasExitoso.torneosGanados){
    teamMasExitoso = carro7;
}
console. log('El team mas con mayor titulos ganados de la formula uno es: ${teamMasExitoso.torneosGanados}');

const jugadoresPorEquipo = carro13.jugadoresPorEquipo + carro11.jugadoresPorEquipo + carro10. jugadoresPorEquipo;
console. log({jugadoresPorEquipo});
let teamConMasJugadores = carro13;
if(carro6.pilotosPorEquipo > teamConMasJugadores.jugadoresPorEquipo){
    jugadoresPorEquipo = carro13;
}
if (carro11.jugadoresPorEquipo> teamConMasJugadores.jugadoresPorEquipo){
    teamConMasJugadores = carr11;
}
console. log('El team con mas numero de titulos ganados por: ${teamConMasJugadores.jugadoresPorEquipo}');

class peliculas
{
    director = '';
    tipoDePelicula = '';
    galardonesGanados = 0;
    costoDeBoleta = 0;
    edadPermitida = 0;
}

const pelicula1 = new peliculas();
pelicula1.director = 'JosepDonoban';
pelicula1.tipoDePelicula = 'terror';
pelicula1.galardonesGanados = 2;
pelicula1.costoDeBoleta = 10.000;
pelicula1.edadPermitida = 10;

const pelicula2 = new peliculas();
pelicula2.director = 'nicolasG';
pelicula2.tipoDePelicula = 'comedia';
pelicula2.galardonesGanados = 6;
pelicula2.costoDeBoleta = 11.000;
pelicula2.edadPermitida = 15;

const pelicula3 = new peliculas();
pelicula3.director = 'stephanKlos';
pelicula3.tipoDePelicula = 'terror';
pelicula3.galardonesGanados = 4;
pelicula3.costoDeBoleta = 20.000;
pelicula3.edadPermitida = 18;

const pelicula4 = new peliculas();
pelicula4.director = 'JosepDonoban';
pelicula4.tipoDePelicula = 'terrorArdiente';
pelicula4.galardonesGanados = 1;
pelicula4.costoDeBoleta = 8.000;
pelicula4.edadPermitida = 18;

const pelicula5 = new peliculas();
pelicula5.director = 'cristopherDouglas';
pelicula5.tipoDePelicula = 'terror';
pelicula5.galardonesGanados = 20;
pelicula5.costoDeBoleta = 20.000;
pelicula5.edadPermitida = 18;

const pelicula6 = new peliculas();
pelicula6.director = 'michaelBladwin';
pelicula6.tipoDePelicula = 'terror';
pelicula6.galardonesGanados = 6;
pelicula6.costoDeBoleta = 13.000;
pelicula6.edadPermitida = 20;

const pelicula7 = new peliculas();
pelicula7.director = 'sofiaClarck';
pelicula7.tipoDePelicula = 'ficción';
pelicula7.galardonesGanados = 13;
pelicula7.costoDeBoleta = 15.000;
pelicula7.edadPermitida = 10;

const pelicula7 = new peliculas();
pelicula7.director = 'justinBleid';
pelicula7.tipoDePelicula = 'acción';
pelicula7.galardonesGanados = 9;
pelicula7.costoDeBoleta = 25.000;
pelicula7.edadPermitida = 15;

const pelicula8 = new peliculas();
pelicula8.director = 'robertDonoban';
pelicula8.tipoDePelicula = 'terror';
pelicula8.galardonesGanados = 0;
pelicula8.costoDeBoleta = 5.000;
pelicula8.edadPermitida = 10;

const pelicula9 = new peliculas();
pelicula9.director = 'aurthurFilips';
pelicula9.tipoDePelicula = 'infantil';
pelicula9.galardonesGanados = 2;
pelicula9.costoDeBoleta = 10.000;
pelicula9.edadPermitida = 0;

const pelicula10 = new peliculas();
pelicula10.director = 'samuelDeLuke';
pelicula10.tipoDePelicula = 'comedia';
pelicula10.galardonesGanados = 1;
pelicula10.costoDeBoleta = 15.000;
pelicula10.edadPermitida = 13;

const pelicula11 = new peliculas();
pelicula11.director = 'sarahMcLovin';
pelicula11.tipoDePelicula = 'acción';
pelicula11.galardonesGanados = 5;
pelicula11.costoDeBoleta = 15.000;
pelicula11.edadPermitida = 15;

const pelicula12 = new peliculas();
pelicula12.director = 'JosepDonoban';
pelicula12.tipoDePelicula = 'terror';
pelicula12.galardonesGanados = 19;
pelicula12.costoDeBoleta = 25.000;
pelicula12.edadPermitida = 21;

const pelicula12 = new peliculas();
pelicula12.director = 'alexanderJames';
pelicula12.tipoDePelicula = 'ficción';
pelicula12.galardonesGanados = 2;
pelicula12.costoDeBoleta = 10.000;
pelicula12.edadPermitida = 13;

const pelicula13 = new peliculas();
pelicula13.director = 'samuelDeLuke';
pelicula13.tipoDePelicula = 'comedia';
pelicula13.galardonesGanados = 12;
pelicula13.costoDeBoleta = 15.000;
pelicula13.edadPermitida = 10;

const pelicula14 = new peliculas();
pelicula14.director = 'JosepDonoban';
pelicula14.tipoDePelicula ='terror';
pelicula14.galardonesGanados = 0;
pelicula14.costoDeBoleta = 5.000;
pelicula14.edadPermitida = 13;

const pelicula15 = new peliculas();
pelicula15.director = 'JosepDonoban';
pelicula15.tipoDePelicula = 'comedia';
pelicula15.galardonesGanados = 0;
pelicula15.costoDeBoleta = 8.000;
pelicula15.edadPermitida = 0;

const galardonesGanados = pelicula12. galardonesGanados + pelicula7. galardonesGanados + pelicula10. galardonesGanados;
console. log({galardonesGanados});
let peliculaMasExitosa = pelicula12;
if(pelicula12.galardonesGanados > peliculaMasExitosa.galardonesGanados){
    peliculaMasExitosa = pelicula12;
}
if (pelicula7.galardonesGanados > peliculaMasExitosa.galardonesGanados){
    peliculaMasExitosa = pelicula7;
}
console. log('La peliculas mas exitosa respecto a galardones ganados es: ${peliculaMasExitosa.galardonesGanados}');

const costoDeBoleta = pelicula12. costoDeBoleta + pelicula9. costoDeBoleta + pelicula11. costoDeBoleta;
console. log({costoDeBoleta});
let peliculaMasCostosa = pelicula12;
if(pelicula12.costoDeBoleta > peliculaMasCostosa.costoDeBoleta){
    peliculaMasCostosa = pelicula12;
}
if (pelicula9.costoDeBoleta > peliculaMasCostosa.costoDeBoleta){
    peliculaMasCostosa = pelicula9;
}
console. log('La peliculas mas costosa respecto al valor de entrada es: ${peliculaMasCostosa.costoDeBoleta}');

class hotel
{
    nombre = '';
    estrellasDelhotel = 0;
    numeroDeHabitaciones = 0;
    valorPorNoche = 0;
    numeroDeEmpleados = 0;
}

const hotel1 = new hotel();
hotel1.nombre = 'hotelCarretero';
hotel1.estrellasDelhotel = 5;
hotel1.numeroDeHabitaciones = 400;
hotel1.valorPorNoche = 50.000;
hotel1.numeroDeEmpleados = 20;

const hotel2 = new hotel();
hotel2.nombre = 'hotelMorrin';
hotel2.estrellasDelhotel = 4;
hotel2.numeroDeHabitaciones = 450;
hotel2.valorPorNoche = 60.000;
hotel2.numeroDeEmpleados = 12;

const hotel3 = new hotel();
hotel3.nombre = 'hotelClinton';
hotel3.estrellasDelhotel = 10;
hotel3.numeroDeHabitaciones = 1000;
hotel3.valorPorNoche = 100.000;
hotel3.numeroDeEmpleados = 30;

const hotel = new hotel();
hotel4.nombre = 'hotelBard';
hotel4.estrellasDelhotel = 4;
hotel4.numeroDeHabitaciones = 200;
hotel4.valorPorNoche = 20.000;
hotel4.numeroDeEmpleados = 15;

const hotel4 = new hotel();
hotel4.nombre = 'hotelLords';
hotel4.estrellasDelhotel = 6;
hotel4.numeroDeHabitaciones = 500;
hotel4.valorPorNoche = 60.000;
hotel4.numeroDeEmpleados = 20;

const hotel5 = new hotel();
hotel5.nombre = 'hotelWarrior';
hotel5.estrellasDelhotel = 8;
hotel5.numeroDeHabitaciones = 700;
hotel5.valorPorNoche = 80.000;
hotel5.numeroDeEmpleados = 25;

const hotel6 = new hotel();
hotel6.nombre = 'hotelEstrellas';
hotel6.estrellasDelhotel = 7;
hotel6.numeroDeHabitaciones = 600;
hotel6.valorPorNoche = 60.000;
hotel6.numeroDeEmpleados = 15;

const hotel7 = new hotel();
hotel7.nombre = 'hotelBasters';
hotel7.estrellasDelhotel = 5;
hotel7.numeroDeHabitaciones = 500;
hotel7.valorPorNoche = 50.000;
hotel7.numeroDeEmpleados = 20;

const hotel8 = new hotel();
hotel8.nombre = 'hotelbarcelona';
hotel8.estrellasDelhotel = 2;
hotel8.numeroDeHabitaciones = 200;
hotel8.valorPorNoche = 15.000;
hotel8.numeroDeEmpleados = 10;

const hotel9 = new hotel();
hotel9.nombre = 'hotelMadrid';
hotel9.estrellasDelhotel = 15;
hotel9.numeroDeHabitaciones = 1500;
hotel9.valorPorNoche = 500.000;
hotel9.numeroDeEmpleados = 40;

const hotel10 = new hotel();
hotel10.nombre = 'hotelLondon';
hotel10.estrellasDelhotel = 9;
hotel10.numeroDeHabitaciones = 800;
hotel10.valorPorNoche = 90.000;
hotel10.numeroDeEmpleados = 25;

const hotel11 = new hotel();
hotel11.nombre = 'hotelLinkon';
hotel11.estrellasDelhotel = 6;
hotel11.numeroDeHabitaciones = 600;
hotel11.valorPorNoche = 65.000;
hotel11.numeroDeEmpleados = 16;

const hotel12 = new hotel();
hotel12.nombre = 'hotelSauber';
hotel12.estrellasDelhotel = 9;
hotel12.numeroDeHabitaciones = 750;
hotel12.valorPorNoche = 85.000;
hotel12.numeroDeEmpleados = 19;

const hotel13 = new hotel();
hotel13.nombre = 'hotelIndhoma';
hotel13.estrellasDelhotel = 7;
hotel13.numeroDeHabitaciones = 650;
hotel13.valorPorNoche = 60.000;
hotel13.numeroDeEmpleados = 15;

const hotel13 = new hotel();
hotel13.nombre = 'hotelImhola';
hotel13.estrellasDelhotel = 6;
hotel13.numeroDeHabitaciones = 590;
hotel13.valorPorNoche = 55.000;
hotel13.numeroDeEmpleados = 16;

const hotel13 = new hotel();
hotel13.nombre = 'hotelSainz';
hotel13.estrellasDelhotel = 6;
hotel13.numeroDeHabitaciones = 600;
hotel13.valorPorNoche = 50.000;
hotel13.numeroDeEmpleados = 15;

const hotel13 = new hotel();
hotel13.nombre = 'hotelHouloc';
hotel13.estrellasDelhotel = 11;
hotel13.numeroDeHabitaciones = 950;
hotel13.valorPorNoche = 95.000;
hotel13.numeroDeEmpleados = 28;

const hotel14 = new hotel();
hotel14.nombre = 'hotelImalaya';
hotel14.estrellasDelhotel = 0;
hotel14.numeroDeHabitaciones = 50;
hotel14.valorPorNoche = 5.000;
hotel14.numeroDeEmpleados = 8;

const hotel15 = new hotel();
hotel15.nombre = 'hotelBaun';
hotel15.estrellasDelhotel = 4;
hotel15.numeroDeHabitaciones = 200;
hotel15.valorPorNoche = 10.000;
hotel15.numeroDeEmpleados = 10;


const numeroDeHabitaciones = hotel9. numeroDeHabitaciones + hotel15. numeroDeHabitaciones + hotel13. numeroDeHabitaciones;
console. log({numeroDeHabitaciones});
let hotelConMasHabitaciones = hotel9;
if(hotel9.numeroDeHabitaciones > hotelConMasHabitaciones.numeroDeHabitaciones){
    hotelConMasHabitaciones = hotel9;
}
if (hotel15.numeroDeHabitaciones > hotelConMasHabitaciones.numeroDeHabitaciones){
    hotelConMasHabitaciones = hotel15;
}
console. log('El hotel con mas habitaciones es: ${hotelConMasHabitaciones.numeroDeHabitaciones}');

const valorPorNoche = hotel9. valorPorNoche + hotel13. valorPorNoche + hotel6. valorPorNoche;
console. log({costoDeBoleta});
let hotelMasCostoso = hotel9;
if(hotel9.valorPorNoche > hotelMasCostoso.valorPorNoche){
    hotelMasCostoso = hotel9;
}
if (hotel6.valorPorNoche > hotelMasCostoso.valorPorNoche){
    hotelMasCostoso = hotel6;
}
console. log('El hotel mas costoso segun los resgistros es: ${hotelMasCostoso.valorPorNoche}');

class granja
{
    nombredeGranja = '';
    cantidadAnimales = 0;
    cantidadAlimentos = 0;
    cantidadEmpleados = 0;
    salarioDeEmpleados = 0;
}

const granja1 = new granja ();
granja1.nombre = 'GranjaHarina';
granja1.cantidadAnimales = 800;
granja1.cantidadAlimentos = 950;
granja1.cantidadEmpleados = 25;
granja1.salarioDeEmpleados = 30.000;

const granja2 = new granja ();
granja2.nombre = 'GranjaPesebre';
granja2.cantidadAnimales = 1000;
granja2.cantidadAlimentos = 800;
granja2.cantidadEmpleados = 55;
granja2.salarioDeEmpleados = 80.000;

const granja3 = new granja ();
granja3.nombre = 'GranjaGranos';
granja3.cantidadAnimales = 100;
granja3.cantidadAlimentos = 50;
granja3.cantidadEmpleados = 5;
granja3.salarioDeEmpleados = 10.000;

const granja4 = new granja ();
granja4.nombre = 'GranjaFelipe';
granja4.cantidadAnimales = 200;
granja4.cantidadAlimentos = 550;
granja4.cantidadEmpleados = 15;
granja4.salarioDeEmpleados = 20.000;

const granja5 = new granja ();
granja5.nombre = 'GranjaBlumix';
granja5.cantidadAnimales = 1000;
granja5.cantidadAlimentos = 1000;
granja5.cantidadEmpleados = 50;
granja5.salarioDeEmpleados = 50.000;

const granja6 = new granja ();
granja6.nombre = 'GranjaSaul';
granja6.cantidadAnimales = 100;
granja6.cantidadAlimentos = 50;
granja6.cantidadEmpleados = 10;
granja6.salarioDeEmpleados = 15.000;

const granja7 = new granja ();
granja7.nombre = 'GranjaMaria';
granja7.cantidadAnimales = 500;
granja7.cantidadAlimentos = 200;
granja7.cantidadEmpleados = 30;
granja7.salarioDeEmpleados = 30.000;

const granja8 = new granja ();
granja8.nombre = 'GranjaAcuarios';
granja8.cantidadAnimales = 300;
granja8.cantidadAlimentos = 500;
granja8.cantidadEmpleados = 14;
granja8.salarioDeEmpleados = 20.000;

const granja9 = new granja ();
granja9.nombre = 'GranjaEstefania';
granja9.cantidadAnimales = 500;
granja9.cantidadAlimentos = 100;
granja9.cantidadEmpleados = 12;
granja9.salarioDeEmpleados = 30.000;

const granja = new granja ();
granja10.nombre = 'GranjaWax';
granja10.cantidadAnimales = 400;
granja10.cantidadAlimentos = 200;
granja10.cantidadEmpleados = 30;
granja10.salarioDeEmpleados = 25.000;

const granja10 = new granja ();
granja10.nombre = 'GranjaNicks';
granja10.cantidadAnimales = 800;
granja10.cantidadAlimentos = 900;
granja10.cantidadEmpleados = 40;
granja10.salarioDeEmpleados = 40.000;

const granja11 = new granja ();
granja11.nombre = 'GranjaParak';
granja11.cantidadAnimales = 360;
granja11.cantidadAlimentos = 200;
granja11.cantidadEmpleados = 19;
granja11.salarioDeEmpleados = 24.000;

const granja11 = new granja ();
granja11.nombre = 'GranjaPink';
granja11.cantidadAnimales = 200;
granja11.cantidadAlimentos = 300;
granja11.cantidadEmpleados = 200;
granja11.salarioDeEmpleados = 45.000;

const granja12 = new granja ();
granja12.nombre = 'GranjaTrue';
granja12.cantidadAnimales = 800;
granja12.cantidadAlimentos = 900;
granja12.cantidadEmpleados = 30;
granja12.salarioDeEmpleados = 30.000;

const granja13 = new granja ();
granja13.nombre = 'GranjaFuture';
granja13.cantidadAnimales = 2500;
granja13.cantidadAlimentos = 2500;
granja13.cantidadEmpleados = 150;
granja13.salarioDeEmpleados = 90.000;

const granja14 = new granja ();
granja14.nombre = 'GranjaXox';
granja14.cantidadAnimales = 1500;
granja14.cantidadAlimentos = 1500;
granja14.cantidadEmpleados = 120;
granja14.salarioDeEmpleados = 80.000;

const granja14 = new granja ();
granja14.nombre = 'GranjaBarts';
granja14.cantidadAnimales = 1200;
granja14.cantidadAlimentos = 1000;
granja14.cantidadEmpleados = 30;
granja14.salarioDeEmpleados = 35.000;

const granja15 = new granja ();
granja15.nombre = 'GranjaCouin';
granja15.cantidadAnimales = 500;
granja15.cantidadAlimentos = 1000;
granja15.cantidadEmpleados = 30;
granja15.salarioDeEmpleados = 20.000;


const cantidadAnimales = granja13. cantidadAnimales + granja11. cantidadAnimales + granja11. cantidadAnimales;
console. log({numeroDeHabitaciones});
let totalDeAnimales = granja13;
if(granja13.cantidadAnimales > totalDeAnimales.cantidadAnimales){
    totalDeAnimales = granja13;
}
if (granja11.cantidadAnimales > totalDeAnimales.cantidadAnimales){
    totalDeAnimales = granja11;
}
console. log('La granja con mas animales es: ${totalDeAnimales.cantidadAnimales}');

const salarioDeEmpleados = granja9. salarioDeEmpleados + granja6. salarioDeEmpleados + granja13. salarioDeEmpleados;
console. log({costoDeBoleta});
let totalSalarioDeEmpleados = granja13;
if(granja13.valorPorNoche > totalSalarioDeEmpleados.salarioDeEmpleados){
    totalSalarioDeEmpleados = granja13;
}
if (granja9.salarioDeEmpleados > totalSalarioDeEmpleados.salarioDeEmpleados){
    totalSalarioDeEmpleados = granja9;
}
console. log('El total del salario de los granjeros es: ${totalSalarioDeEmpleados.salarioDeEmpleados}');

