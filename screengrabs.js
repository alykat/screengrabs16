var HOMEPAGES = [
    { 'name': 'npr', 'url': 'http://www.npr.org' },
    { 'name': 'npr-elections', 'url': 'http://elections.npr.org' },
    { 'name': 'nyt', 'url': 'http://www.nytimes.com' },
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
    { 'name': 'huffpo', 'url': 'http://www.huffingtonpost.com' },
    // CRASHES PHANTOM { 'name': 'cbs', 'url': 'http://www.cbsnews.com' },
    { 'name': 'denver-post', 'url': 'http://www.denverpost.com' },
    { 'name': 'atlanta-jc', 'url': 'http://www.ajc.com' },
    { 'name': 'boston-globe', 'url': 'http://www.bostonglobe.com' },
    { 'name': 'mn-star-trib', 'url': 'http://www.startribune.com' },
    { 'name': 'knoxville-news', 'url': 'http://www.knoxnews.com' },
    { 'name': 'knoxville-news', 'url': 'http://www.knoxnews.com' },
    { 'name': 'dallas-mn', 'url': 'http://www.dallasnews.com' },
    { 'name': 'austin-statesman', 'url': 'http://www.statesman.com' },
    { 'name': 'houston-chronicle', 'url': 'http://www.chron.com' },
    { 'name': 'texas-tribune', 'url': 'http://www.texastribune.org' },
    { 'name': 'richmond-times-dispatch', 'url': 'http://www.richmond.com' },
    { 'name': 'burlington-free-press', 'url': 'http://www.burlingtonfreepress.com' },
    { 'name': 'vt-public-radio', 'url': 'http://digital.vpr.net' },
    { 'name': 'kera', 'url': 'http://www.kera.org' },
    { 'name': 'wamu', 'url': 'http://wamu.org' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/' }
];

var LIVEBLOGS = [
    { 'name': 'npr-liveblog', 'url': 'http://www.npr.org/2016/03/01/468619121/the-stream-super-tuesday-edition' },
    { 'name': 'wapo-liveblog', 'url': 'https://www.washingtonpost.com/news/post-politics-live/liveblog/super-tuesday-live-blog-the-voting-begins/' },
    { 'name': 'wsj-liveblog', 'url': 'http://www.wsj.com/livecoverage/super-tuesday-results' },
    { 'name': 'guardian-liveblog', 'url': 'http://www.theguardian.com/us-news/live/2016/mar/01/super-tuesday-live-trump-clinton-cruz-rubio-sanders-2016-presidential-election' },
    { 'name': 'fox-liveblog', 'url': 'http://www.foxnews.com/politics/elections/2016/live-blog' }
    // { 'name': 'politico-liveblog', 'url': 'http://www.politico.com/blogs/iowa-caucus-2016-live-updates' },
    // USUALLY BREAKS { 'name': 'abc-liveblog', 'url': 'http://liveblog.abcnews.go.com/Event/New_Hampshire_Primary_2016_Live_Updates_and_Analysis' },
];

var RESULTS = [
    { 'name': 'nyt-results', 'url': 'http://www.nytimes.com/elections/results' },
    { 'name': 'nyt-model', 'url': 'http://www.nytimes.com/interactive/2016/03/01/upshot/super-tuesday-live-republican-delegate-estimates.html' },
    { 'name': 'wapo-results', 'url': 'https://www.washingtonpost.com/2016-election-results/super-tuesday/' },
    { 'name': 'cnn-results', 'url': 'http://www.cnn.com/specials/politics/super-tuesday-2016' },
    { 'name': 'latimes-results', 'url': 'http://graphics.latimes.com/2016-election-super-tuesday-results/' },
    { 'name': 'wsj-results', 'url': 'http://graphics.wsj.com/elections/2016/super-tuesday-results/' },
    { 'name': 'guardian-results', 'url': 'http://www.theguardian.com/us-news/ng-interactive/2016/mar/01/super-tuesday-results-live-state-by-state' },
    { 'name': 'huffpo-results', 'url': 'http://elections.huffingtonpost.com/2016/primaries/2016-03-01' },
    // { 'name': 'politico-results', 'url': 'http://www.politico.com/2016-election/results/map/president/south-carolina' },
    { 'name': 'nbc-results', 'url': 'http://www.nbcnews.com/politics/2016-election/primaries' },
    { 'name': 'bostonglobe-results', 'url': 'https://apps.bostonglobe.com/election-results/2016/index.html#calendar?p1=BG_super_tuesday_desktop_link' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/data/election-calendar/' }
];

var TIMEOUT = 20000;
var counter = 0;
var data = RESULTS;
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
            page.render('2016-03-01/' + p['name'] + '-' + classify(timestamp) + '.png');
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
