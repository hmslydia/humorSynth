Template.home.events({
  'click .go ': function(event){      
      var template = "introduction" //$(event.currentTarget).data().template
      var type =$(event.currentTarget).data().type      
      Router.go(template, {type: type})      
  },
  /*
  'click .go2 ': function(event){      
      var template = $(event.currentTarget).data().template
      var exampleSet = $(event.currentTarget).data().exampleset
      var type = $(event.currentTarget).data().type      
      Router.go(template, {exampleSet:exampleSet, type: type})      
  },
  */
})

Deps.autorun(function () {
  var current = Router.current();

  Deps.afterFlush(function () {
    //$('.content-inner').scrollTop(0);
    $(window).scrollTop(0);
  });
});