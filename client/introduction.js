Template.introduction.events({
  'click .next ': function(event){ 
      var template = this.nextTemplate 
      var type = this.nextType 
      var thisTemplate = this.descriptionTemplate
      var answers = $(".answer")
      
      var submissionData = []
      
      _.each(answers, function(answer){
        console.log($(answer))
        var exerciseId = $(answer).data("exerciseid")        
        var exerciseType = $(answer).data("exercisetype")        
        var value = $(answer).val()

        submissionData.push({
          template: thisTemplate,
          exerciseId: exerciseId,
          exerciseType: exerciseType,
          value: value
        })
      })
      
      var allCheckedRadios = $("input:checked")
      _.each(allCheckedRadios, function(radio){
        var exerciseId = $(radio).data("exerciseid")        
        var exerciseType = $(radio).data("exercisetype")        
        var value = $(radio).val()

        submissionData.push({
          template: thisTemplate,
          exerciseId: exerciseId,
          exerciseType: exerciseType,
          value: value
        })        
      })
      
      //console.log(submissionData)
      
      
      Meteor.call('insertData', submissionData, function(){
        console.log("successfully submitted data")
        //console.log(submissionData)
      })
      
           
      var template = this.nextTemplate 
      var type = this.nextType 
      Router.go(template, {type: type})
      
  },

})





