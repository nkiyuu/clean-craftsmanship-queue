class Queue {
  list: number[] = [];

  push(e: number) {
    this.list.push(e);
  }

  size() {
    return this.list.length;
  }

  pop() {
    const first = this.list[0];
    this.list = this.list.slice(1);
    return first;
  }
}

export default Queue;