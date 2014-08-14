function duckCount() {
  var objs = Array.prototype.slice.call(arguments, 0);

  return objs.reduce(function (count, obj) {
    return count + (Object.prototype.hasOwnProperty.call(obj, 'quack') ? 1 : 0);
  }, 0);

  // Or
  // return objs.filter(function (obj) {
  //   return Object.prototype.hasOwnProperty.call(obj, 'quack');
  // }).length;
}

module.exports = duckCount;
