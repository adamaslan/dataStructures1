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
          //note the recursive like aspects
        }
    
        return counter;
      }

      getLast() {
        if (!this.head) {
          return null;
        }
    
        let node = this.head;
        while (node) {
          if (!node.next) {
            return node;
          }
          node = node.next;
        }
      }
    
      clear() {
        this.head = null;
      }
    
      removeFirst() {
        if (!this.head) {
          return;
        }
    
        this.head = this.head.next;
      }
    



      removeLast() {
        if (!this.head) {
          return;
        }
    
        if (!this.head.next) {
          this.head = null;
          return;
        }
    
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
          previous = node;
          node = node.next;
        }
        previous.next = null;
      }
    

      insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          // There are some existing nodes in our chain
          last.next = new Node(data);
        } else {
          // The chain is empty!
          this.head = new Node(data);
        }
      }

      getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
      }
// from geeks for geeks
// javascript program to count number of nodes in a linked list
 
/* Linked list Node*/
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
 
// Linked List class
var head; // head of list
 
    /* Inserts a new Node at front of the list. */
     function push(new_data) {
        /*
         * 1 & 2: Allocate the Node & Put in the data
         */
        var new_node = new Node(new_data);
 
        /* 3. Make next of new Node as head */
        new_node.next = head;
 
        /* 4. Move the head to point to new Node */
        head = new_node;
    }
 
    /* Returns count of nodes in linked list */
     function getCount() {
        var temp = head;
        var count = 0;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
 
    /*
     * Driver program to test above functions. Ideally this function should be in a
     * separate user class. It is kept here to keep code compact
     */
     
        /* Start with the empty list */
        push(1);
        push(3);
        push(1);
        push(2);
        push(1);
 
        document.write("Count of nodes is " + getCount());
 
// This code contributed by Rajput-Ji
</script>
Output: 

count of nodes is 5



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