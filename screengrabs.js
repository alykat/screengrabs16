var counter = 0;

var urls = [
    { 'name': 'npr', 'url': 'http://www.npr.org' },
    // { 'name': 'npr-liveblog', 'url': 'http://www.npr.org/2016/02/01/465136350/the-stream-iowa-caucuses-edition' },
    { 'name': 'npr-elections', 'url': 'http://elections.npr.org' },
    { 'name': 'nyt', 'url': 'http://www.nytimes.com' },
    { 'name': 'nyt-results', 'url': 'http://www.nytimes.com/elections/2016/primaries/iowa' },
    { 'name': 'wapo', 'url': 'http://www.washingtonpost.com' },
    // { 'name': 'wapo-liveblog', 'url': 'https://www.washingtonpost.com/politics/trump-clinton-cautiously-optimistic-ahead-of-iowa-caucuses/2016/02/01/914388ae-c88a-11e5-a7b2-5a2f824b02c9_story.html' },
    { 'name': 'wapo-results', 'url': 'https://www.washingtonpost.com/2016-election-results/iowa/' },
    { 'name': 'cnn', 'url': 'http://www.cnn.com' },
    { 'name': 'cnn-elections', 'url': 'http://www.cnn.com/election' },
    { 'name': 'cnn-results', 'url': 'http://www.cnn.com/election/primaries/states/ia/' },
    // { 'name': 'latimes', 'url': 'http://www.latimes.com' },
    { 'name': 'latimes-results', 'url': 'http://graphics.latimes.com/election-2016-iowa-results/' },
    { 'name': 'wsj', 'url': 'http://www.wsj.com' },
    // { 'name': 'wsj-liveblog', 'url': 'http://www.wsj.com/livecoverage/iowa-caucus-2016' },
    { 'name': 'wsj-results', 'url': 'http://graphics.wsj.com/elections/2016/iowa-caucus-results/' },
    { 'name': 'guardian', 'url': 'http://www.theguardian.com/us' },
    // { 'name': 'guardian-liveblog', 'url': 'http://www.theguardian.com/us-news/live/2016/feb/01/iowa-caucus-vote-live-donald-trump-ted-cruz-bernie-sanders-hillary-clinton-2016' },
    // { 'name': 'guardian-results', 'url': 'http://www.theguardian.com/us-news/ng-interactive/2016/feb/01/iowa-caucus-results-live-county-by-county-interactive-map' },
    { 'name': 'fox', 'url': 'http://www.foxnews.com' },
    // { 'name': 'fox-liveblog', 'url': 'http://www.foxnews.com/politics/elections/2016/live-blog?intcmp=hpbt1' },
    // { 'name': 'politico', 'url': 'http://www.politico.com' },
    // { 'name': 'politico-liveblog', 'url': 'http://www.politico.com/blogs/iowa-caucus-2016-live-updates' },
    // { 'name': 'politico-results', 'url': 'http://www.politico.com/2016-election/results/map/president/iowa' },
    { 'name': 'nbc', 'url': 'http://www.nbcnews.com' },
    { 'name': 'nbc-results', 'url': 'http://www.nbcnews.com/politics/2016-election/primaries/IA' },
    { 'name': 'abc', 'url': 'http://abcnews.go.com' }
    // { 'name': 'abc-liveblog', 'url': 'http://liveblog.abcnews.go.com/Event/2016_Iowa_Caucus_Rolling_Updates' },
    // { 'name': 'cbs', 'url': 'http://www.cbsnews.com' },
    // { 'name': 'dmregister', 'url': 'http://www.desmoinesregister.com' },
    // { 'name': 'dmregister-results', 'url': 'http://data.desmoinesregister.com/iowa-caucus/results/' },
    // { 'name': 'microsoft-gop', 'url': 'https://www.iagopcaucuses.com/#/state' },
    // { 'name': 'microsoft-dem', 'url': 'https://www.idpcaucuses.com/#/state' }
];

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
    urls.forEach(function(v,k) {
        saveImg(v);
    });
}

var saveImg = function(p) {
    var page = require('webpage').create();
    var timestamp = null;

    page.viewportSize = {
        width: 1600,
        height: 2000
    };

    // page.settings.userAgent = 'Chrome/48.0.2564.97';

    page.open(p['url'], function(success) {
        timestamp = (new Date()).toLocaleString();

        if(success) {
            console.log(p['name'], timestamp, classify(timestamp));
            wait();
        } else {
            console.log('error: ' + p['name']);
        }
    });

    function wait() {
        setTimeout(function() {
            page.render('2016-02-09/' + p['name'] + '-' + classify(timestamp) + '.png');

            counter++;
            if (counter == urls.length - 1) {
                phantom.exit();
            }
        }, 30000);
    }
}

screenCap();
