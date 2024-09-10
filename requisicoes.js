const url = "https://viacep.com.br/ws/00000000/json/";

const promise = fetch(url);

console.log("promessa do fetch:", promise);

promise
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((dados) => {
    if ("erro" in dados) {
      throw new Error("Cep não encontrado");
    }
    return dados;
  })
  .then((cep) => {
    // aqui poderia chamar a função que vai atualizar o formulário
    // com os dados do cep na página
    console.log(cep);
  })
  .catch((e) => {
    // aqui poderia mostrar uma msg dizendo que o cep não foi encontrado
    console.log(e);
  });
