Template.introduction.events({
  'click .next ': function(event){      
      var template = "introduction" //this.nextTemplate 
      var type = this.nextType 
      Router.go(template, {type: type})
  },

})

