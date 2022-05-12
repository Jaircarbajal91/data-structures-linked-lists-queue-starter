// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;
        if (this.length === 1) {
            let oldHead = this.head;
            this.head = null
            this.tail = null
            this.length--;
            return oldHead.value;
        } else {
            let oldHead = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return oldHead.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return
        if (this.length === 1) {
            let oldTail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return oldTail.value;
        } else {
            let oldTail = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return oldTail.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.head) return;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

const list = new DoublyLinkedList();

list.addToTail('A');
list.addToTail('B');
list.addToTail('C');

const tail = list.tail;
const head = list.head;
const middle = list.tail.prev;

console.log(tail.prev.value)//.to.equal('B');
console.log(head.next.value)//.to.equal('B');

console.log(middle.next.value)//.to.equal('C');
console.log(middle.prev.value)//.to.equal('A');

console.log(tail.next)//.to.equal(null);
console.log(head.prev)//.to.equal(null);

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
