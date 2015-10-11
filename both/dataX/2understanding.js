  dataX["understanding"] = {
    name: "Headline Understanding",
    descriptionTemplate: "understanding",
    nextType: "associations",
    
    
    aspectExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Justin Bieber Baptized In NYC Bathtub",
        headlineId: "37064",
        description: "Pop star Justin Bieber was baptized in a friend’s bathtub this weekend after weeks of Bible study and church services, with celebrity blogs reporting that the 20-year-old sought spiritual guidance in an attempt to wash away his sins following a scandal in which videos emerged of him using racial slurs.",
        aspects:[
          {aspect: "Justin Bieber", type: "person"},
          {aspect: "baptized", type: "action"},
          {aspect: "NYC", type: "thing?"},
          {aspect: "sought spiritual guidance in an attempt to wash away sins", type: "reason (for baptism)"},
          {aspect: "scandal", type: "thing"},        
        ]
      }        
    ],
    
    aspectExercises: [
      {
        exerciseTemplate: "aspectExercise",
        headline: "UConn Holding ‘Football 101’ Clinic For Female Fans",
        displayId: "aspectExercises-1",
        description: "The UConn Huskies announced that the team will host a clinic for female fans instructing them on the basics of football, with officials saying the course is not meant to be condescending to women and that many women may in fact know more about the sport than men. ",
        aspects:[
          {aspect: "UConn", type: "thing/person", displayId: "aspectExercises-1"},
          {aspect: "Football", type: "thing", displayId: "aspectExercises-2"},
          {aspect: "Football 101 Clinic", type: "thing?", displayId: "aspectExercises-3"},
          {aspect: "Holding Football 101 Clinic", type: "action", displayId: "aspectExercises-4"},
          {aspect: "Female Fans", type: "person", displayId: "aspectExercises-5"},  
          {aspect: "not meant to be condescending to women ", type: "belief", displayId: "aspectExercises-6"},
          {aspect: "many women may in fact know more about the sport than men", type: "belief", displayId: "aspectExercises-7"},    
        ]
      }        
    ], 


    reactionExamples: [
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "Study: Too Much TV Can Lead To Early Death",
        aspect: "early death",
        expectedReaction: "bad", expectedBelief: "effect: we should stop watching so much TV if it's killing us",
        expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "effect: we should stop watching so much TV if it's killing us"},
        ]      
      },
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "Study: Too Much TV Can Lead To Early Death",
        aspect: "TV",
        expectedReaction: "good", expectedBelief: "I like TV. It’s entertaining. I learned so much from Sesame Street.",
        expectedReactions:[
          {expectedReaction: "good", expectedBelief: "I like TV. It’s entertaining. I learned so much from Sesame Street."},
          
        ]      
      },
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "Study: Too Much TV Can Lead To Early Death",
        aspect: "TV",
        expectedReaction: "bad, blame", expectedBelief: "TV is full of trashy reality TV Shows",
        expectedReactions:[
          {expectedReaction: "bad, blame", expectedBelief: "TV is full of trashy reality TV Shows"},
        ]      
      }, 
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "Study: Too Much TV Can Lead To Early Death",
        aspect: "study",
        expectedReaction: "true", expectedBelief: "studies are usually true and my mother told me TV rots your brain.",
        expectedReactions:[
          {expectedReaction: "true", expectedBelief: "studies are usually true and my mother told me TV rots your brain."},
        ]      
      },    
    ],
    
    
    
    reactionExercises: [
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-1",
        headline: "Florida School To Stop Giving Kids Mountain Dew Before Tests",
        aspect: "stop giving Mt. Dew to kids",
        //expectedReaction: "good", expectedBelief: "Mt. Dew is too sugary for kids",
        expectedReactions:[
          {expectedReaction: "good", expectedBelief: "Mt. Dew is too sugary for kids"},
        ]      
      },
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-2",
        headline: "Florida School To Stop Giving Kids Mountain Dew Before Tests",
        aspect: "tests",
        //expectedReaction: "bad", expectedBelief: "I hate tests, they give me anxiety",
        expectedReactions:[
          {expectedReaction: "bad", 
            expectedBelief: "I hate tests, they give me anxiety."},
          {expectedReaction: "good", 
            expectedBelief: "Tests are needed to assess students."},            
          
        ]      
      },
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-3",
        headline: "Florida School To Stop Giving Kids Mountain Dew Before Tests",
        aspect: "Mountain Dew",
        expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "Mt Dew is sugary and fake food. It's horrible for everybody, let alone kids"},
          {expectedReaction: "good", expectedBelief: "Some people love caffeine rush and the sugar high."},
        ]      
      }, 
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-4",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        aspect: "throwing away healthy lunch",
       expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "effect: the kids will be unhealthy"},
        ]      
      }, 
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-5",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        aspect: "healthier",
       expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "healthy food is bland and boring"},
        ]      
      }, 
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-6",
        headline: "Mick Jagger Blamed For Brazil’s Historic World Cup Defeat",
        aspect: "Mick Jagger blamed",
       expectedReactions:[
          {expectedReaction: "false, bad", expectedBelief: "Mick Jagger had nothing to do with the World Cup"},
        ]      
      },  
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-7",
        headline: "Facebook Announces 'Anonymous Log-In' For Apps",
        aspect: "Facebook adding enhanced privacy features",
       expectedReactions:[
          {expectedReaction: "good, praise", expectedBelief: "Additional privacy is important for facebook users"},
           {expectedReaction: "bad", expectedBelief: "Facebook has ignored privacy in the past. This is too little too late."}, 
        ]      
      },  
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-8",
        headline: "Study: 1 In 6 Public School Teachers Were ‘Chronically Absent’ Last Year",
        aspect: "teachers absent",
       expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "Teachers need to show more respect for their students"},
        ]  
             
      },  
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-9",
        headline: "Study: 1 In 6 Public School Teachers Were ‘Chronically Absent’ Last Year",
        aspect: "teachers",
       expectedReactions:[
          {expectedReaction: "good", expectedBelief: "Teachers are important and they aren’t valued enough in society"},
        ]      
      },  
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExercises-10",
        headline: "Taco Bell Adds ‘Quesarito’ To Official Menu",
        aspect: "adding quesarito",
       expectedReactions:[
          {expectedReaction: "bad", expectedBelief: "Gross. I don't even know what that is. Is it Mexican food?"},
          {expectedReaction: "will it succeed", expectedBelief: "It may or may not succeed, but it probably will because people seem to eat Taco Bell despite"},
        ]      
      },      
    ],    
   
  }