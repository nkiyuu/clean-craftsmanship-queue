import Queue from './queue';

let queue;

beforeEach(() => {
  queue = new Queue();
});

test('queue に push したら要素が 1 増える', () => {
  queue.push(1);
  expect(queue.size()).toBe(1);
  queue.push(2);
  expect(queue.size()).toBe(2);
});

test('X を push して　pop したら X が取得できる', () => {
  queue.push(1);
  expect(queue.pop()).toBe(1);
  queue.push(2);
  expect(queue.pop()).toBe(2);
});

test('X Y を push して pop したら X Y の順に取得できる', () => {
  queue.push(100);
  queue.push(111);
  expect(queue.pop()).toBe(100);
  expect(queue.pop()).toBe(111);
});