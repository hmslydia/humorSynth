Template.scaffold.events({
  'click .next ': function(event){      
      var template = this.nextTemplate 
      var type = this.nextType 
      Router.go(template, {type: type})
  },
})