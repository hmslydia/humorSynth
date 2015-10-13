getTime = function(){
  return (new Date()).getTime()
}

addUserInfo = function(obj){
  if(Meteor.userId()){
    obj["user_id"] = Meteor.userId()
    obj["submit_time"] = getTime()
    
  } 
}


Meteor.methods({ 
  insertData: function(params){
    var submit_time = getTime()
    
    pageLogParams = {}
    pageLogParams.data = params
    pageLogParams.user_id = Meteor.userId()
    pageLogParams.submit_time = submit_time
  
    //console.log(pageLogParams)
    PageLog.insert(pageLogParams)  
    
    
    _.each(params, function(p){
      exerciseLogParams = {}
      exerciseLogParams.exerciseId = p.exerciseId
      exerciseLogParams.exerciseType = p.exerciseType
      exerciseLogParams.value = p.value
      exerciseLogParams.template = p.template 
      pageLogParams.user_id = Meteor.userId()
      pageLogParams.page_submit_time = getTime()
      ExerciseLog.insert(exerciseLogParams)
    })  
  },
     
})

