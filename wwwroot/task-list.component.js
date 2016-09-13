'use strict';

dairyApp.
    component('taskList', {
        templateUrl: "wwwroot/task-list.html",
        controller: function (dairyService, $scope) {
            onSelectedDateAsLineUpdated(dairyService.getSelectedDateAsLine());
            dairyService.selectedDateAsLineUpdated(onSelectedDateAsLineUpdated);
            onTasksUpdated(dairyService.getTasks());
            dairyService.tasksUpdated(onTasksUpdated);

            $scope.addTask = function (taskDate, taskTime, taskDescription) {
                dairyService.addTask(taskDate, taskTime, taskDescription);
            }

            function onSelectedDateAsLineUpdated (selectedDateAsLine) {
                $scope.selectedDate = selectedDateAsLine;
                dairyService.getDailyTasks(selectedDateAsLine);
            }

            function onTasksUpdated (tasks) {
                $scope.tasks = tasks;
            }
        }
    })