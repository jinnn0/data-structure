class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 01. Add at the end of the list
  append(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // 02. Add at the start of the list
  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;

      this.head = node;
      this.head.next = current;
    }

    this.length++;
  }

  // 03. Find a node
  find(value) {
    if (!this.head) return;

    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  // 04. Delete a node
  delete(value) {
    // if the list is empty, return
    if (!this.head) return null;

    // if the node to delete is the head
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let prevElement = this.head;

      while (prevElement.next.value !== value) {
        prevElement = prevElement.next;
      }

      // if the node to delete is the tail
      if (this.tail.value === value) {
        prevElement.next = null;
        this.tail = prevElement;
      }
      // else
      else {
        const elementToDelete = this.find(value);
        prevElement.next = elementToDelete.next;
      }
    }

    this.length--;
  }

  // 05. Insert after a certain node
  insertAfter(value, afterValue) {
    const node = new Node(value);
    let current = this.head;

    while (current.value !== afterValue) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    // if afterValue is tail
    if (this.tail.value === afterValue) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // Print the list
  printList() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current);
      current = current.next;
    }

    return list;
  }
}

const linkedList = new LinkedList();

linkedList.append('first');
linkedList.append('second');
linkedList.append('third');
linkedList.append('fourth');
linkedList.prepend('prepend-fifth');
linkedList.prepend('prepend-sixth');

console.log(linkedList);
console.log(linkedList.printList());

console.log(linkedList.find('second'));

linkedList.delete('second');
linkedList.delete('prepend-sixth'); // head
linkedList.delete('fourth'); // tail

linkedList.insertAfter('banana', 'prepend-sixth');

console.log(linkedList);
console.log(linkedList.printList());
