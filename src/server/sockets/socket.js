var conn = {};

conn.desconectar = (cliente, io)=>{
    cliente.on('disconnect', ()=>{
        console.log('usuario desconectado');
    })
}

conn.test = (cliente, io)=>{
    cliente.on('testForm', (obj, callback)=>{
        io.emit('testForm',obj);
        callback({
            ok:true,
            message:'Respuesta desde node'
        })
    })
}

module.exports = conn;