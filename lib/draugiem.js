var apiUrl  = 'api.draugiem.lv';
var apiPath = '/json/';

var http        = require('http'); 
var querystring = require('querystring');

module.exports = Api;

function Api(appId, appKey, userKey) {
    
    this.appId      = appId;
    this.appKey     = appKey;
    this.userKey    = userKey;

}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#lapas-aktualas-informacijas-iegusana-pages-dashboard-izsaukums
 */
Api.prototype.dashboard = function(callback) {
   
    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/dashboard'
        
    }
    
    this.getCall(params, callback);
    
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-list
 */
Api.prototype.novaList = function(category, callback) {
   
    if (typeof callback != 'function') {
        callback = category;
        category = null;
    }
   
    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/news',
        method: 'list',
        cat: category
    }
    
    this.getCall(params, callback);
    
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-add
 * 
 * 
    title:	jaunuma virsraksts
    text:	jaunuma teksts
    draft:	atzīme par to, vai jaunums ir melnraksts (vērtības 0 un 1)
    image_data:	titulbildes attēls. Datus nepieciešams sagatavot base64 kodējumā. (parametrs nav obligāts)
    comments:	atzīme par to, vai atļaut komentārus pie šī jaunuma (vērtības 0 un 1)
 */
Api.prototype.novaAdd = function(params, callback) {

    if (typeof callback != 'function') {
        throw new Error('Invalid callback function');
    }

    params.app = this.appKey;
    params.apikey = this.userKey;
    params.action = 'pages/news';
    params.method = 'add';
       
    this.postCall(params, callback);
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-edit
 * 
 * 
    id:	rediģējamās ziņas ID
    title:	jaunuma virsraksts
    text:	jaunuma teksts
    draft:	atzīme par to, vai jaunums ir melnraksts (vērtības 0 un 1)
    image_data:	titulbildes attēls. Datus nepieciešams sagatavot base64 kodējumā. (parametrs nav obligāts)
    delete_image:	Ja parametra vērtība ir 1, tad titulbilde tiks dzēsta
    comments:	atzīme par to, vai atļaut komentārus pie šī jaunuma (vērtības 0 un 1)
 * 
 */
Api.prototype.novaEdit = function(params, callback) {
    
    if (typeof callback != 'function') {
        throw new Error('Invalid callback function');
    }
    
    params.app = this.appKey;
    params.apikey = this.userKey;
    params.action = 'pages/news';
    params.method = 'edit';
       
    this.postCall(params, callback);
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-get
 */
Api.prototype.noveGet = function(id, callback) {
    
    if (typeof callback != 'function') {
        throw new Error('Invalid callback function');
    }
    
    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/news',
        method: 'get',
        id: id
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-delete
 */
Api.prototype.novaDelete = function(id, callback) {
    
    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/news',
        method: 'delete',
        id: id
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#id1
 */
Api.prototype.faqList = function(callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/faq',
        method: 'list'
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#metode-answer
 */
Api.prototype.faqAnswer = function(question_id, answer, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/faq',
        method: 'answer',
        question_id: question_id,
        answer: answer
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#id2
 */
Api.prototype.faqDelete = function(callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/faq',
        method: 'delete'
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#griezums-unique
 * 
    date_from:	sākuma datums formā YYYY-MM-DD (nav obligāts)
    date_till:	beigu datums formā YYYY-MM-DD (nav obligāts)
 * 
 */
Api.prototype.statsUnique = function(dateFrom, dateTill, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/stats',
        type: 'unique'
    }
    
    if (typeof dateFrom != 'function' && typeof dateTill != 'function') {
        
        params.date_from = dateFrom;
        params.date_till = dateTill;
        
    } else {
        callback = dateFrom;
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#griezums-fans
 * 
    date_from:	sākuma datums formā YYYY-MM-DD (nav obligāts)
    date_till:	beigu datums formā YYYY-MM-DD (nav obligāts)
 * 
 */
Api.prototype.statsFans = function(dateFrom, dateTill, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/stats',
        type: 'fans'
    }
    
    if (typeof dateFrom != 'function' && typeof dateTill != 'function') {
        
        params.date_from = dateFrom;
        params.date_till = dateTill;
        
    } else {
        callback = dateFrom;
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#griezums-pages
 */
Api.prototype.statsPages = function(dateFrom, dateTill, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/stats',
        type: 'pages'
    }
    
    if (typeof dateFrom != 'function' && typeof dateTill != 'function') {
        
        params.date_from = dateFrom;
        params.date_till = dateTill;
        
    } else {
        callback = dateFrom;
    }
    
    this.getCall(params, callback)
       
}


/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#griezums-genders
 */
Api.prototype.statsGenders = function(dateFrom, dateTill, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/stats',
        type: 'genders'
    }
    
    if (typeof dateFrom != 'function' && typeof dateTill != 'function') {
        
        params.date_from = dateFrom;
        params.date_till = dateTill;
        
    } else {
        callback = dateFrom;
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#id3
 */
Api.prototype.sayList = function(filter, callback) {

    var params = {
        app: this.appKey,
        apikey: this.userKey,
        action: 'pages/say',
        method: 'list'
    }
    
    if (typeof filter != 'function') {
        params.filter = filter;
    } else {
        callback = filter;
    }
    
    this.getCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#id4
 * 
   titlePrefix:	ieraksta prefikss (tiek attēlots oranžā krāsā, attēlā #1)
   title:	saites teksts (attēlā 2)
   link:	URL uz kurieni pārsūtīt lietotāju (attēlā 3)
   text:	Ieraksta teksts (attēlā 4)
   image_data:	Pievienotais attēls. Datus nepieciešams sagatavot base64 kodējumā. (parametrs nav obligāts)
 * 
 */
Api.prototype.sayAdd = function(params, callback) {
    
    params.app      = this.appKey;
    params.apikey   = this.userKey;
    params.action   = 'pages/say';
    params.method   = 'add';

    this.postCall(params, callback)
       
}

/**
 * http://www.frype.com/applications/dev/docs/pages_admin/#id5
 */
Api.prototype.sayDelete = function(id, callback) {
    
    var params      = {};
    params.app      = this.appKey;
    params.apikey   = this.userKey;
    params.action   = 'pages/say';
    params.method   = 'delete';
    params.id       = id;

    this.getCall(params, callback)
       
}

/**
 * Create POST request to draugiem API
 */
Api.prototype.postCall = function(postData, callback) {
    
    var self = this;

    var buf = new Buffer(querystring.stringify(postData));

    var options = {
        host: apiUrl,
        method: 'POST',
        path: apiPath, 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': buf.length
        }
    }

    var req = http.request(options, function(response){
        
        self.parseResponse(response, callback);
        
    });

    req.on('error', function(error) {
        callback(error);
    });

    req.write(buf.toString());

    req.end();

}

/**
 * Create GET request to draugiem API
 */
Api.prototype.getCall = function(params, callback) {
    
    var self = this;
    
    var options = {
        host: apiUrl,
        method: 'GET',
        path: apiPath+'?'+querystring.stringify(params), 
        headers: {
            'Content-Length': 0
        }
    }

    var req = http.request(options, function(response){

        self.parseResponse(response, callback);

    });

    req.on('error', function(error) {
        callback(error);
    });
    
    req.end();

}

/**
 * Parse API response
 */
Api.prototype.parseResponse = function(response, callback) {
    
    var data = '';

    response.on('data', function(d) {
        data+=d.toString();
    });

    response.on('error', function(error){
        callback(error);
    });

    response.on('end', function(){
        
        var parsed = false;
        
        try {

            parsed = JSON.parse(data);

        } catch(e) {}
        
        if (parsed === false) {
            
            callback('can\'t parse response to json'); 
        //check whether response doesn't hold API error    
        } else if (typeof parsed.error != 'undefined') {
            
            callback(parsed); 
            
        } else {
            
            callback(null, parsed); 
            
        }

    });
    
}