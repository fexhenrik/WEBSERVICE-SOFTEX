const soap = require('soap');

const url = 'https://apps.cpf.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
soap.createClient(url,(err, client)=> {
    if (err){
        console.log(err)
    }else{
        console.log('ok')
    client.consultaCPF({
        cep: '123.456.789-00'
    }, (err,res)=>{
        console.log (res)
    })
    }
})
