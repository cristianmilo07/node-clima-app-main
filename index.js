import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Busquedas }  from './models/busqueda.js';

const main = async() => {

    const busqueda = new Busquedas();

    let opt = '';

    //await pausa();
    do {
        //imprimir el menú
        opt = await inquirerMenu();
            switch (opt) {
                case '1':
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                // Buscar los lugares
                
                // Seleccionar el lugar

                // Guardar en DB

                // Clima

                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:',  );
                console.log('Lng:',  );
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Máxima:', );
                console.log('Como está el clima:', );
                    
                break;
                
                case '2':

                break;

            }
            await pausa();

    } while (opt !== '0') ;
}


main();