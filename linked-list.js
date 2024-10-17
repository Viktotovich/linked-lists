/* Okay, couple of requirements:
    1 - LinkedList class constructor itself, containing the entire list.

    2 - Node helper class, with value, nextNode, and probably with previous node. 

    Class/ helper Class requirements:
    1 - Append(value), to add a new node containing value to the end of the list. 
        - (O(n) is easy iteratively, if you can O(log N) or O(1) it by storing the data - it'd be insane.

    2 - Prepend(value), to add a new node containing value to the start of the list.
        - Must be O(1) for both space and time complexity 

    3 - Size, to return the total number of nodes on the list.
        -Store that data in the last element, to make it O(1)

    4 - head, return first node

    5 - tail, return last node
        - (O(n) is easiest) - time complexity. O(1) will be space complexity because values already exist, we only use a pointer

    6 - at(index), returns given index
        - O(n)
    
    7 - pop, removes the last element from the list
        - call tail, remove element. 
    
    8 - contains(value), returns if the passed in value is in the list, and otherwise returns false
        - Can't do binary sort, so rip. O(n)
    
    9 - find(value), returns the index of the node containing value, or null if not found
        -O(n^2) if mixed with contains()(terrible). Better implementation should be around O(n)
    
    10 - toString, represents your LinkedList object as strings, so we can print them out and preview them in console. The format should be: ( value ) -> ( value ) --> ( value ) --> null
        -O(1) Time complexity, O(n) space if I am not wrong. We are using auxillary space on this one by creating new data 

    ---------OPTIONAL---------------
    11 - insertAt(value, index), to insert a new node with value at given index
        -I'd have to try this out, but feels O(n + 1)ish (basically: O(n))

    12 - removeAt(index), to remove a node at a give index
        -Same as insertAt(), but if we have to re-index all nodes - then O(n^2)
*/
