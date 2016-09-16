'use strict';

dairyApp.
    component('taskList', {
        templateUrl: "wwwroot/task-list.html",
        controller: function (dairyService, $scope) {
            onSelectedDateAsLineUpdated(dairyService.getSelectedDateAsLine());
            dairyService.selectedDateAsLineUpdated(onSelectedDateAsLineUpdated);
            onTasksUpdated(dairyService.getTasks());
            dairyService.tasksUpdated(onTasksUpdated);

            $scope.addTask = function (taskDate, taskNote) {
                dairyService.addTask(taskDate, taskNote);
                $scope.addTaskNoteModel = null;
            };

            $scope.removeTask = function (taskId) {
                dairyService.removeTask(taskId);
            };

            $scope.markTask = function (taskId, isDone) {
                dairyService.markTask(taskId, isDone);
            }

            $scope.updateTaskNote = function (taskId, newTaskNote) {
                dairyService.updateTaskNote(taskId, newTaskNote);
            }

            function onSelectedDateAsLineUpdated(selectedDateAsLine) {
                $scope.selectedDate = selectedDateAsLine;
                dairyService.getDailyTasks(selectedDateAsLine);
            }

            function onTasksUpdated(tasks) {
                
                $scope.tasks = tasks;
            }
        }
    })