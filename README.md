Draugiem.lv API node.js client
=============
Draugiem.lv node.js API (currently only business page) client. (http://www.frype.com/applications/dev/docs/pages_admin)

Install
-------
```npm install draugiem```

Usage
-------
```javascript
var Api     = require('./../lib/draugiem');
var client  = new Api('appId', 'appKey', 'userKey');

client.dashboard(function(error, data){
    
    console.log(data);
    
});
```

Methods
-------
- ```sayList```     - http://www.frype.com/applications/dev/docs/pages_admin/#id3
- ```sayAdd```      - http://www.frype.com/applications/dev/docs/pages_admin/#id4
- ```sayDelete```   - http://www.frype.com/applications/dev/docs/pages_admin/#id5
- ```dashboard```   - http://www.frype.com/applications/dev/docs/pages_admin/#lapas-aktualas-informacijas-iegusana-pages-dashboard-izsaukums
- ```novaList```    - http://www.frype.com/applications/dev/docs/pages_admin/#metode-list
- ```novaAdd```     - http://www.frype.com/applications/dev/docs/pages_admin/#metode-add
- ```novaEdit```    - http://www.frype.com/applications/dev/docs/pages_admin/#metode-edit
- ```novaGet```     - http://www.frype.com/applications/dev/docs/pages_admin/#metode-get
- ```novaDelete```  - http://www.frype.com/applications/dev/docs/pages_admin/#metode-delete
- ```faqList```     - http://www.frype.com/applications/dev/docs/pages_admin/#id1
- ```faqAnswer```   - http://www.frype.com/applications/dev/docs/pages_admin/#metode-answer
- ```faqdelete```   - http://www.frype.com/applications/dev/docs/pages_admin/#id2
- ```statsUnique``` - http://www.frype.com/applications/dev/docs/pages_admin/#griezums-unique
- ```statsFans```   - http://www.frype.com/applications/dev/docs/pages_admin/#griezums-fans
- ```statsPages```  - http://www.frype.com/applications/dev/docs/pages_admin/#griezums-pages
- ```statsGenders```- http://www.frype.com/applications/dev/docs/pages_admin/#griezums-genders
