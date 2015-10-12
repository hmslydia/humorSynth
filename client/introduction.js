Template.introduction.events({
  'click .next ': function(event){ 
      var answers = $(".answer")
      
      var submissionData = []
      
      _.each(answers, function(answer){
        console.log($(answer))
        var exerciseId = $(answer).data("exerciseid")
        //console.log(exerciseId)
        
        
        var exerciseType = $(answer).data("exercisetype")
        //console.log(exerciseType)
        
        var value = $(answer).val()
        
        submissionData.push({
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



