// javascript program to remove last node of
// linked list.   // Link list node /
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}
// Function to remove the last node
// of the linked list /
function removeLastNode(head) {
  if (head == null) return null;

  if (head.next == null) {
    return null;
  }

  // Find the second last node
  var second_last = head;
  while (second_last.next.next != null) second_last = second_last.next;

  // Change next of second last
  second_last.next = null;

  return head;
}

// Function to push node at head
function push(head_ref, new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = head_ref;
  head_ref = new_node;
  return head_ref;
}

// Driver code

// Start with the empty list /
var head = null;

// Use push() function to construct
// the below list 8 . 23 . 11 . 29 . 12 /
head = push(head, 12);
head = push(head, 29);
head = push(head, 11);
head = push(head, 23);
head = push(head, 8);

head = removeLastNode(head);
for (temp = head; temp != null; temp = temp.next)
  document.write(temp.data + " ");

// This code contributed by Rajput-Ji
