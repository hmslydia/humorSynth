dataX["reasonBadIntro"] = {
  name: "Introduction: Reason It's Bad",
  descriptionTemplate: "reasonBadDescription",
  nextTemplate: "scaffold",
  nextType: "reasonBadScaffold",
       
  examples: [
    {
      exampleTemplate: "reasonBadExample",
      headline: "Nintendo Game Boy Turns 25",
      headlineId: "37064",
      description: "",
      voice: "Let’s just call it what it really was: a Tetris delivery system.",
      voice_img: "voice1md2.jpg",
      annotation1: "Game Boy", // headline aspect
      annotation2: "Let’s just call it what it really was", //joke indication it's good
      annotation3: "?", //good for whom?
      annotation4: "a Tetris delivery system", //reason phrase
      annotation5: "This joke implies Game Boy was only good because of Tetris. Game Boy it's wasn't that great." //reason explanation
      
    },
    {
      exampleTemplate: "reasonBadExample",
      headline: "Mattel Announces Barbie Movie",
      headlineId: "asdf",
      description: "descriptionXXXX",
      voice: "They better not fuck up her backstory.",
      annotation1: "Barbie Movie", // headline aspect
      annotation2: "fuck up her backstory", //joke indication it's bad
      annotation3: "fans", //good for whom?
      annotation4: "They better not", //reason phrase
      annotation5: "This is potentially bad because there is a possibility that the film will fail to live up to this fan's expectations." //reason explanation
      
    },  
    {
      exampleTemplate: "reasonBadExample",
      headline: "Mattel Announces Barbie Movie",
      headlineId: "asdf",
      description: "",
      voice: "I doubt the film will be able to capture the excitement and fun of putting clothes on dolls.",
      annotation1: "Barbie Movie",
      annotation2: "I doubt the film will be able to",
      annotation3: "Barbie Fans",
      annotation4: "capture the excitement and fun of putting clothes on dolls",
      annotation5: "This is potentially bad because it won't be as good as the real thing. Although the 'excitement of putting clothes on dolls' is sarcastic, this joke is phrased as if it were a bad thing.",

    },      
  ]   
}
  
dataX["reasonBadScaffold"] = {
  name: "Practice: Identifying Reasons It's Good",
  descriptionTemplate: "reasonGoodScaffoldDescription",
  nextTemplate: "introduction",
  nextType: "reasonIntro",
  
  examples: [
    {
      exampleTemplate: "reasonBadScaffold",
      headline: "FDA Bans E-Cigarettes For Minors",
      headlineAnnotated: "FDA Bans E-Cigarettes For Minors",
      headlineId: "",
      description: "",
      voice: "But who else is going to be stupid enough to buy them?",
      voiceAnnotatted: "But who else is going to be stupid enough to buy them?",
      annotation1: "FDA Bans E-Cigarettes For Minors", // headline aspect
      annotation2: "But who else is going to buy them?", //joke indication it's bad
      annotation3: "E-Cigarette companies", //good for whom?
      annotation4: "But who else is going to buy them?", //reason phrase
      annotation5: "This implies nobody else will buy e-cigarettes, which is bad for the e-cigarette companies. The term 'stupid' insult the teen customers, but is not the core reason this is bad." //reason explanation
    },
    {
      exampleTemplate: "reasonBadScaffold",
      headline: "Parents Paying Professionals To Pack Kids’ Summer Camp Bags",
      headlineAnnotated: "Parents Paying Professionals To Pack Kids’ Summer Camp Bags",
      headlineId: "",
      description: "",
      voice: "But the point of summer camp is learning to discriminate based on popularity and athletic prowess, not wealth.",
      voiceAnnotated: "But the point of summer camp is learning to discriminate based on popularity and athletic prowess, not wealth.",
      annotation1: "Parents Paying Professionals To Pack Kids’ Summer Camp Bags", // headline aspect
      annotation2: "But the point of summer camp is", //joke indication it's good
      annotation3: "the kids (the campers)", //good for whom?
      annotation4: "discriminate based on popularity and athletic prowess, not wealth", //reason phrase
      annotation5: "This is bad because at camp you're not supposed to discriminate based on wealth.  <br>They throw in an insult to summer camp indictating that you are supposed to discriminated based on popularity." //reason explanation
    },
    
    {
      exampleTemplate: "reasonBadScaffold",
      headline: "Ronald McDonald Gets Millennial Makeover",
      headlineAnnotated: "Ronald McDonald Gets Millennial Makeover",
      headlineId: "",
      description: "McDonald’s officials announced this week that they are redesigning longtime mascot Ronald McDonald with a new outfit and will begin mentioning him on Twitter using the hashtag #ronaldmcdonald, though he does not yet have an account of his own. What do you think?",
      showDescription: "true",
      voice: "If he doesn’t have a Twitter account then who have I been tweeting at this whole time?",
      voiceAnnotated: "If he doesn’t have a Twitter account then who have I been tweeting at this whole time?",
      annotation1: "Ronald McDonald new Twitter hashtag #ronaldmcdonald", // headline aspect
      annotation2: "who have I been tweeting at this whole time?", //joke indication it's bad
      annotation3: "me", //bad for whom?
      annotation4: "who have I been tweeting at this whole time?", //reason phrase
      annotation5: "This is bad because it exposes the speakers mistake." //reason explanation
    },
    
    {
      exampleTemplate: "reasonBadScaffold",
      headline: "Apple Buys Beats Electronics For $3 Billion",
      headlineId: "",
      description: "Apple announced this week they will pay $3 billion to buy music brand Beats Electronics, the maker of the popular Beats by Dre premium headphones, bringing co-founders Dr. Dre and Jimmy Iovine onto their executive team.",
      showDescription: "true",
      voice: "Steve Jobs would’ve gotten all of N.W.A.",
      annotation1: "Apple Buys Beats Electronics", // headline aspect
      annotation2: "Steve Jobs would’ve gotten all of N.W.A.", //joke indication it's bad
      annotation3: "", //bad for whom?
      annotation4: "Steve Jobs would’ve gotten all of N.W.A.", //reason phrase
      annotation5: "Although Apple got Dr. Dre, Steve Jobs would have done better and gotten his whole band (N.W.A)" //reason explanation
    },

    {
      exampleTemplate: "reasonBadScaffold",
      headline: "LeVar Burton Raises $1 Million To Bring Back ‘Reading Rainbow’",
      headlineId: "",
      description: "",
      voice: "As much as I’d love to see new episodes, I feel like the show really completed its arc in 2006.",
      annotation1: "LeVar Burton Raises $1 Million To Bring Back ‘Reading Rainbow’", // headline aspect
      annotation2: "As much as I’d love to see new episodes,", //joke indication it's bad
      annotation3: "", //good for whom?
      annotation4: "I feel like the show really completed its arc in 2006.", //reason phrase
      annotation5: "This is bad because it won't be as good as it was before." //reason explanation
    },
    
    {
      exampleTemplate: "reasonBadScaffold",
      headline: "Abercrombie Stores Minimizing Music, Cologne Smell To Win Back Teens",
      headlineId: "",
      description: "",
      voice: "Big mistake. Today’s teens still like things loud and smelly.",
      annotation1: "(headline)", // headline aspect
      annotation2: "Big mistake.", //joke indication it's bad
      annotation3: "Abercrombie Stories", //bad for whom?
      annotation4: "Today’s teens still like things loud and smelly.", //reason phrase
      annotation5: "This business decision is bad." //reason explanation
    },
    
        {
      exampleTemplate: "reasonBadScaffold",
      headline: "High School Makes Girls’ Yearbook Photos Less Sexy",
      headlineId: "",
      description: "",
      voice: "That’s horrible. You should only digitally alter photos of women to make them look thinner.",
      annotation1: "Court: Company Lied About Health Benefits Of Finger Shoes", // headline aspect
      annotation2: "That’s horrible.", //joke indication it's good
      annotation3: "me", //good for whom?
      annotation4: "You should only digitally alter photos of women to make them look thinner.", //reason phrase
      annotation5: "This is bad because you shouldn't photoshop people, the additional sarcastic reasoning is that photoshop should only be used for some purposes and not others." //reason explanation
    },

        {
      exampleTemplate: "reasonBadScaffold",
      headline: "Wife Throws Raw Meat At Casey Kasem’s Daughter",
      headlineId: "",
      description: "",
      voice: "The Bible’s meat-throwing passages were never meant to be taken literally.",
      
      annotation1: "(entire headline)", // headline aspect
      annotation2: "never meant to be taken literally", //joke indication it's bad
      annotation3: "?", //good for whom?
      annotation4: "The Bible’s meat-throwing passages were never meant to be taken literally.", //reason phrase
      annotation5: "" //reason explanation
    }, 
    

        {
      exampleTemplate: "reasonBadScaffold",
      headline: "Hurricanes With Female Names Kill More People",
      headlineId: "",
      description: "According to new research, hurricanes given female names tend to be more deadly than ones with male names because people subconsciously assume the former will be less destructive and take fewer safety precautions as a result. ",
      voice: "Dammit. Aren’t any of my subconscious gender biases ever helpful?",
      
      annotation1: "people subconsioucsly assume hurricanes with female names will be less destructive", // headline aspect
      annotation2: "Dammit.", //joke indication it's bad
      annotation3: "?", //good for whom?
      annotation4: "Aren’t any of my subconscious gender biases ever helpful?", //reason phrase
      annotation5: "" //reason explanation
    }, 
    
        {
      exampleTemplate: "reasonBadScaffold",
      headline: "Taco Bell Adds ‘Quesarito’ To Official Menu",
      headlineId: "",
      description: "",
      voice: "I don’t think this could possibly compare to my homemade quesarito recipe where I take a Taco Bell beef burrito and manually insert it into a Taco Bell quesadilla.",
      
      annotation1: "(entire headline)", // headline aspect
      annotation2: "I don’t think this could possibly compare to", //joke indication it's bad
      annotation3: "(none)", //good for whom?
      annotation4: "this could possibly compare to my homemade quesarito recipe", //reason phrase
      annotation5: "" //reason explanation
    },      
      
  ]
}
/*  
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
      },  
    ]    
    
  }
  */