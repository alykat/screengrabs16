var HOMEPAGES = [
    { 'name': 'npr', 'url': 'http://www.npr.org' },
    { 'name': 'npr-elections', 'url': 'http://elections.npr.org' },
    // ERRORS { 'name': 'nyt', 'url': 'http://www.nytimes.com' },
    { 'name': 'wapo', 'url': 'http://www.washingtonpost.com' },
    { 'name': 'cnn', 'url': 'http://www.cnn.com' },
    { 'name': 'latimes', 'url': 'http://www.latimes.com' },
    { 'name': 'wsj', 'url': 'http://www.wsj.com' },
    { 'name': 'guardian', 'url': 'http://www.theguardian.com/us' },
    { 'name': 'fox', 'url': 'http://www.foxnews.com' },
    { 'name': 'politico', 'url': 'http://www.politico.com' },
    { 'name': 'nbc', 'url': 'http://www.nbcnews.com' },
    { 'name': 'abc', 'url': 'http://abcnews.go.com' },
    { 'name': 'bostonglobe', 'url': 'http://www.bostonglobe.com' },
    // CRASHES PHANTOM { 'name': 'cbs', 'url': 'http://www.cbsnews.com' },
    { 'name': 'unionleader', 'url': 'http://www.unionleader.com' },
    { 'name': 'concord-monitor', 'url': 'http://www.concordmonitor.com' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/' },
    { 'name': 'nhpr', 'url': 'http://nhpr.org' }
];

var LIVEBLOGS = [
    { 'name': 'npr-liveblog', 'url': 'http://www.npr.org/2016/02/08/465595133/the-stream-cruz-on-drafting-women-jeb-bush-wont-blame-obama' },
    { 'name': 'wapo-liveblog', 'url': 'https://www.washingtonpost.com/politics/trump-clinton-cautiously-optimistic-ahead-of-iowa-caucuses/2016/02/01/914388ae-c88a-11e5-a7b2-5a2f824b02c9_story.html' },
    { 'name': 'wsj-liveblog', 'url': 'http://www.wsj.com/livecoverage/new-hampshire-primary' },
    { 'name': 'guardian-liveblog', 'url': 'http://www.theguardian.com/us-news/live/2016/feb/09/new-hampshire-primary-results-polls-us-election-2016-live-coverage' },
    { 'name': 'fox-liveblog', 'url': 'http://www.foxnews.com/politics/elections/2016/live-blog?intcmp=hpbt1' }
    // { 'name': 'politico-liveblog', 'url': 'http://www.politico.com/blogs/iowa-caucus-2016-live-updates' },
    // USUALLY BREAKS { 'name': 'abc-liveblog', 'url': 'http://liveblog.abcnews.go.com/Event/New_Hampshire_Primary_2016_Live_Updates_and_Analysis' },
];

var RESULTS = [
    { 'name': 'nyt-results', 'url': 'http://www.nytimes.com/elections/2016/primaries/new-hampshire' },
    { 'name': 'wapo-results', 'url': 'https://www.washingtonpost.com/2016-election-results/new-hampshire/' },
    { 'name': 'cnn-results', 'url': 'http://www.cnn.com/election/primaries/states/nh/' },
    { 'name': 'latimes-results', 'url': 'http://graphics.latimes.com/election-2016-new-hampshire-results/' },
    { 'name': 'wsj-results', 'url': 'http://graphics.wsj.com/elections/2016/new-hampshire-primaries-results/' },
    { 'name': 'guardian-results', 'url': 'http://www.theguardian.com/us-news/ng-interactive/2016/feb/09/new-hampshire-primary-results-live-2016-presidential-election-county-by-county-map' },
    { 'name': 'politico-results', 'url': 'http://www.politico.com/2016-election/results/map/president/new-hampshire' },
    { 'name': 'nbc-results', 'url': 'http://www.nbcnews.com/politics/2016-election/primaries/NH' },
    { 'name': 'huffpo-results', 'url': 'http://elections.huffingtonpost.com/2016/primaries/2016-02-09' },
    { 'name': 'bostonglobe-dem-results', 'url': 'http://apps.bostonglobe.com/election-results/2016/primary/democratic/new-hampshire/' },
    { 'name': 'bostonglobe-gop-results', 'url': 'http://apps.bostonglobe.com/election-results/2016/primary/republican/new-hampshire/' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/data/election-calendar/' },
    { 'name': 'nhpr-results', 'url': 'http://nhpr.org/post/2016-presidential-primary-results' }
];

var TIMEOUT = 20000;
var counter = 0;
var data = HOMEPAGES;
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
            page.render('2016-02-09/' + p['name'] + '-' + classify(timestamp) + '.png');
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
        phantom.exit();
    } else {
        saveImg(data[counter]);
    }
}

screenCap();
