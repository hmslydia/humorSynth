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
  /*
  this.route('template2', { 
    path: '/template2/:exampleSet/:type/',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){  
            
      return []
    },
    data: function(){
      var type = this.params.type  
      var exampleSet = this.params.exampleSet
       
      var d = dataX[type]
      var e = dataX[exampleSet]
      return {d: d, e: e}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }     
  })
  */


})

