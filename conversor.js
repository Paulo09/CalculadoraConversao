//Camada Visão
function converter()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("converterF").checked==true)
  resp.innerHTML = converteF(num);
 if(document.getElementById("converterC").checked==true)
  resp.innerHTML = converteC(num);
}
//c = (F-32)/1,8
//f = 1,8+32
//Fazer a conversão
function converteF(n1)
{
 return (1.8*n1 + 32);
}

function converteC(n1)
{

 return ( (n1-32)*5/9 );
}