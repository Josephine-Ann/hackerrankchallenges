function printLinkedList(head) {
    let reference = head;
    let end = []
    while (reference.next !== null) {
        end.push(reference.data)
        reference = reference.next;
    }
    end.push(reference.data)
    end.forEach(element => {
        console.log(element)
    })
}
