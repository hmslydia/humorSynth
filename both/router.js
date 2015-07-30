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
    path: '/introduction/:type',
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
        console.log("rerender")
        this.render()
      }
    }
     
  })  


  this.route('scaffold', { 
    path: '/scaffold/:type',
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
  
  this.route('exercise', { 
    path: '/exercise/:type',
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

