async function converter(){

  const valor = document.querySelector("#valor").value;
  const de = document.querySelector("#moedaDe").value;
  const para = document.querySelector("#moedaPara").value;
  
  const chave = 'bb4e917c65b5d0e0eb68d72fb139bab7'
  const url = `https://api.currencylayer.com/convert?access_key=${chave}&from=${de}&to=${para}&amount=${valor}`;
  
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    if(dados.result !== undefined){
      document.getElementById('res').textContent= `${valor} ${de} = ${dados.result.toFixed(2)} ${para}`;
    } else{
      document.getElementById('res').textContent = "Erro na conversão";
    }
  } catch(erro){
    document.getElementById('res').textContent = "erro ao conectar á API.";
    console.error(erro);
  }
}
