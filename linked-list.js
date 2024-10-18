class LinkedList {
  constructor() {
    this.next = null;
    this.value = "HEAD";
    this.size = 0;
  }

  //we need a sort method to make it possible to go back
  autoSort() {
    if (this.size === 0 || this.next === null) {
      return;
    }

    function sort(previousEl, nextEl, depth) {
      if (depth === 0) {
        return;
      }

      nextEl.previous = previousEl;
      previousEl = nextEl;
      nextEl = nextEl.next;
      sort(previousEl, nextEl, depth - 1);
    }

    sort(this, this.next, this.size);
  }

  append(value) {
    const lastObj = this.tail();
    lastObj.next = new Node(value);
    this.size += 1;
    this.autoSort();
  }

  prepend(value) {
    const newObj = new Node(value);
    newObj.next = this.next;
    this.next = newObj;
    this.autoSort();
  }

  size() {
    return this.size;
  }

  head() {
    console.log(this.next);
    return this;
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
    return findTail(this);
  }

  at(index) {
    function getToIndex(index, startPoint) {
      if (index === 0) {
        return startPoint;
      } else if (startPoint.next === null) {
        console.error(`Such index does not exist`);
      } else {
        return getToIndex(index - 1, startPoint.next);
      }
    }

    let elAtIndex = getToIndex(index, this);
    console.log(elAtIndex);
    return elAtIndex;
  }

  pop() {
    let lastObj = tail();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

//Mini-tests:
let doge = new LinkedList();
doge.append("cat");
doge.prepend("wolf");
doge.head();
doge.at(2);
