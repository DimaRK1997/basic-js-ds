const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let cur = l;
  let next = l.next;
  let v = null;
  
  while (next) {    
    if (cur.value === k){
      if (!v) {
        l = cur.next
        cur = cur.next;
        next = cur.next
      } else {
        v.next = next;
        cur = next;
        next = cur.next;
      }      
    } else{
      v = cur;
      cur = cur.next;
      next = cur.next;
    }
  }

  if(cur.next === null){
    if(cur.value === k){
      v.next = null;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
