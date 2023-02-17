// Linked lists are foundational "array-like" data structure which appears in other complex data structures


//Node Basic Class
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List Class
export class Linkedlist {

    constructor() {
        this.head = null;
    }

    getHeadNode() {
        return this.head;
    }

    clear() {
        this.head = null;
    }

    traverse() {
        let walker = this.head; // first node in list
        while(walker.next !== null) {
            console.log(walker.data);
            walker = walker.next; // moving to the next node
        }
    }
}








