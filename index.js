const comentario = document.getElementById('comentario');
comentario.addEventListener('keyup',Contador);

const cantidad = document.getElementById('cantidad');
let valor;
let sumatoria;

function Contador(){
    let valor = document.getElementById('comentario').value.length;
    let sumatoria= 0 + parseInt(valor);
    
    document.getElementById('cantidad').innerHTML = `${sumatoria}/140`;
}