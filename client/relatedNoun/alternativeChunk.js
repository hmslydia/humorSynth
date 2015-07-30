Template.alternativeChunkExercise.events({
  'click .showAnswers ': function(event){
    //show the answer
    var f = $(event.currentTarget).closest(".row").siblings(".inputs").find(".ourAnswers").first().css("display", "inline") 
    var v = $(event.currentTarget).closest(".row").siblings(".ourAnswers").first().css("display", "inline") 
    
    //hide the joke button
    $(event.currentTarget).css("display","none")
  },
})


Template.alternateChunkExampleSample.events({
  'click .showSampleAnswer ': function(event){
    //hide the joke button
    var headlineid = $(event.currentTarget).data("headlineid")
 
        
    $(".sampleAnswer."+headlineid).css("display", "inline") 
    
    $(event.currentTarget).css("display","none")
  },  
  
})
