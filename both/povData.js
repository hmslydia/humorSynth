dataX["povIntro"] = {
  name: "Introduction: Point of View",
  descriptionTemplate: "povDescription",
  nextTemplate: "scaffold",
  nextType: "povScaffold",
       
  examples: [
    {
      exampleTemplate: "povExample",
      headline: "<span class='focusPoint'>Justin Bieber</span> Baptized In NYC Bathtub",
      headlineId: "37064",
      description: "Videos are surfacing online of people going into <span class='focusPoint'>Apple stores</span> and trying to bend the new iPhone 6 Plus to prove that it’s possible, drawing criticism from internet commenters accusing them of being idiots. What do you think?",
      voice: "“Oh my God! Can <span class='focusPoint2'>I</span> lick the tub?”",
      voice_img: "voice1md2.jpg",
      annotation1: "Justin Bieber",
      annotation2: "Justin Bieber fan",
      annotation3: "The speaker is an obsessed Bieber fan."
    },
    {
      exampleTemplate: "povExample",
      headline: "Study: Infants Can Smell <span class='focusPoint'>Mothers’</span> Fears",
      headlineId: "asdf",
      description: "descriptionXXXX",
      voice: "I think I’m still going to make a list of everything <span class='focusPoint2'>my child</span> should be afraid of, just in case.",
      annotation1: "Mother",
      annotation2: "Mother (or possibly father)",
      annotation3: "The speaker is a mother (or possibly a father) and refers to her child."
    },  
    {
      exampleTemplate: "povExample",
      headline: "Poll: <span class='focusPoint'>Elite Colleges</span> Don’t Produce Happier Graduates",
      headlineId: "asdf",
      description: "",
      voice: "Yeah, like <span class='focusPoint2'>I’ll</span> really believe a poll from those state-school morons over at Gallup.",
      annotation1: "Elite Colleges",
      annotation2: "Elite College graduate",
      annotation3: "The speaker is an elite college graduate."
    },      
  ]   
}
  
dataX["povScaffold"] = {
  name: "Practice: Identifying Point of View",
  descriptionTemplate: "povScaffoldDescription",
  nextTemplate: "exercise",
  nextType: "povExercise",
  
  examples: [
    {
      exampleTemplate: "povScaffold",
      headline: "Study: Firstborn Children Have More Ambition",
      headlineAnnotated: "Study: Firstborn <span class='focusPoint'>Children</span> Have More Ambition",
      headlineId: "",
      description: "",
      voice: "I like to think that I have equally low expectations of all my children.",
      voiceAnnotatted: "I like to think that I have equally low expectations of all <span class='focusPoint2'>my children</span>.",
      annotation1: "Children",
      annotation2: "parent"
    },
    
    {
      exampleTemplate: "povScaffold",
      headline: "Study: Firstborn Children Have More Ambition",
      headlineAnnotated: "Study: <span class='focusPoint'>Firstborn Children</span> Have More Ambition",
      headlineId: "",
      description: "",
      voice: "I knew there had to be a scientific reason my sister has a job and I don’t.",
      voiceAnnotated: "I knew there had to be a scientific reason <span class='focusPoint2'>my sister</span> has a job and I don’t.",
      annotation1: "Firstborn Children",
      annotation2: "a second born-child (talking about the first born child)"
    },
          {
        exampleTemplate: "povExercise",
        headline: "Study: Dads Who Do Dishes Have More Ambitious Daughters",
        headlineId: "headline3",
        description: "descriptionXXXX",
        voice: "That would explain my daughter’s uncontrollable thirst for power.",
        annotation1: "Dads",
        annotation2: "Dad"
      },
    {
      exampleTemplate: "povScaffold",
      headline: "Snacking May Help Minimize Spousal Conflict",
      headlineAnnotated: "Snacking May Help Minimize <span class='focusPoint'>Spousal Conflict</span>",
      headlineId: "",
      description: "",
      voice: "But most of our fights are about who ate all the snacks.",
      voiceAnnotated: "But most of <span class='focusPoint2'>our fights</span> are about who ate all the snacks.",
      annotation1: "Spousal Conflict",
      annotation2: "fighting spouses"
    },
    /*
    {
      exampleTemplate: "alternativeChunkScaffold",
      headline: "Leonardo DiCaprio Auctions Off Trip To Space With Him",
      headlineId: "",
      description: "",
      voice: "But 2015 is when I’m going to the center of the earth with Robert Redford.",
      annotation1: "Leonardo DiCaprio",
      annotation2: "Robert Redford"
    },
    */
  ]
}
  
dataX["povExercise"] = {
    name: "Exercise: Finding Points of View",
    descriptionTemplate: "povExerciseInstructions",
    nextTemplate: "introduction",
    nextType: "detailsIntro",
    examples: [
      
      {
        exampleTemplate: "povExercise",
        headline: "Teens Getting High Off Lip Balm In New ‘Beezin’ Trend",
        headlineId: "headline1",
        description: "description",
        voice: "I think it’s time we all sat our children down and told them that smoking weed is great and normal.",
        annotation1: "Teens",
        annotation2: "Parents of teens",
        annotation3: ""
      },
      {
        exampleTemplate: "povExercise",
        headline: "60 Teens Arrested In Senior Class Prank",
        headlineId: "headline2",
        description: "",
        voice: "By failing to uphold the values of Teaneck High School, the only people those teens were really pranking were themselves.",
        annotation1: "Senior Class",
        annotation2: "High School Principle, other responsible adult"
      },
      /*

      */
      {
        exampleTemplate: "povExercise",
        headline: "‘Mighty Morphin Power Rangers’ Movie In The Works",
        headlineId: "headline4",
        description: "",
        voice: "So are they going to be dinosaur Zords or jungle animal Zords? Fucking tell me now!",
        annotation1: "‘Mighty Morphin Power Rangers’",
        annotation2: "obsessive fan of ‘Mighty Morphin Power Rangers’"
      },/*
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Study: Cat People Smarter Than Dog People",
        headlineId: "headline5",
        description: "",
        voice: "What about <span class='focusPoint2'>lizard people</span>? What’s their deal?",
        annotation1: "Cat People (or Dog People)",
        annotation2: "lizard people"
      },
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Michael Jackson Hologram Performs At Billboard Music Awards",
        headlineId: "headline6",
        description: "",
        voice: "It must have been inspiring for all the other <span class='focusPoint2'>pop stars</span> in attendance to see what awaits them.",
        annotation1: "Michael Jackson",
        annotation2: "other pop stars",
      },
        
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "",
        headlineId: "",
        description: "",
        voice: "",
        annotation1: "",
        annotation2: ""
      },  
      */    
    ]    
    
  }