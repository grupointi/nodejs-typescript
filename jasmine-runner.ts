import Jasmine from 'jasmine';
const jasm = new Jasmine();

// Set Jasmine timeout to 15 seconds. Disabled, all tests are executed in less than 2 seconds.
// jasm.jasm.DEFAULT_TIMEOUT_INTERVAL = 15000;

// setup console reporter
import JasmineConsoleReporter from 'jasmine-console-reporter';
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
    listStyle: 'indent', // "flat"|"indent"
    timeUnit: 'ms',      // "ms"|"ns"|"s"
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
    activity: true,
    emoji: true,         // boolean or emoji-map object
    beep: true,
});

// initialize and execute
jasm.env.clearReporters();
jasm.addReporter(reporter);
jasm.loadConfigFile('./spec/support/jasmine.json');
jasm.execute();