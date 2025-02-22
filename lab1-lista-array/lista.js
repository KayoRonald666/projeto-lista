let items = ["João", "Maria", "José"];

// - Adicionar elementos no final da lista
function append(element) {
  items.push(element);
}

// - Inserir elementos em uma posição específica.
function insert(position, element) {
  for (let i = size(); i > position; i--) {
    items[i] = items[i - 1];
  }
  items[position] = element;
}

// - Remover um elemento da lista.
function remove(element) {
  const index = indexOf(element);
  if (index !== -1) {
    removeAt(index);
  }
}

// - Remover elementos em uma posição específica.
function removeAt(position) {
  for (let i = position; i < size(); i++) {
    items[i] = items[i + 1];
  }

  items.length--;
}

//  - Retorna a posição de um dado elemento
function indexOf(element) {
  for (let i = 0; i < size(); i++) {
    if (items[i] === element) {
      return i;
    }
  }
  return -1;
}

// - Retorna se a lista está vazia
function isEmpty() {
  return size() === 0;
}

// - Retorna o tamanho da lista
function size() {
  return items.length;
}

// - Retorna a lista como texto
function toString() {
  return items.join(", ");
}

// - Imprime os elementos da lista
function print() {
  for (const element of items) {
    console.log(element);
  }
}

// - Limpar a lista removendo todos os elementos atuais para torná-la vazia.
function clear() {
  items = [];
}

export {
  append,
  insert,
  remove,
  removeAt,
  indexOf,
  isEmpty,
  size,
  toString,
  print,
  clear,
  items,
};
