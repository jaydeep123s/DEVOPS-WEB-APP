const assert = require('chai').assert;
const http = require('http');

describe('App', function() {
    it('should return Hello World', function(done) {
        http.get('http://localhost:3000', (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                assert.equal(data, 'Hello World\n');
                done();
            });
        });
    });
});
