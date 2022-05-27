"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_1 = __importDefault(require("jasmine"));
const jasm = new jasmine_1.default();
// Set Jasmine timeout to 15 seconds. Disabled, all tests are executed in less than 2 seconds.
// jasm.jasm.DEFAULT_TIMEOUT_INTERVAL = 15000;
// setup console reporter
const jasmine_console_reporter_1 = __importDefault(require("jasmine-console-reporter"));
const reporter = new jasmine_console_reporter_1.default({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    timeUnit: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: true,
    emoji: true,
    beep: true,
});
// initialize and execute
jasm.env.clearReporters();
jasm.addReporter(reporter);
jasm.loadConfigFile('./spec/support/jasmine.json');
jasm.execute();
//# sourceMappingURL=jasmine-runner.js.map