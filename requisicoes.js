let cep = "01.123-000";
cep = cep.replace(".", "").replace("-", "");

const url = `https://viacep.com.br/ws/${cep}/json/`;
console.log("URL a ser buscada:", url);

const promise = fetch(url);
console.log("promessa do fetch:", promise);

promise
  .then((response) => {
    console.log("Status da resposta:", response.status);
    return response.json();
  })
  .then((d2) => {
    if ("erro" in d2) {
      throw new Error("Cep não encontrado");
    }
    return d2;
  })
  .then((d3) => {
    // aqui poderia chamar a função que vai atualizar o formulário
    // com os dados do cep na página
    console.log("dados no terceiro then:", d3);
  })
  .catch((e) => {
    // aqui poderia mostrar uma msg dizendo que o cep não foi encontrado
    console.log("log da msg de erro:", e);
  })
  .then(() => console.log("FIM dos then's"));
