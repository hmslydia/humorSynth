addUserInfo = function(obj){
  if(Meteor.userId()){
    obj["user_id"] = Meteor.userId()
  } 
}


Meteor.methods({ 
  insertExerciseLog: function(params){
    addUserInfo(params)      
    ExerciseLog.insert(params)    
  },
     
})