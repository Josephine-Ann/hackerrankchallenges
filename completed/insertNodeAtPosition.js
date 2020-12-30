function insertNodeAtPosition(head, data, position) {
    let reference = head;
    let end = []
    while (reference.next !== null) {
        end.push(reference.data)
        reference = reference.next;
    }
    end.push(reference.data)
    end.splice(position, 0, data);
    return end
}

