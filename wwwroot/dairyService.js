'use strict';

dairyApp.
    service('dairyService', function () {
        let localStorageTasksKey = "dairyTasks";  
        let tasks1 = JSON.parse(localStorage.getItem(localStorageTasksKey))
        let dairy = new Dairy(tasks1);
        let currentDate = new Date();
        let selectedDateAsLine = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
        let tasks = dairy.getDailyTasks(selectedDateAsLine);

        let onSelectedDateAsLineUpdatedCallbackArr = [];
        function notifyAboutSelectedDateAsLineUpdate() {
            for (let onSelectedDateAsLineUpdatedCallback of onSelectedDateAsLineUpdatedCallbackArr) {
                onSelectedDateAsLineUpdatedCallback(selectedDateAsLine);
            }
        }

        let onTasksUpdatedCallback;
        function notifyAboutTasksUpdate() {
            if (onTasksUpdatedCallback) {
                tasks = dairy.getDailyTasks(selectedDateAsLine);
                onTasksUpdatedCallback(tasks);

                let serialTasks = JSON.stringify(dairy.getAllTasks());
                localStorage.setItem(localStorageTasksKey, serialTasks);
            }
        }

        return {
            getSelectedDateAsLine() {
                return selectedDateAsLine;
            },
            changeSelectedDateAsLine(newSelectedDateAsLine) {
                selectedDateAsLine = newSelectedDateAsLine;
                notifyAboutSelectedDateAsLineUpdate();
            },
            selectedDateAsLineUpdated(callback) {
                onSelectedDateAsLineUpdatedCallbackArr.push(callback);
            },

            getTasks() {
                return tasks;
            },
            addTask(taskDate, taskNote) {
                dairy.addTask(taskDate, taskNote);
                notifyAboutTasksUpdate();
            },
            removeTask(taskId) {
                dairy.removeTask(taskId);   
                notifyAboutTasksUpdate();
            },
            markTask(taskId, isDone) {
                dairy.markTask(taskId, isDone);
                notifyAboutTasksUpdate();
            },
            updateTaskNote(taskId, newTaskNote) {
                dairy.updateTaskNote(taskId, newTaskNote);
                notifyAboutTasksUpdate();
            },
            getDailyTasks(date) {
                dairy.getDailyTasks(date);
                notifyAboutTasksUpdate();
            },
            tasksUpdated(callback) {
                onTasksUpdatedCallback = callback;
            }
        }
    })