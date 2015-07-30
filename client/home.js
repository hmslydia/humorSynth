Template.home.events({
  'click .go ': function(event){
      
      var template =$(event.currentTarget).data().template
      var type =$(event.currentTarget).data().type
      
      Router.go(template, {type: type})
      //Router.go("analysis", {batch_id: "analysisBatchId", num: "num_completed"})
  },

})

Deps.autorun(function () {
  var current = Router.current();

  Deps.afterFlush(function () {
    //$('.content-inner').scrollTop(0);
    $(window).scrollTop(0);
  });
});