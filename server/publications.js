Meteor.publish('exerciselog', function(){
  return ExerciseLog.find()
})

Meteor.publish('pagelog', function(){
  return PageLog.find()
})