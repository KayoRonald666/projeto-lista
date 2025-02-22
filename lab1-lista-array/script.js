import {
  append,
  clear,
  indexOf,
  insert,
  isEmpty,
  print,
  remove,
  removeAt,
  size,
  toString,
} from "./lista.js";
import { exibirArray } from "./utils/create-elements.js";

let output = document.getElementById("output");

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
console.log(toString());

function append_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  append(valor);
  print();
  exibirArray();
}

function insert_fn() {
  let valor = document.getElementById("addValor").value;
  let pos = document.getElementById("addPos").value;

  if (!valor) return;
  insert(Number(pos), valor);
  print();
  exibirArray();
}

function remove_fn() {
  let valor = document.getElementById("addValor").value;
  if (!valor) return;
  
  output.innerHTML = `Removendo: ${valor}`;
  remove(valor);
  print();
  exibirArray();
}

function removeAt_fn() {
  let pos = document.getElementById("addPos").value;
  removeAt(Number(pos));
  print();
  exibirArray();
}

function indexOf_fn() {
  let valor = document.getElementById("addValor").value;
  output.innerHTML = `Posição: ${indexOf(valor)}`;
}

function size_fn() {
  output.innerHTML = `Tamanho da lista: ${size()}`;
}

function isEmpty_fn() {
  output.innerHTML = isEmpty()
    ? "A lista está vazia"
    : "A lista não está vazia";
}

function clear_fn() {
  clear();
  exibirArray();
}
