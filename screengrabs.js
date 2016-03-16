var MAPS = [
    { 'name': 'gmaps', 'url': 'https://www.google.com/maps/@38.9151117,-77.0287576,11z/data=!5m1!1e1' },
    { 'name': 'gmaps-commute', 'url': 'https://www.google.com/maps/@38.8862556,-77.0375124,13z/data=!5m1!1e1' }
];

var TIMEOUT = 20000;
var INTERVAL = (900 * 1000);
var refreshInterval = null;
var counter = 0;
var data = MAPS;
var urlCount = data.length;

var classify = function(str) {
    return str.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/:/g, '-')             // Replace colons with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

var screenCap = function() {
    saveImg(data[0]);
}

var saveImg = function(p) {
    var page = require('webpage').create();
    var timestamp = (new Date()).toLocaleString();

    page.viewportSize = {
        width: 1400,
        height: 2000
    };

    page.open(p['url'], function(success) {
        if(success) {
            page.onError = function(msg, trace) {
                // don't push page errors to the console (won't suppress all errors, tho)
                // via http://stackoverflow.com/questions/19459247/how-to-ignore-errors-in-phantomjs
            };
            wait();
        } else {
            console.log('error loading: ' + p['name']);
            page.close(); // via http://stackoverflow.com/questions/15005830/phantomjs-using-too-many-threads
            incrementCounter();
        }
    });

    function wait() {
        setTimeout(function() {
            page.render('commute-2016-03-16/' + p['name'] + '-' + classify(timestamp) + '.png');
            page.close(); // via http://stackoverflow.com/questions/15005830/phantomjs-using-too-many-threads

            console.log('saved ' + (counter + 1) + ' (of ' + urlCount + '): ' + p['name'] + ' at ' + timestamp);
            incrementCounter();
        }, TIMEOUT);
    }
}

var incrementCounter = function() {
    counter++;
    if (counter == urlCount) {
        console.log('done');
        counter = 0;
        // phantom.exit();
    } else {
        saveImg(data[counter]);
    }
}

screenCap();
refreshInterval = setInterval(screenCap, INTERVAL);
