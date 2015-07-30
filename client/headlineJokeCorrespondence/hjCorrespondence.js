Template.hjCorrespondenceScaffoldDescription.events({
  'click #submitHeadlineChunks': function(event){
      //console.log('#submitHeadlineChunks')
      var headlineId = $(event.currentTarget).data("headlineid")
      $(".headlineChunksAnswers."+headlineId).css("display", "inline")  
      
      $(event.currentTarget).css("display", "none")  
  },

})