function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyList() {
    this.head = null;
}
NewSLL = new SinglyList()
// console.log(NewSLL)

SinglyList.prototype.add = function(val) {
    var new_node = new Node(val)
    new_node.next = this.head
    this.head = new_node
}

SinglyList.prototype.print_data = function() {
    current = this.head
    while(current != null) {
        // console.log(current.val)
        console.log(current.next)
        current = current.next

    }
}

for(var i = 0; i <= 5; i++) {
    var random_num = Math.floor(Math.random() * 2); 
    SinglyList.prototype.add(random_num)

}
SinglyList.prototype.print_data()

function contains(SinglyList, val) {
    current = this.head 
    while(current.next != undefined) {
        if(current.val = val) {
            return true
        }
        current = current.next 
    }
    return false
}
contains(SinglyList, 1)


