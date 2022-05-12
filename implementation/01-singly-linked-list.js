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
        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this;
    }

    listLength() {
        return this.length;
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
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        // Write your hypothesis on the time complexity of this method here
        if (!this.head) return;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        if (!this.head) return;
        if(this.length === 1) {
            let oldTail = this.head;
            this.head = null;
            this.length--;
            return oldTail;
        }
        let curr = this.head;
        while(curr.next.next) {
            curr = curr.next;
        }
        let oldTail = curr.next;
        curr.next = null;
        this.length--;
        return oldTail;
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        // Write your hypothesis on the time complexity of this method here
        if (!this.head) return;
        let curr = this.head;
        while(curr.next) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log(curr.value);
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
