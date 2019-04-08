const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicacion');

let comando = argv._[0];

switch(comando){
    case 'crear':
        crearArchivo(argv.base).then(
                        archivo => {
                            console.log(`Archivo creado ${archivo}`);
                        }).catch(err =>{
                            console.log(err)
                        })
        break;
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
    default:
        console.log("Comando default")
}



