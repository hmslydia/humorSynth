Template.write.helpers({
  'time': function(e){
    return Session.get("time");
  }
})
  

Template.write.events({
  'click .start ': function(event){
    $(event.currentTarget).closest("span.exerciseSpan").find(".ourAnswers").first().css("display", "inline") 
    setTimer2()

    //hide the joke button
    $(event.currentTarget).prop("disabled",true)
  },
  

  'click #nextButton ': function(event){
      var template = this.nextTemplate 
      var type = this.nextType 
      var thisTemplate = this.descriptionTemplate
      var answers = $(".answer")
      
      var submissionData = []
      
      
      
      _.each(answers, function(answer){
        console.log($(answer))
        var exerciseId = $(answer).data("exerciseid")
        //console.log(exerciseId)
        
        
        var exerciseType = $(answer).data("exercisetype")
        //console.log(exerciseType)
        
        var value = $(answer).val()
        console.log("template: "+this.descriptionTemplate)
        console.log(this.nextType)
        submissionData.push({
          template: thisTemplate,
          exerciseId: exerciseId,
          exerciseType: exerciseType,
          value: value
        })
      })
      
      Meteor.call('insertData', submissionData, function(){
        console.log("successfully submitted data")
      })
      
           
      var template = this.nextTemplate 
      var type = this.nextType 
      Router.go(template, {type: type})
      
  },
  
})

Template.jokeUI.events({
  'click .addJoke': function(event){
    //
    
    $(event.currentTarget).closest("span.jokeContainer").find(".joke2").first().css("display", "inline") 

    //hide the joke button
    $(event.currentTarget).prop("disabled",true)
  }
})

function setTimer2(){
  var clock = 900; //5;
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