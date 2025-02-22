import { exibirArray } from "./utils/create-elements.js";
import { linked } from "./utils/root.js";

let output = document.getElementById("output");

linked.append("Maria")
linked.append("João")
linked.append("José")
linked.append("Ana")
linked.append("Carlos")
linked.append("Pedro")
linked.append("Paulo")
linked.append("Lucas")
linked.append("Mateus")

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
console.log(linked.toString());

function append_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  linked.append(valor);
  linked.print();
  exibirArray();
}

function insert_fn() {
  let valor = document.getElementById("addValor").value;
  let pos = document.getElementById("addPos").value;

  if (!valor) return;
  linked.insert(Number(pos), valor);
  linked.print();
  exibirArray();
}

function remove_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  
  output.innerHTML = `Removendo: ${valor}`;
  linked.remove(valor);
  linked.print();
  exibirArray();
}

function removeAt_fn() {
  let pos = document.getElementById("addPos").value;
  linked.removeAt(Number(pos));
  linked.print();
  exibirArray();
}

function indexOf_fn() {
  let valor = document.getElementById("addValor").value;
  output.innerHTML = `Posição: ${linked.indexOf(valor)}`;
}

function size_fn() {
  output.innerHTML = `Tamanho da lista: ${linked.size()}`;
}

function isEmpty_fn() {
  output.innerHTML = linked.isEmpty()
    ? "A lista está vazia"
    : "A lista não está vazia";
}

function clear_fn() {
  linked.clear();
  exibirArray();
}
