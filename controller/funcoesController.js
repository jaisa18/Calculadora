async function abreAdd(req, res) {
    res.render('funcoes/add.ejs', {})
}
  
    async function add(req, res) {
    
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var tipo = req.body.tipo;
    var resultado;

    if(tipo == "Soma")
    {
      resultado = parseInt(num1) + parseInt(num2);

    }
    
    else if(tipo == "Subtração")
    {
      resultado = parseInt(num1) - parseInt(num2);

    }

    else if(tipo == "Multiplicação")
    {
      resultado = parseInt(num1) * parseInt(num2);

    }

    else if(tipo == "Divisão")
    {
      resultado = parseInt(num1) / parseInt(num2);

    }

    res.render('funcoes/list.ejs',{resultado:resultado, num1:num1, num2:num2, operacao:tipo});
   }

   async function listar(req, res) {
  
  }

  async function listarFiltro(req, res) {

  }

    async function abreEdt(req, res) {
      
    }
    
    async function del(req, res) {
     
    }
    
      module.exports = {
        add,
        abreAdd,
        listar,
        listarFiltro,
        abreEdt,
        del,
      };  