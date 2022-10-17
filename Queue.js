class Queue{
    constructor() {
        this.head = null
        this.tail = null
    }

    remove() {
        const headValue = this.head
        this.head = this.head.next
        if (this.head === null) {
            this.tail = this.head
        }
        
        return headValue
    }
    add(val) {
        const node = {
            value: val,
            next: null
        }
        if (this.tail) {
            this.tail.next = node
            this.tail = this.tail.next
        } else {
            this.tail = node
            this.head = node
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

const queue = new Queue()

queue.add(1)
queue.add(2)
queue.add(4)

queue.print()

queue.remove()
queue.add(8)

queue.print()
