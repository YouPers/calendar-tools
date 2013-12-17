var Seed = require('../lib/seed');

describe('calendar-tools Seed', function () {
    it('should generate recurring events for simple weekly event', function () {

        var today = new Date();

// defines an event object
        var myBirthDays = {
            "start": "2013-10-23T12:00:00.000Z",
                "end": "2013-10-23T13:00:00.000Z",
                "allDay": false,
                "frequency": "week",
                "recurrence": {
                "endby": {
                    "type": "on",
                        "on": "2013-12-16T13:00:00.000Z"
                },
                "every": 1,
                    "exceptions": []
            }
        }

// creates a new seed Object passing event object and options
        var seed = Seed(myBirthDays, {
            start: new Date(), end: new Date(2020, 1, 1)
        });

// generates ans retrieves all instances by period
        var instances = seed.getInstances();

        for (var i = 0; i < instances.length; i++) {
            var Instance = instances[i];
            console.log(Instance.start + ': ' + Instance.getNumber() + ' years');
        }
        ;
    });
});