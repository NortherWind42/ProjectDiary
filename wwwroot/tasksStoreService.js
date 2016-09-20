'use strict';

angular.module('dairyApp').
    service('tasksStoreService', function () {
        let localStorageKey = "dairyTasks";

        return {
            getTasksFromStore() {   
                 let tasks = JSON.parse(localStorage.getItem(localStorageKey));
                 return tasks;
            },
            sendTasksToStore(tasks) {
                 let serialTasks = JSON.stringify(tasks);
                 localStorage.setItem(localStorageKey, serialTasks);
            }
        }
    })