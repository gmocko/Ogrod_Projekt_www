var ghpages = require('gh-pages');

console.log('Trying to publish this website to gh pages...');

ghpages.publish('.', function(err) {
    console.log('Finished publishing.');
}); 