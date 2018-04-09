function Node(val) {
    this.val = val;
    this.next = null;
}
nn = new Node(15)
console.log(nn)
console.log(nn.val)

function SinglyList() {
    this.head = null;
}
NewSLL = new SinglyList()
console.log(NewSLL)

SinglyList.prototype.add = function(val) {
    var new_node = new Node(val)
    new_node.next = this.head
    this.head = new_node
}
SinglyList.prototype.add(35)
SinglyList.prototype.add(34)
SinglyList.prototype.add(123)
SinglyList.prototype.add("whale")
console.log(NewSLL)
console.log(SinglyList)
// SinglyList.prototype.add = function(value) {
//     var node = new Node(value),
//         currentNode = this.head;
 
//     // 1st use-case: an empty list 
//     if (!currentNode) {
//         this.head = node;
//         this._length++;
         
//         return node;
//     }
 
//     // 2nd use-case: a non-empty list
//     while (currentNode.next) {
//         currentNode = currentNode.next;
//     }
 
//     currentNode.next = node;
 
//     this._length++;
     
//     return node;
// };

// console.log(SinglyList)