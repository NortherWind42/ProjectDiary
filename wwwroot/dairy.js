'use strict';

class Dairy {
    constructor() {
        this.Tasks = [
            new Task(0, "14.9.2016", "8:00", "task 1"),
            new Task(1, "14.9.2016", "8:30", "task 2"),
            new Task(2, "14.9.2016", "9:00", "task 3"),
            new Task(3, "14.9.2016", "10:00", "task 4"),
            new Task(4, "15.9.2016", "8:30", "task 5"),
            new Task(5, "15.9.2016", "9:00", "task 6")
        ];
    }

    addTask(taskDate, taskTime, taskDescription) {
        let guidGenerator = new GuidGenerator();
        let task = new Task(guidGenerator.generate(), taskDate, taskTime, taskDescription);
        this.Tasks.push(task);
    }

    removeTask(taskId) {
        for (let task of this.Tasks) {
            if (task.id === taskId) {
                let index = this.Tasks.indexOf(task);
                this.Tasks.splice(index, 1);
                break;
            }
        }
    }

    markTaskAsDone(taskId) {
        for (let task of this.Tasks) {
            if (task.id === taskId) {
                task.complete();
                break;
            }
        }
    }

    updateTaskTime(taskId, newTime) {
        for (let task of this.Tasks) {
            if (task.id === taskId) {
                task.time = newTime;
                break;
            }
        }
    }

    updateTaskDescription(taskId, newDescription) {
        for (let task of this.Tasks) {
            if (task.id === taskId) {
                task.description = newDescription;
                break;
            }
        }
    }

    getDailyTasks(date) {
        let dailyTasks = [];
        for (let task of this.Tasks) {
            if (task.date === date) {
                dailyTasks.push(task);
            }
        }
        return dailyTasks;
    }
}