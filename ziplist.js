const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

function zipList(list1, list2) {
  const newArr = [];
  for (let i = 0; i < list2.length; i++) {
    newArr.push(list1[i], list2[i]);
  }
  return newArr;
}

console.log(zipList(arr1, arr2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(arr1, arr2));
