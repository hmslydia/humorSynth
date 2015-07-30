dataX["reasonGoodIntro"] = {
  name: "Introduction: Reason It's Good",
  descriptionTemplate: "reasonGoodDescription",
  nextTemplate: "scaffold",
  nextType: "reasonGoodScaffold",
       
  examples: [
    {
      exampleTemplate: "reasonGoodExample",
      headline: "<span class='focusPoint'>Ronald McDonald Gets Millennial Makeover</span>",
      headlineId: "37064",
      description: "",
      voice: "<span class='focusPoint3'>It’s always good to</span> keep your clown mascot <span class='focusPoint2'>modern and relevant</span>.",
      voice_img: "voice1md2.jpg",
      annotation1: "Ronald McDonald Gets Millennial Makeover", // headline aspect
      annotation2: "It’s always good to", //joke indication it's good
      annotation3: "McDonald's (?)", //good for whom?
      annotation4: "mascot modern and relevant", //reason phrase
      annotation5: "Ronald McDonald's makeover is good for McDonalds because it will keep the mascot modern and relevant. <br>Although it's meant sarcastically, this joke is phrased as if it's a reason this headline is good." //reason explanation
      
    },
    {
      exampleTemplate: "reasonGoodExample",
      headline: "Study: <span class='focusPoint'>College Education</span> More Valuable Than Ever",
      headlineId: "asdf",
      description: "descriptionXXXX",
      voice: "<span class='focusPoint3'>And that doesn’t even take into account</span> that college is where you <span class='focusPoint2'>get the best nicknames</span>.",
      annotation1: "College Education", // headline aspect
      annotation2: "And that doesn’t even take into account", //joke indication it's good
      annotation3: "College students (?)", //good for whom?
      annotation4: "get the best nicknames", //reason phrase
      annotation5: "This ignores the obvious reason college is more valuable than ever and gives a underwhelming, alternative reason that college is valuable." //reason explanation
      
    },  
    {
      exampleTemplate: "reasonGoodExample",
      headline: "<span class='focusPoint'>National Park Service Provides Deer Meat To Homeless</span>",
      headlineId: "asdf",
      description: "",
      voice: "<span class='focusPoint3'>It’s an exciting time</span> to be homeless, that’s for sure.",
      annotation1: "National Park Service Provides Deer Meat To Homeless",
      annotation2: "It’s an exciting time",
      annotation3: "homeless people",
      annotation4: "<span class='plain'>none</span>",
      annotation5: "This implies that recieving deer meat is a reason to be excited for homeless people.",

    },      
  ]   
}
  
dataX["reasonGoodScaffold"] = {
  name: "Practice: Identifying Reasons It's Good",
  descriptionTemplate: "reasonGoodScaffoldDescription",
  nextTemplate: "exercise",
  nextType: "reasonGoodExercise",
  
  examples: [
    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "NASA Asks For Selfies To Celebrate Earth Day",
      headlineAnnotated: "NASA Asks For Selfies To Celebrate Earth Day",
      headlineId: "",
      description: "",
      voice: "I’ve always wanted NASA to know what I look like!",
      voiceAnnotatted: "I’ve always wanted NASA to know what I look like!",
      annotation1: "NASA Asks For Selfies", // headline aspect
      annotation2: "I’ve always wanted", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "to know what I look like", //reason phrase
      annotation5: "This joke ignores Earth Day and focuses on the speaker's personality flaw of narcissism. NASA asking for a selfie is good because it feeds his or her blatant narcissism." //reason explanation
    },
    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Company Unveils ‘Drinkable Sunscreen’",
      headlineAnnotated: "Study: <span class='focusPoint'>Firstborn Children</span> Have More Ambition",
      headlineId: "",
      description: "",
      voice: "Finally, a sunscreen I can drink without shame.",
      voiceAnnotated: "I knew there had to be a scientific reason <span class='focusPoint2'>my sister</span> has a job and I don’t.",
      annotation1: "Drinkable Sunscreen", // headline aspect
      annotation2: "Finally", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "drink without shame", //reason phrase
      annotation5: "This joke takes that position that drinkable sunscreen is a good thing, and that it's particularly good for this person because they've always drunk sunscreen, but now they can do it without shame." //reason explanation
    },
    
    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Nutella Turns 50",
      headlineAnnotated: "Snacking May Help Minimize <span class='focusPoint'>Spousal Conflict</span>",
      headlineId: "",
      description: "",
      voice: "It doesn’t taste a day over 30",
      voiceAnnotated: "",
      annotation1: "Turns 50", // headline aspect
      annotation2: "It doesn’t taste a day over 30", //joke indication it's good
      annotation3: "Nutella", //good for whom?
      annotation4: "It doesn’t taste a day over 30", //reason phrase
      annotation5: "The joke indicates that Nutella doesn't taste as old at it is. This is good for Nutella." //reason explanation
    },
    
    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Parents Paying Professionals To Pack Kids’ Summer Camp Bags",
      headlineId: "",
      description: "",
      voice: "Yeah, it’s probably better for everyone if these particular parents don’t have too much direct contact with their kids.",
      annotation1: "Parents Paying Professionals To Pack", // headline aspect
      annotation2: "Yeah, it’s probably better for everyone if", //joke indication it's good
      annotation3: "everyone, esp. the kids", //good for whom?
      annotation4: "don’t have too much direct contact with their kids", //reason phrase
      annotation5: "The joke infers paying professionals to pack is good because the parents are probably bad parents." //reason explanation
    },

    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Study: 1 In 6 Public School Teachers Were ‘Chronically Absent’ Last Year",
      headlineId: "",
      description: "",
      voice: "This would be a major problem if our nation’s public schools didn’t have such high-quality substitute teachers.",
      annotation1: "Public School Teachers Were ‘Chronically Absent’ Last Year", // headline aspect
      annotation2: "This would be a major problem if", //joke indication it's good
      annotation3: "", //good for whom?
      annotation4: "high-quality substitute teachers", //reason phrase
      annotation5: "This joke indicates that the 'chronic absense' isn't a problem because we have great substitute. It is being sarcastic, but it's still phrased as a reason this is good (or at least not bad)." //reason explanation
    },
    
    {
      exampleTemplate: "reasonGoodScaffold",
      headline: "National Park Service Provides Deer Meat To Homeless",
      headlineId: "",
      description: "",
      voice: "So all I have to do to get fresh deer meat is pretend I’m homeless?",
      annotation1: "National Park Service Provides Deer Meat To Homeless", // headline aspect
      annotation2: "So all I have to do to", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "get fresh deer meat is pretend I’m homeless", //reason phrase
      annotation5: "This headline is good for people who want fresh deer meat, and are willing to pretend they are homeless." //reason explanation
    },
    
        {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Court: Company Lied About Health Benefits Of Finger Shoes",
      headlineId: "",
      description: "",
      voice: "You mean the ability to run better has been inside me all along?",
      annotation1: "Court: Company Lied About Health Benefits Of Finger Shoes", // headline aspect
      annotation2: "You mean the ability to run better has been inside me all along?", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "You mean the ability to run better has been inside me all along?", //reason phrase
      annotation5: "Although it's obviously bad that a company lied about it's products benefits, the silver lining is that the speaker doesn't need them to be a great runner." //reason explanation
    },

        {
      exampleTemplate: "reasonGoodScaffold",
      headline: "Court: Company Lied About Health Benefits Of Finger Shoes",
      headlineId: "",
      description: "",
      voice: "The number of babes I bagged because of finger shoes is all the cash settlement I need.",
      annotation1: "Court: Company Lied About Health Benefits Of Finger Shoes", // headline aspect
      annotation2: "all the cash settlement I need", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "The number of babes I bagged because of finger shoes", //reason phrase
      annotation5: "For this speaker, it's okay that the company lied, he still got what he wanted out of it, so it's good (or at least not bad.)" //reason explanation
    },    
  ]
}
  
dataX["reasonGoodExercise"] = {
    name: "Exercise: Brainstorming Reasons It's Good",
    descriptionTemplate: "reasonGoodExerciseInstructions",
    nextTemplate: "introduction",
    nextType: "detailsIntro",
    examples: [
      
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "",
        headlineId: "headline1",
        description: "description",
        voice: "So all I have to do to get fresh deer meat is pretend I’m homeless?",
        annotation1: "Teens",
        annotation2: "Parents of teens",
        annotation3: ""
      },
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "60 Teens Arrested In Senior Class Prank",
        headlineId: "headline2",
        description: "",
        voice: "By failing to uphold the values of Teaneck High School, the only people those teens were really pranking were themselves.",
        annotation1: "Senior Class",
        annotation2: "High School Principle, other responsible adult"
      },
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "Study: Dads Who Do Dishes Have More Ambitious Daughters",
        headlineId: "headline3",
        description: "descriptionXXXX",
        voice: "That would explain my daughter’s uncontrollable thirst for power.",
        annotation1: "Dads",
        annotation2: "Dad"
      },
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "‘Mighty Morphin Power Rangers’ Movie In The Works",
        headlineId: "headline4",
        description: "",
        voice: "So are they going to be dinosaur Zords or jungle animal Zords? Fucking tell me now!",
        annotation1: "‘Mighty Morphin Power Rangers’",
        annotation2: "obsessive fan of ‘Mighty Morphin Power Rangers’"
      },/*
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "Study: Cat People Smarter Than Dog People",
        headlineId: "headline5",
        description: "",
        voice: "What about <span class='focusPoint2'>lizard people</span>? What’s their deal?",
        annotation1: "Cat People (or Dog People)",
        annotation2: "lizard people"
      },
      {
        exampleTemplate: "reasonGoodExercise",
        headline: "Michael Jackson Hologram Performs At Billboard Music Awards",
        headlineId: "headline6",
        description: "",
        voice: "It must have been inspiring for all the other <span class='focusPoint2'>pop stars</span> in attendance to see what awaits them.",
        annotation1: "Michael Jackson",
        annotation2: "other pop stars",
      },
        
      {
        exampleTemplate: "reasonGoodExercise",
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