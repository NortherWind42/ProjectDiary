'use strict';

dairyApp.
    service('dairyService', function () {
        let dairy = new Dairy();
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
            addTask(taskDate, taskTime, taskDescription) {
                dairy.addTask(taskDate, taskTime, taskDescription);
                notifyAboutTasksUpdate();
            },
            removeTask(taskId) {
                dairy.removeTask(taskId);
                notifyAboutTasksUpdate();
            },
            markTaskAsDone(taskId) {
                dairy.markTaskAsDone(taskId);
                notifyAboutTasksUpdate();
            },
            updateTaskTime(taskId, newTime) {
                dairy.updateTaskTime(taskId, newTime);
                notifyAboutTasksUpdate();
            },
            updateTaskDescription(taskId, newDescription) {
                dairy.updateTaskDescription(taskId, newDescription);
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