Template.violation.events({
  'click .showAnswers ': function(event){
    //show the answer
    //var exerciseId = $(event.currentTarget).closest("span.exerciseContainer").first().prop("id")
        
    $(event.currentTarget).closest("span.exerciseSpan").find(".ourAnswers").first().css("display", "inline") 

    //hide the joke button
    $(event.currentTarget).prop("disabled",true)
  },
})