"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    // Spec patterns are relative to this directory.
    specs: [
        '../features/eventFunctionality.feature'
    ],
    cucumberOpts: {
        //format:'json:./scenariooutline/tsScripts/reports/jsons/cucumberReport.json',
        require: [
            './stepsDefinition/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvcl9jb25maWdfY3VjdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcm90cmFjdG9yX2NvbmZpZ19jdWN1bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdXLFFBQUEsTUFBTSxHQUNqQjtJQUNJLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFFRCxnREFBZ0Q7SUFDaEQsS0FBSyxFQUFFO1FBQ0wsd0NBQXdDO0tBQ3pDO0lBRUQsWUFBWSxFQUFFO1FBQ1osOEVBQThFO1FBRTlFLE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUN6QjtLQUNGO0NBQ0YsQ0FBQyJ9