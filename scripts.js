const p = document.getElementById("par");
p.innerText = "Novo texto do parágrafo!";

function bla() {
  console.log("bla");
}

const p2 = document.getElementById("p2");
p2.onclick = () => console.log("clicou no parágrafo 2!");

p2.addEventListener("dblclick", bla);
p2.addEventListener("click", () => console.log('1'));
p2.addEventListener("click", () => console.log('2'));
p2.addEventListener("click", () => console.log('3'));
