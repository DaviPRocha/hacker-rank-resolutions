class LinkedList{
    constructor() {
        this.head = null
    }

    remove(i) {

    }
    insert(val, i) {
        const node = {
            value: val,
            next: null
        }
        let current = null
        for(let j = 0; j < i; j++) {
            if (current === null) current = this.head
            else current = current.next
        }
        if (current !== null) {
            node.next = current.next
            current.next = node
        } else {
            if (this.head !== null) current.next = this.head
            this.head = current
        }
    }
    print() {
        let current = this.head

        while(current !== null) {
            console.log(current.value)
            current = current.next
        }
        console.log('end')
    }
}

const x = new LinkedList()

x.insert(2, 0)
x.print()
x.insert(3, 0)
x.print()
x.insert(1, 0)
x.print()
x.insert(4, 3)
x.print()