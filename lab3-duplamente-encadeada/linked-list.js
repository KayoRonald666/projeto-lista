class Node {
  constructor(element, next = null, prev = null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return this.next === null
      ? this.element
      : this.element + " -> " + this.next.toString();
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  append(element) {
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this._size++;
  }

  insert(position, element) {
    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this._size++;
    } else if (position > 0 && position < this.size()) {
      let pos = 0;
      let current = this.head;
      let previous = null;
      while (pos < position) {
        previous = current;
        current = current.next;
        pos++;
      }
      node.next = current;
      node.prev = previous;
      previous.next = node;
      current.prev = node;
      this._size++;
    }
    this._size++;
  }

  remove(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.removeAt(index);
    }
  }

  removeAt(position) {
    if(position >= this.size()) {
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this._size--;
    }
    else if (position > 0 && position < this.size()) {
      let pos = 0;
      let current = this.head;
      while (pos < position) {
        current = current.next;
        pos++;
      }
      current.prev.next = current.next;      
      current.next.prev = current.prev
      this._size--;
    }

  }

  indexOf(element) {
    if (this.isEmpty()) {
      return -1;
    }

    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._size;
  }

  print() {
    console.log(this.toString());
  }

  clear() {
    this.head = null;
    this._size = 0;
  }

  search(value) {}

  toString() {
    return this.head === null ? "" : this.head.toString();
  }

  toArray() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.element);
      current = current.next;
    }
    return array;
  }
}

export default DoublyLinkedList;
