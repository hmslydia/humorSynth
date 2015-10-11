Template.introduction.events({
  'click .next ': function(event){ 
    
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
      Router.go(template, {type: type})
      */
  },

})

