import { exibirArray } from "./utils/create-elements.js";
import { doublylist } from "./utils/root.js";

let output = document.getElementById("output");

doublylist.append("Maria")
doublylist.append("João")
doublylist.append("José")
doublylist.append("Ana")
doublylist.append("Carlos")
doublylist.append("Pedro")
doublylist.append("Paulo")
doublylist.append("Lucas")
doublylist.append("Mateus")

document.getElementById("append").addEventListener("click", () => append_fn());
document.getElementById("insert").addEventListener("click", () => insert_fn());
document.getElementById("remove").addEventListener("click", () => remove_fn());
document
  .getElementById("removeAt")
  .addEventListener("click", () => removeAt_fn());
document
  .getElementById("indexOf")
  .addEventListener("click", () => indexOf_fn());
document.getElementById("size").addEventListener("click", () => size_fn());
document
  .getElementById("isEmpty")
  .addEventListener("click", () => isEmpty_fn());
document.getElementById("clear").addEventListener("click", () => clear_fn());

exibirArray();
console.log(doublylist.toString());

function append_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  doublylist.append(valor);
  doublylist.print();
  exibirArray();
}

function insert_fn() {
  let valor = document.getElementById("addValor").value;
  let pos = document.getElementById("addPos").value;

  if (!valor) return;
  doublylist.insert(Number(pos), valor);
  doublylist.print();
  exibirArray();
}

function remove_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  
  output.innerHTML = `Removendo: ${valor}`;
  doublylist.remove(valor);
  doublylist.print();
  exibirArray();
}

function removeAt_fn() {
  let pos = document.getElementById("addPos").value;
  output.innerHTML = `Removendo: ${doublylist.indexOf(pos)}`;
 
  doublylist.print();
  doublylist.removeAt(Number(pos));
  exibirArray();
}

function indexOf_fn() {
  let valor = document.getElementById("addValor").value;
  output.innerHTML = `Posição: ${doublylist.indexOf(valor)}`;
}

function size_fn() {
  output.innerHTML = `Tamanho da lista: ${doublylist.size()}`;
}

function isEmpty_fn() {
  output.innerHTML = doublylist.isEmpty()
    ? "A lista está vazia"
    : "A lista não está vazia";
}

function clear_fn() {
  doublylist.clear();
  exibirArray();
}
