var ArrayHelpers = {};

ArrayHelpers.transpose = function (array) {
  var columns = [];
  for (var i = 0; i < array[0].length; i++) {
    columns.push([]);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      columns[j].push(array[i][j]);
    }
  }

  return columns;
}


ArrayHelpers.equals = function(array1, array2) {
  if (!array2) {
    return false;
  }

  if (array1.length != array2.length) {
    return false;
  }

  for (var i = 0, l = array1.length; i < l; i++) {
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      if (!ArrayHelpers.equals(array1[i],array2[i])) {
        return false;
      }
    }
    else if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = ArrayHelpers;
