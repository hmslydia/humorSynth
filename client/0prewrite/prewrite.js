Template.prewrite.helpers({
  'time': function(e){
    return Session.get("time");
  }
})
  

Template.prewrite.events({
  'click .start ': function(event){
    $(event.currentTarget).closest("span.exerciseSpan").find(".ourAnswers").first().css("display", "inline") 
    setTimer()

    //hide the joke button
    $(event.currentTarget).prop("disabled",true)
  },
  

  'click #nextButton ': function(event){
    console.log("asdf")
    //show the answer
    //var exerciseId = $(event.currentTarget).closest("span.exerciseContainer").first().prop("id")
        
    //$(event.currentTarget).closest("span.exerciseSpan").find(".ourAnswers").first().css("display", "inline") 

    //hide the joke button
    //$(event.currentTarget).prop("disabled",true)
    
      var answers = $(".answer")
      _.each(answers, function(answer){
        console.log($(answer))
        var exerciseId = $(answer).data("exerciseid")
        console.log(exerciseId)
        
        
        var exerciseType = $(answer).data("exercisetype")
        console.log(exerciseType)
        
        var value = $(answer).val()
        console.log(value)
      })
      
      /*
      Meteor.call
      //submit data
      id
      exercise id
      time
      exerise type
      answer
      */
      
      /*     
      var template = "introduction" //this.nextTemplate 
      var type = this.nextType 
      console.log("type: "+type)
      Router.go(template, {type: type})
      */
  },
  
})

function setTimer(){
  var clock = 5; //5;
  var min = Math.floor(clock/60.0)
  var sec = clock % 60
  
  var timeLeft = function() {
    if (clock > 0) {
      clock--;
      min = Math.floor(clock/60.0)
      sec = clock % 60
      if (sec < 10){
        sec = "0"+sec
      }
      
      Session.set("time", min+":"+sec);
      return console.log(clock+" "+min+":"+sec);
    } else {
      console.log("That's All Folks");
      //timer is up
      //indicate to the user. - pop up? color change?
      $(".exerciseSpan").css("color", "lightgrey")
      $("#nextButton").prop("disabled", false)
      alert("Time is up! Please finish your thought and then click 'Next' at the bottom.")
      
      $("#nextButton").css("display", "inline")
      
      return Meteor.clearInterval(interval);
    }
  };
  
  var interval = Meteor.setInterval(timeLeft, 1000);
  
  if (Meteor.isClient) {
    Template.registerHelper("time", function() {
      return Session.get("time");
    });
  }  
  
}