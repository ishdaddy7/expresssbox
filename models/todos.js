'use strict';

var tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    return Object.keys(tasks);
  },
  list: function(name){
    return tasks[name];
  },
  listComplete: function(name, type){
    if(type === 'complete'){
      return tasks[name].filter(function(task){
        return task.complete;
      });
    } else if (type === 'active'){
      return tasks[name].filter(function(task){
      return !task.complete;
      });
    }
  },
  add: function (name, task) {
    //console.log(name, task);
    // saves a task for a given person
    task.complete = false;
    if(!tasks[name]){
      tasks[name] = [];
      tasks[name].push(task);
    } else tasks[name].push(task);
    return tasks[name][tasks[name].length-1];
    //return 'ok';
  },
  // etc.
  complete: function(name, index){
/*
   - has a `complete` boolean set to false for any new tasks
      - sets a specified task's `complete` property to true
    `remove`
*/
  tasks[name][index].complete = true;
  },

  remove: function(name, index){
   var taskArr = tasks[name];
   for (var i = index; i < taskArr.length - 1; i++){
    taskArr[i] = taskArr[i + 1]
   }
   taskArr.pop();
  }
};
