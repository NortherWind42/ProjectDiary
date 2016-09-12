'use strict';

dairyApp.
    service('dairyService', function () {
        let dairy = new Dairy();
        let currentDate = new Date();
        let selectedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
        let tasks = dairy.getDailyTasks(selectedDate);

        let onSelectedDateUpdateCallback;
        function notifyAboutUpdateSelectedDate() {
            if (onSelectedDateUpdateCallback) {
                onSelectedDateUpdateCallback(selectedDate);
            }
        }

        let onTasksUpdateCallback;
        function notifyAboutTasksUpdate() {
            if (onTasksUpdateCallback) {
                tasks = dairy.getDailyTasks(selectedDate);
                onTasksUpdateCallback(tasks);
            }
        }

        return {
            getSelectedDate() {
                return selectedDate;
            },
            changeSelectedDate(newSelectedDate) {
                selectedDate = newSelectedDate;
                notifyAboutUpdateSelectedDate();
            },
            onSelectedDateUpdate(callback) {
                onSelectedDateUpdateCallback = callback;
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
            onTasksUpdate(callback) {
                onTasksUpdateCallback = callback;
            }
        }
    })