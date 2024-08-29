function adicionaParagrafo() {
  const div = document.getElementById("grupo-de-linhas");

  const v = document.createElement("p");
  v.innerText = "Gol do corinthians!";

  div.appendChild(v);
}

function apagarTudo() {
  const div = document.getElementById("grupo-de-linhas");
  div.innerHTML = "";

  // const paragrafos = div.getElementsByTagName("p");
  // console.log(paragrafos);

  // for of -- não funciona
  // for (let x of paragrafos) {
  //   x.remove();
  // }

  // while (paragrafos.length > 0) {
  //   console.log("tamanho da lista", paragrafos.length);
  //   paragrafos[0].remove();
  // }
}

function apagarUm() {
  const div = document.getElementById("grupo-de-linhas");

  const paragrafos = div.getElementsByTagName("p");

  paragrafos[paragrafos.length - 1].remove();
}

const b = document.getElementById("btn-1");
b.onclick = adicionaParagrafo;

const c = document.getElementById("btn-2");
c.addEventListener("click", apagarTudo);

const d = document.getElementById("btn-3");
d.addEventListener("click", apagarUm);
