'use strict';

dairyApp.
    component('taskList', {
        templateUrl: "wwwroot/task-list.html",
        controller: function (dairyService, $scope) {
            $scope.selectedDate = dairyService.getSelectedDate();
            dairyService.onSelectedDateUpdate(function (selectedDate) {
                $scope.selectedDate = selectedDate;
            });

            $scope.tasks = dairyService.getTasks();
            dairyService.onTasksUpdate(function (tasks) {
                $scope.tasks = tasks;
            });

            $scope.addTask = function (taskDate, taskTime, taskDescription) {
                dairyService.addTask(taskDate, taskTime, taskDescription);
            }
        }
    })