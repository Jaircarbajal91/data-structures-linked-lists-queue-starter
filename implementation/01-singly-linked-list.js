// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

    }

    listLength() {
        const list = new SinglyLinkedList();
        return list.listLength();
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n): Because we don't have a pointer to the tail, we need to iterate over the entire linked list until the next property is null.

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this.head;
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
    }
}

// let list = new SinglyLinkedList();

// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);

// console.log(list.listLength())//).to.equal(4);

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
