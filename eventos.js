const eventos = require('events');

class Evento extends eventos {}
const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y)=>{
    console.log(`Segurança ${x} : ${y}`);
})


meuEvento.emit('seguranca', 'Kelvin', 'Oloko');