Template.scaffold.events({
  'click .showAnswers ': function(event){
    $(event.currentTarget).css("display","none")
    var v = $(event.currentTarget).closest(".row").siblings(".ourAnswers").first().css("display", "inline")
      
  },
  'click .next ': function(event){      
      var template = this.nextTemplate 
      var type = this.nextType 
      Router.go(template, {type: type})
  },
})