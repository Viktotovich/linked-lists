class LinkedList {
  constructor() {
    this.next = null;
    this.value = "HEAD";
    this.size = 0;
  }

  append(value) {
    const lastObj = this.tail();
    lastObj.next = new Node(value);
    this.size += 1;
  }

  prepend(value) {
    const newObj = new Node(value);
    newObj.next = this.next;
    this.next = newObj;
    this.size += 1;
  }

  size() {
    return this.size;
  }

  head() {
    return this;
  }

  tail() {
    // To reduce pollution, and remove unecessary function access
    function findTail(startPoint) {
      if (startPoint.next === null) {
        return startPoint;
      } else {
        return findTail(startPoint.next);
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
    return elAtIndex;
  }

  pop() {
    //safe-guards from this.at prevent head from being deleted
    let preLastEl = this.at(this.size - 1);
    preLastEl.next = null;
    this.size -= 1;
  }

  contains(searchItem) {
    let currentObj = this.next;
    for (let i = 0; i < this.size; i++) {
      if (currentObj.value === searchItem) {
        console.log("true");
        return true;
      } else if (currentObj.next === null) {
        console.log("no");
        return false;
      } else {
        currentObj = currentObj.next;
      }
    }
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
doge.append("bobby");
doge.prepend("wolf");
doge.append("skadoodle");
doge.head();
doge.at(2);
doge.pop();

/* Not only does this work, it's also fun to use*/
doge.contains("cat");
doge.contains("php elephant");
doge.contains("Mikhail");
doge.contains("WOLF");
doge.contains("wolf");
