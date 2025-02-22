/**
 * Classe que representa um nó em uma lista encadeada
 */
export default class Node {
  /**
   * Cria uma instância de Node
   * @param {string} element - O elemento armazenado no nó
   * @param {Node|null} [next=null] - O próximo nó na lista encadeada.
   */
  constructor(element, next = null, position = 0) {
    this.element = element;
    this.next = next;
    this.position = position;
  }

  /**
   * Retorna minha lista de todos os elementos do nó
   * 
   * @returns {string} lista de elementos
   */
  toString() {
    return this.next === null
      ? this.element
      : this.element + " -> " + this.next.toString();
  }
}
