import { inquirerMenu, pausa } from './helpers/inquirer.js';

const main = async() => {

    let opt = '';

    //await pausa();
    do {
        //imprimir el menú
        opt = await inquirerMenu();
        console.log({opt})
            await pausa()

            

    } while (opt !== '0') ;
}


main();