Template.insultTargetScaffold.events({
  'click .showAnswers ': function(event){
    console.log("INSULT TARGET")
    //show the answer
    var f = $(event.currentTarget).closest(".row").siblings(".inputs").find(".ourAnswers").first().css("display", "inline") 
    var v = $(event.currentTarget).closest(".row").siblings(".ourAnswers").first().css("display", "inline") 
    
    //hide the joke button
    $(event.currentTarget).css("display","none")
  },
})

Template.insultTargetExercise.events({
  'click .showAnswers ': function(event){
    //show the answer
    var f = $(event.currentTarget).closest(".row").siblings(".inputs").find(".ourAnswers").first().css("display", "inline") 
    var v = $(event.currentTarget).closest(".row").siblings(".ourAnswers").first().css("display", "inline") 
    
    //hide the joke button
    $(event.currentTarget).css("display","none")
  },
})

