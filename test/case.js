var assert  = require('assert');
var Api     = require('./../lib/draugiem');
var client  = new Api(1, 'xxx', 'xxx');

client.dashboard(function(err, data){
    
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.pageviews != 'undefined', true, 'pageviews posts property');
    
});

client.novaList(function(err, data){
    
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.posts != 'undefined', true, 'missing posts property');
    
});

var novaParams = {
    title:	'jaunuma virsraksts',
    text:	'jaunuma teksts',
    draft:	1,
    comments:	0
}

client.novaAdd(novaParams, function(err, data){
    
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.status != 'undefined', true, 'missing status property');
    assert.equal(data.status == 'OK', true, 'incorrect response');
    
});

client.novaList(function(err, data){
    
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.posts != 'undefined', true, 'missing posts property');

    for (var postId in data.posts) {
        
        client.noveGet(postId, function(err, postRes){
            assert.equal(err, null, 'error must be null');
            assert.equal(typeof postRes.posts != 'undefined', true, 'missing posts property');
            
            client.novaDelete(postId, function(err, delRes){
                assert.equal(err, null, 'error must be null');
                assert.equal(typeof delRes.status != 'undefined', true, 'missing status property');
                assert.equal(delRes.status == 'OK', true, 'incorrect response');
            });
            
        });
        
        break;
        
    }
    
});

client.faqList(function(err, data){
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.faq != 'undefined', true, 'missing faq property');
});

client.statsUnique(function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.unique != 'undefined', true, 'missing uniqu property');
});

client.statsFans(function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.fans != 'undefined', true, 'missing fans property');
});

client.statsPages(function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.pages != 'undefined', true, 'missing pages property');
});

client.statsGenders(function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.genders != 'undefined', true, 'missing genders property');
});

client.sayAdd({text: 'test'}, function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.status != 'undefined', true, 'missing status property');
    assert.equal(data.status == 'OK', true, 'incorrect response');
    assert.equal(typeof data.pid != 'undefined', true, 'missing pid property');
});

client.sayList(function(err, data) {
    assert.equal(err, null, 'error must be null');
    assert.equal(typeof data.posts != 'undefined', true, 'missing posts property');
    
    for (var postId in data.posts) {

        client.sayDelete(postId, function(delErr, delRes) {
            assert.equal(delErr, null, 'error must be null');
            assert.equal(typeof delRes.status != 'undefined', true, 'missing status property');
            assert.equal(delRes.status == 'OK', true, 'incorrect response');
        });
        
        break;
    }
    
});