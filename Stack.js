class Stack{
    constructor() {
        this.top = null
    }

    remove() {
        const topValue = this.top
        this.top = this.top.next

        return topValue
    }
    add(val) {
        const node = {
            value: val,
            next: this.top
        }
        this.top = node
    }
    print() {
        let current = this.top

        while(current !== null) {
            console.log(current.value)
            current = current.next
        }
        console.log('end')
    }
}

const queue = new Stack()

queue.add(1)
queue.add(2)
queue.add(4)

queue.print()

queue.remove()
queue.add(8)

queue.print()