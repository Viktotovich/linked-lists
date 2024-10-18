console.log("heehee");

/*It's not part of the project, but it's nice to have for modularity*/
class Head {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.headObj = new Head(null, "HEAD");
    this.size = 0;
  }

  append(value) {
    const lastObj = this.tail();
    lastObj.next = new Node(value);
    this.size += 1;
  }

  prepend(value) {
    // Make new object point to the one following the head
    //Make header point to new object
    const newObj = new Node(value);
    newObj.next = this.headObj.next;
    this.headObj.next = newObj;
  }

  size() {
    return this.size;
  }

  head() {
    console.log(this.headObj.next);
    return this.headObj.next;
  }

  tail() {
    // To reduce pollution, and remove unecessary function access
    function findTail(startPoint) {
      if (startPoint.next === null) {
        return startPoint;
      } else {
        this.findTail(startPoint.next);
      }
    }
    return findTail(this.headObj);
  }

  at(index) {
    function getToIndex(index, startPoint) {
      console.log(startPoint);
      if (index === 0) {
        return startPoint;
      } else if (startPoint.next === null) {
        console.error(`Such index does not exist`);
      } else {
        getToIndex(index - 1, startPoint.next);
      }
    }

    const elAtIndex = getToIndex(index, this.headObj);
    console.log(elAtIndex);
    return elAtIndex;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Mini-tests:
let doge = new LinkedList();
doge.append("cat");
doge.prepend("wolf");
doge.head();
doge.at(2);
