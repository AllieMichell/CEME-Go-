var conn = {};

conn.desconectar = (cliente, io)=>{
    cliente.on('disconnect', ()=>{
        console.log('usuario desconectado');
    })
}

conn.test = (cliente, io)=>{
    cliente.on('testForm', (obj, callback)=>{
        console.log(obj.name);
        console.log(obj.age);
    })
}

module.exports = conn;