if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function  (a, b) {
        return a + b;
      });
    },

    remove : function(arr, item) {
      
      return arr.filter(function  (element) {
        return element != item;
      });
    },
    
    removeWithoutCopy : function(arr, item) {
      var itemsToRemove = arr.filter(function  (element) {
        return element === item;
      });
      
      for(i = 0; i < itemsToRemove.length; i++){
        arr.splice(arr.indexOf( itemsToRemove[i]), 1);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;

      var incrementCountIfElmentEqualsItem = function(element){
                                                if(element === item) {count++;} 
                                             };
      arr.forEach(incrementCountIfElmentEqualsItem);

      return count;
    },

    duplicates : function(arr) {
      var itemItemCount = {};
      var populateItemItemCount = function  (element) {
        itemItemCount[element] = itemItemCount[element] ? itemItemCount[element] + 1 : 1;
      };
      
      arr.forEach(populateItemItemCount);

      var dupes = [];

      Object.keys(itemItemCount).forEach(function  (key) {
        if(itemItemCount[key] >= 2)
        {
          dupes.push(key);
        }
      });

      return dupes;



    },

    square : function(arr) {
      squared = [];
      arr.forEach(function(element) {  x.push(element * element); });
      return squared;
    },

    findAllOccurrences : function(arr, target) {
      var indices = [];

      arr.forEach(function  (element, index) {
        if(element === target)
        { indices.push(index); }
      });

      return indices;
    }
  };
});
