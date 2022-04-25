// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    size() {
        let counter = 0;
        let node = this.head;
    
        while (node) {
          counter++;
          node = node.next;
        }
    
        return counter;
      }


    // from free code camp

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    getFirst (){

      return this.head;
    }


    //freecodecamp thangs
    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }