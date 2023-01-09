const LinkedList = (head) => {
    this.head = null;
    function append(value) {
        tail().next = NodeFactory(value);
    }
    function prepend(value) {
        let newNode = NodeFactory(value);
        newNode.next = list.head;
        list.head = newNode;
    }
    function size() {
        let count = 0;
        let node = list.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    function tail() {
        let lastNode = list.head;
        if (lastNode) {
            while (lastNode.next) {
            lastNode = lastNode.next
            }
        }
    return lastNode;  
    }
    function at(index) {
        let node = list.head;
        for (i=1; i<index; i++) {
            node = node.next;
        }
        return node;
    }
    function pop() {
        at(size()-1).next = null;
    }
    function contains(value) {
        let node = list.head;
        while(node) {
            if (node.value === value) {return true}
            node = node.next;
        }
        return false;
    }
    function find(value) {
        if (!contains(value)) {return null}
        let node = list.head;
        for (i=1; i<size()+1; i++) {
            if (node.value === value) {
                return i;
            }
            node = node.next;
        }
    }
    function toString(list) {
        let myString = '';
        let node = list.head;
        while(node) {
            myString += '( ' + node.value + ' ) -> ';
            node = node.next;
        }
        myString += 'null';
        return myString;
    }

    return {head, tail, append, prepend, size, at, pop, contains, find, toString}
}

const NodeFactory = (value) => {
    this.value = value;
    this.next = null
    return {value, next}
}

let node1 = NodeFactory(100);
let node2 = NodeFactory(200);
node1.next = node2;
let list = LinkedList(node1);
// list: 100 -> 200
LinkedList().prepend(50);
// list: 50 -> 100 -> 200
LinkedList().append(300);
// list: 50 -> 100 -> 200 -> 300
console.log(LinkedList().size());
// 4
console.log(LinkedList().toString(list));
// ( 50 ) -> ( 100 ) -> ( 200 ) -> ( 300 ) -> null
