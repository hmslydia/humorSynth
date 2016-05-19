Router.map(function(){
  this.route('home', { 
    path: '/',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){         
      return []
    },
    data: function(){
      return {
        data: 0
      }
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
     
  })
  this.route('prewriteWrapper', { 
    path: '/prewrite',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = "prewrite"//this.params.type  
      var d = dataX[type]
      return d
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  })
  this.route('writeWrapper', { 
    path: '/write',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = "write"//this.params.type  
      var d = dataX[type]
      return d
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  })

  this.route('thanksWrapper', { 
    path: '/thanks',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = "thanks"//this.params.type  
      var d = dataX[type]
      return d
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  }) 

  this.route('screenshots', { 
    path: '/screenshots',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = "screenshots"  
      return screenshots
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  })

  this.route('introduction', { 
    path: '/:type',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = this.params.type  
      var d = dataX[type]
      return d
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  })  
  

  


})

