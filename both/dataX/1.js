dataX = {

 
  
}

screenshots ={
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
        {aspect: "an attempt to wash away sins", type: "reason"},
        {aspect: "scandal", type: "thing"},        
      ]
    }        
  ],
  
  
  reactionExamples: [
    {
      exampleTemplate: "reactionExample",
      displayId: "reactionExample-1",
      headline: "Study: Too Much TV Can Lead To <span class='screenshot-attn'>Early Death</span>",
      aspect: "early death",
      expectedReaction: "bad", expectedBelief: "effect: we should stop watching so much TV if it's killing us.",
      expectedReactions:[
        {expectedReaction: "bad", expectedBelief: "effect: we should stop watching so much TV if it's killing us"},
      ]      
    },
    {
      exampleTemplate: "reactionExample",
      displayId: "reactionExample-1",
      headline: "Study: Too Much <span class='screenshot-attn'>TV</span> Can Lead To Early Death",
      aspect: "TV",
      expectedReaction: "good", expectedBelief: "I like TV. It’s fun and kids learn from Sesame Street.",
      expectedReactions:[
        {expectedReaction: "good", expectedBelief: "I like TV. It’s fun and kids learn from Sesame Street."},
        
      ]      
    },
    {
      exampleTemplate: "reactionExample",
      displayId: "reactionExample-1",
      headline: "Study: Too Much <span class='screenshot-attn'>TV</span> Can Lead To Early Death",
      aspect: "TV",
      expectedReaction: "bad, blame", expectedBelief: "TV is full of trashy reality TV Shows like Jersey Shore.",
      expectedReactions:[
        {expectedReaction: "bad, blame", expectedBelief: "TV is full of trashy reality TV Shows like Jersey Shore"},
      ]      
    }, 
    {
      exampleTemplate: "reactionExample",
      displayId: "reactionExample-1",
      headline: "Study: Too Much <span class='screenshot-attn'>TV</span> Can Lead To Early Death",
      aspect: "study",
      expectedReaction: "true", expectedBelief: "studies are usually true and my mother told me TV rots your brain.",
      expectedReactions:[
        {expectedReaction: "true", expectedBelief: "studies are usually true and my mother told me TV rots your brain."},
      ]      
    },    
  ],
  


    detailsExamples: [
      {
        exampleTemplate: "reactionExample",
        displayId: "detailsExercises-2",
        headline: "Report: <span class='screenshot-attn'>'SkyMall'</span> Magazine May End Print Edition",
        aspect: "'SkyMall' Magazine products",
        associations:[
          {association: "'Summer Savannah’ Backyard Garden Lion Pedestals", joke: "Alright, how many ‘Summer Savannah’ Backyard Garden Lion Pedestals do I have to order to turn this thing around?"},
        ]     
      },      
    ],

    insultExamples: [
      {
        exampleExamples: "reactionExample",
        displayId: "insultExercises-1",
        headline: "U.S. Women’s <span class='screenshot-attn'>Soccer</span> Team Draws ‘Group Of Death’ For World Cup",
        aspect: "Soccer",
        associations:[
          {association: "Soccer is boring", joke: "Hey, I thought the deal was no one was supposed to bug me about soccer for another four years."},
        ]      
      }, 
    ],  

     altThingExamples: [
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "People Bending iPhones At <span class='screenshot-attn'>Apple Stores</span>",
        aspect: "Apple Store",
        associations:[
          {association: "Best Buy", joke: "I can’t believe people would just walk into an Apple store and start breaking things like it’s a Best Buy."},
        ]      
      }, 
      {
        exampleTemplate: "reactionExample",
        displayId: "reactionExample-1",
        headline: "<span class='screenshot-attn'>UConn Holding</span> ‘Football 101’ Clinic For Female Fans",
        aspect: "UConn",
        associations:[
          {association: "Yale", joke: "Sure, I guess UConn’s course is fine if you couldn’t get into Yale’s football clinic."},
 
        ]      
      },      
    ],


    positiveSentimentExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        headlineSentiment: "weird",
        jokeSentiment: "good",
        jokeSnippet: "I look forward to..."
      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "It's an exciting time to be a shark, that's for sure.",
        headlineSentiment: "bad",
        jokeSentiment: "good",
        jokeSnippet: "It's an exciting time..."
      },      
      {
        exampleTemplate: "aspectExample",
        headline: "George Clooney Engaged",
        joke: "Good. He’s had enough.",
        headlineSentiment: "good",
        jokeSentiment: "good",
        jokeSnippet: "Good."
      }        
    ],
 
/* 
     negativeSentimentExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "This sure makes Ben & Jerry’s look like a bunch of flag-burning ISIS sympathizers.",
        headlineSentiment: "weird",
        jokeSentiment: "bad",
        jokeSnippet: "...flag-burning ISIS sympathizers."
      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        joke: "This is especially disappointing given that all the government campaigns to get adults to eat healthier have been such a success.",
        headlineSentiment: "bad",
        jokeSentiment: "bad",
        jokeSnippet: "This is especially disappointing given..."
      },      
      {
        exampleTemplate: "aspectExample",
        headline: "U.S. Women’s Soccer Team Draws ‘Group Of Death’ For World Cup",
        joke: "Hey, I thought the deal was no one was supposed to bug me about soccer for another four years.",
        headlineSentiment: "bad",
        jokeSentiment: "bad",
        jokeSnippet: "...bug me..."
      }        
    ],
*/

  reasonGoodExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        headlineSentiment: "weird",
        jokeSentiment: "good",
        jokeSnippet: "I look forward to...",
        beliefType: "reason good (sarcastic)",
        belief: "ice cream will honor veterans",
      },           
     
      {
        exampleTemplate: "aspectExample",
        headline: "Report: More Couples Getting Social Media Prenups",
        joke: "It’s a great idea if you’re planning on marrying someone you sort of know but don’t have a good feeling about.",
        headlineSentiment: "weird",
        jokeSentiment: "good",
        jokeSnippet: "It’s a great idea...",
        beliefType: "reason good (sarcastic)",
        belief: "it’s good to take precautions before you get married (just not these precautions. these are stupid)",
      },               
    ],

    reasonBadExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        joke: "This is especially disappointing given that all the government campaigns to get adults to eat healthier have been such a success.",
        headlineSentiment: "bad",
        jokeSentiment: "bad",
        jokeSnippet: "This is especially disappointing given...",
        beliefType: "reason bad (sarcastic)",
        belief: "because I expected it to succeed based on other information (sarcastically)",
      },              
    ],


    sarcasmExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Mick Jagger Blamed For Brazil’s Historic World Cup Defeat",
        joke: "There is absolutely no other explanation.",
        expectations: [
          {expectation: "This is weird"},
          {expectation: "Why? Mick Jagger had nothing to do with this."},
          {expectation: "This is false"},
        ],
        beliefType: "this is true",
        belief: "Mick Jagger is the only possible explanation."

      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        expectations: [
          {expectation: "This is weird"},
          {expectation: "Why? ice cream is an unusual way to to honor veterans."},
          {expectation: "Usually you honor veterans with flowers"}, 
          {expectation: "This is bad"}, 
        ],
        beliefType: "This is good",
        belief: "Ice cream is a good way to honor veterans, just like flowers."

      },
      {
        exampleTemplate: "aspectExample",
        headline: "Taco Bell Adds ‘Quesarito’ To Official Menu",
        description: "After testing out a new menu item called the quesarito in Oklahoma City to much success, Taco Bell has decided to add the new creation, a beef burrito tucked inside a cheese quesadilla, to its official menu.",
        joke: "Yeah, but how’s the item going to do in markets not filled with a bunch of food snobs?",
        expectations: [
          {expectation: "This is weird."},
          {expectation: "Taco Bell is gross. "},
          {expectation: "It succeeded in tests"},
          {expectation: "It succeed because that market eats gross food."},
        ],
        beliefType: "Taco Bell is great food",
        belief: "It succeeded because all the food snobs in Oklahoma"

      },        
                 
    ],

    angleExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "It's an exciting time to be a shark, that's for sure.",
        expectations: [
          {expectation: "This is dangerous, bad for people"},
          {expectation: "But it’s good for sharks"},
        ],
        angle: "shark",
        beliefType: "effect on others ",
        belief: "This is good for sharks"

      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "This sure makes Ben & Jerry’s look like a bunch of flag-burning ISIS sympathizers.",
        expectations: [
          {expectation: "Honoring veterans is good"},
          {expectation: "But this is weird"},
          {expectation: "Honoring veterans is politically conservative."}, 
          {expectation: "Alternative thing: Baskin-Robbins -> ?"}, 
        ],
        angle: "Ben & Jerry’s",
        beliefType: "this is bad for Ben & Jerry’s",
        belief: "It makes them look unpatriotic."

      },
      {
        exampleTemplate: "aspectExample",
        headline: "Home Trampolines Responsible For 1 Million ER Visits",
        joke: "Sounds like a problem that can be solved with four or five surrounding trampolines.",
        expectations: [
          {expectation: "This is bad"},
          {expectation: "Trampolines are hurting people"},
          {expectation: "Trampolines are a problem."},
          {expectation: "Problem: people bounce off them and hurt themselves."},
        ],
        angle: "trampolines",
        beliefType: "trampolines are a solution to this problem",
        belief: "Use more trampolines to protect people"

      },        
                 
    ],
  
}

