// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }
    addToHead(val) {
         let newNode = new SinglyLinkedNode(val);
         newNode.next = this.head;
         this.head = newNode;
         this.length++;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        this.length++

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // let length = 0;
        // let curr = this.head;
        // while(curr.next) {
            //     curr = curr.next;
            //     length++;
            // }
            // return length + 1;

            // return this.length;
        return this.length; //o(1)
        // let count = 0
        // let curr = this.head;
        // while (curr.next) {
        //     curr = curr.next;
        //     count ++
        // }
        // count = count +1
        // return count
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here
        let sum = 0;
        let curr = this.head;
        while (curr.next) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum += curr.value
    }

    averageValue() {
        // Returns the average value of all the nodes
        // O(n)
        // Write your hypothesis on the time complexity of this method here
        return this.sumOfNodes() /this.listLength()
    }

    findNthNode(n) { //2
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
        let index = 0;
        let curr = this.head;
        while (curr.next) {
            if (index === n) {
                return curr;
            }
            index ++;

            curr = curr.next;
        }

        return -1
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        let mid = Math.floor((this.length -1) / 2) //length -1 cause index starts from 0;
        let index = 0;
        let curr = this.head;
        while (curr.next) {
            if (index === mid) {
                return curr;
            }
            index++;
            curr = curr.next;
        }
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        newNode.next = this.head;
        this.head = newNode;
    }
    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here

        let newList = new SinglyLinkedList();
        let curr = this.head;
        while(curr.next) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }
        newList.addToHead(curr.value);
        return newList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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
        let newNode = new DoublyLinkedNode(val);
        this.length++

        if(!this.length) {
            this.head = newNode;
            this.tail =newNode;
            return this.head;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

    }


    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here

        const mid = Math.ceil((this.length -1)/2);
        let index = 0;
        let curr = this.tail
        while (curr.prev) {
            if (index === mid) {
                return curr
            }
            curr = curr.prev
            index++
        }


    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        //1 create a list, initializing curr with the head, and while loop through it.
        //

        const newList = new DoublyLinkedList()
        let curr = this.head;
        while(curr.next) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }
        newList.addToHead(curr.value)

        return newList
        //2



    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
