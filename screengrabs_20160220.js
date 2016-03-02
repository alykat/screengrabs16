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
    { 'name': 'las-vegas-sun', 'url': 'http://lasvegassun.com' },
    { 'name': 'las-vegas-rj', 'url': 'http://www.reviewjournal.com' },
    { 'name': 'sc-thestate', 'url': 'http://www.thestate.com' },
    { 'name': 'charleston-pc', 'url': 'http://www.postandcourier.com' },
    { 'name': 'sc-public-radio', 'url': 'http://southcarolinapublicradio.org' },
    { 'name': 'nv-public-radio', 'url': 'http://knpr.org' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/' }
];

var LIVEBLOGS = [
    { 'name': 'npr-liveblog', 'url': 'http://www.npr.org/2016/02/20/467487212/the-stream-south-carolina-and-nevada-go-to-the-polls' },
    { 'name': 'wapo-liveblog', 'url': 'https://www.washingtonpost.com/news/post-politics-live/liveblog/live-blog-s-c-gop-primary-and-nevada-democratic-caucuses-are-today/' },
    { 'name': 'wsj-liveblog', 'url': 'http://blogs.wsj.com/washwire/2016/02/20/south-carolina-republican-primary-and-nevada-democratic-caucuses-latest-updates/' },
    { 'name': 'guardian-liveblog', 'url': 'http://www.theguardian.com/us-news/live/2016/feb/20/south-carolina-primary-nevada-caucus-live-coverage-us-presidential-election' },
    { 'name': 'fox-liveblog', 'url': 'http://www.foxnews.com/politics/elections/2016/live-blog?intcmp=hpbt1' }
    // { 'name': 'politico-liveblog', 'url': 'http://www.politico.com/blogs/iowa-caucus-2016-live-updates' },
    // USUALLY BREAKS { 'name': 'abc-liveblog', 'url': 'http://liveblog.abcnews.go.com/Event/New_Hampshire_Primary_2016_Live_Updates_and_Analysis' },
];

var RESULTS = [
    { 'name': 'nyt-nv-results', 'url': 'http://www.nytimes.com/elections/2016/primaries/nevada' },
    { 'name': 'nyt-sc-results', 'url': 'http://www.nytimes.com/elections/2016/primaries/south-carolina' },
    { 'name': 'nyt-nv-model', 'url': 'http://www.nytimes.com/interactive/2016/02/20/upshot/live-nevada-caucus-model.html' },
    { 'name': 'nyt-sc-model', 'url': 'http://www.nytimes.com/interactive/2016/02/20/upshot/live-south-carolina-primary-model.html' },
    { 'name': 'wapo-nv-results', 'url': 'https://www.washingtonpost.com/2016-election-results/nevada/' },
    { 'name': 'wapo-sc-results', 'url': 'https://www.washingtonpost.com/2016-election-results/south-carolina/' },
    { 'name': 'cnn-nv-results', 'url': 'http://www.cnn.com/election/primaries/states/nv/Dem' },
    { 'name': 'cnn-sc-results', 'url': 'http://www.cnn.com/election/primaries/states/sc' },
    { 'name': 'latimes-nv-results', 'url': 'http://graphics.latimes.com/election-2016-nevada-results/' },
    { 'name': 'latimes-sc-results', 'url': 'http://graphics.latimes.com/election-2016-south-carolina-results/' },
    { 'name': 'wsj-results', 'url': 'http://graphics.wsj.com/elections/2016/south-carolina-primary-nevada-caucus-results/' },
    { 'name': 'guardian-results', 'url': 'http://www.theguardian.com/us-news/ng-interactive/2016/feb/20/nevada-south-carolina-live-results-primary-caucuses' },
    { 'name': 'huffpo-results', 'url': 'http://elections.huffingtonpost.com/2016/primaries/2016-02-20' },
    { 'name': 'politico-nv-results', 'url': 'http://www.politico.com/2016-election/results/map/president/nevada' },
    { 'name': 'politico-sc-results', 'url': 'http://www.politico.com/2016-election/results/map/president/south-carolina' },
    { 'name': 'nbc-results', 'url': 'http://www.nbcnews.com/politics/2016-election/primaries/NV' },
    // { 'name': 'bostonglobe-dem-results', 'url': 'http://apps.bostonglobe.com/election-results/2016/primary/democratic/new-hampshire/' },
    // { 'name': 'bostonglobe-gop-results', 'url': 'http://apps.bostonglobe.com/election-results/2016/primary/republican/new-hampshire/' },
    { 'name': 'newshour', 'url': 'http://www.pbs.org/newshour/data/election-calendar/' }
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
            page.render('2016-02-20/' + p['name'] + '-' + classify(timestamp) + '.png');
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
