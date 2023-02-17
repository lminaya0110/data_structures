import { Node, Linkedlist } from './data_structures.js';

const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);

console.log(node1);
console.log(node2);
console.log(node3);

const myLinkedList = new Linkedlist();

// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1;
myLinkedList.head.next = node2;
myLinkedList.head.next.next = node3;


console.log(myLinkedList);

