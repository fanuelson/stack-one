var Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: true,
    emoji: true,         // boolean or emoji-map object
    beep: true
});
// jasmine.configureDefaultReporter(reporter);
jasmine.env.clearReporters();
jasmine.addReporter(reporter);


jasmine.execute()