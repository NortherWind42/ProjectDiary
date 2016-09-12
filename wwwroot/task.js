'use strict';

class Task {
    constructor(id, date, time, description) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.description = description;
        this.isDone = false;
    }

    complete() {
        this.isDone = true;
    }
}