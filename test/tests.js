'use strict';

describe('dairyService', function () {
    beforeEach(function () {
        module('dairyApp');
    });

    let dairyService;

    beforeEach(inject(function (_dairyService_) {
        dairyService = _dairyService_;
    }));

    it('should be defined', function () {
        expect(dairyService).toBeDefined();
    });

    it('returns correct date format', function () {
        let dateAsLinesArray = dairyService.getSelectedDateAsLine().split('.');
        expect(dateAsLinesArray.length).toBe(3)
        let [dayOfSelectedDate, monthOfSelectedDate, yearOfSelectedDate] = dateAsLinesArray;
        let currentDate = new Date();
        expect(+dayOfSelectedDate).toBe(currentDate.getDate());
        expect(+monthOfSelectedDate - 1).toBe(currentDate.getMonth());
        expect(+yearOfSelectedDate).toBe(currentDate.getFullYear());
    })

    it('can change selected date', function() {
        let selectedDateAsLine = dairyService.getSelectedDateAsLine();
        let newDateAsLine = "12.12.2012";
        dairyService.changeSelectedDateAsLine(newDateAsLine);
        expect(dairyService.getSelectedDateAsLine()).toBe(newDateAsLine);
    })

    // it('can add a task, and can returns daily tasks', function() {
    //     let dateAsLine = "12.12.2012";
    //     dairyService.addTask(dateAsLine, "test1");
    //     let tasksBefore = dairyService.getTasks();
        
    //     dairyService.addTask(dateAsLine, "test2");
    //     let tasksAfter = dairyService.getTasks();
    //     expect(tasksBefore.length).toBe(tasksAfter.length+1);
    // })

});
