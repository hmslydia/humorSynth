dataX["alternativeChunkIntro"] = {
    name: "Introduction: Related Nouns",
    descriptionTemplate: "alternateChunksDescription",
    nextTemplate: "scaffold",
    nextType: "alternativeChunkScaffold",
          
    examples: [
      {
        exampleTemplate: "alternativeChunkExample",
        headline: "People Bending iPhones At <span class='focusPoint'>Apple Stores</span>",
        headlineId: "37064",
        description: "Videos are surfacing online of people going into <span class='focusPoint'>Apple stores</span> and trying to bend the new iPhone 6 Plus to prove that it’s possible, drawing criticism from internet commenters accusing them of being idiots. What do you think?",
        voice: "I can’t believe people would just walk into an <span class=''>Apple store</span> and start breaking things like it’s a <span class='focusPoint2'>Best Buy</span>.",
        voice_img: "voice1md2.jpg",
        annotation1: "Apple Stores",
        annotation2: "Best Buy",
        annotation3: "Apple Stores and Best Buy stores are both electronics retailers. They are competitors, sorta."
      },
      {
        exampleTemplate: "alternativeChunkExample",
        headline: "<span class='focusPoint'>UConn</span> Holding ‘Football 101’ Clinic For Female Fans",
        headlineId: "asdf",
        description: "descriptionXXXX",
        voice: "Sure, I guess UConn’s course is fine if you couldn’t get into <span class='focusPoint2'>Yale’s</span> football clinic.",
        annotation1: "UConn",
        annotation2: "Yale",
        annotation3: "UConn and Yale are rival universities. They are both in Connecticut, which may or may not be important."
      },  
      {
        exampleTemplate: "alternativeChunkExample",
        headline: "Study: Dads Who Do Dishes Have More Ambitious <span class='focusPoint'>Daughters</span>",
        headlineId: "asdf",
        description: "descriptionXXXX",
        voice: "Meanwhile, our nation’s <span class='focusPoint2'>sons</span> still have no options at all.",
        annotation1: "Daughter",
        annotation2: "son",
        annotation3: "Daughter and son are two kinds of children."
      },      
    ]    
  }
  
dataX["alternativeChunkScaffold"] = {
    name: "Practice: Identifying Headline Aspects and Related Nouns",
    descriptionTemplate: "alternateChunksScaffoldDescription",
    nextTemplate: "exercise",
    nextType: "alternativeChunkExercise",
    examples: [
      {
        exampleTemplate: "alternativeChunkScaffold",
        headline: "Teens Getting High Off Lip Balm In New ‘Beezin’ Trend",
        headlineId: "",
        description: "",
        voice: "They wouldn’t have to resort to lip balm if Visine made an eye drop with some balls.",
        annotation1: "Lip Balm",
        annotation2: "Visine, eye drop"
      },
      {
        exampleTemplate: "alternativeChunkScaffold",
        headline: "Mick Jagger Blamed For Brazil’s Historic World Cup Defeat",
        headlineId: "",
        description: "",
        voice: "We can play the blame game all day, but ultimately it’s no one’s fault except Charlie Watts’.",
        annotation1: "Mick Jagger",
        annotation2: "Charlie Watts"
      },
      
      {
        exampleTemplate: "alternativeChunkScaffold",
        headline: "Leonardo DiCaprio Auctions Off Trip To Space With Him",
        headlineId: "",
        description: "",
        voice: "I’m a little short on cash. How much to go with Casey Affleck?",
        annotation1: "Leonardo DiCaprio",
        annotation2: "Casey Affleck"
      },
      {
        exampleTemplate: "alternativeChunkScaffold",
        headline: "Leonardo DiCaprio Auctions Off Trip To Space With Him",
        headlineId: "",
        description: "",
        voice: "But 2015 is when I’m going to the center of the earth with Robert Redford.",
        annotation1: "Leonardo DiCaprio",
        annotation2: "Robert Redford"
      },
    
    ]
  }
  
dataX["alternativeChunkExercise"] = {
    name: "Exercise: Writing Related Nouns ",
    descriptionTemplate: "alternativeChunkExerciseInstructions",
        nextTemplate: "introduction",
    nextType: "povIntro",
    examples: [
      
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        headlineId: "headline1",
        description: "description",
        voice: "This sure makes <span class='focusPoint2'>Ben & Jerry’s</span> look like a bunch of flag-burning ISIS sympathizers.",
        annotation1: "Baskin-Robbins",
        annotation2: "Ben & Jerry’s",
        annotation3: "Baskin-Robbins and Ben & Jerry's both ice cream vendors."
      },
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Live-Action ‘Beauty And The Beast’ In The Works",
        headlineId: "headline2",
        description: "",
        voice: "A live-action <span class='focusPoint2'>Lion King</span> might be cool if the cast didn’t eat one another.",
        annotation1: "Beauty And The Beast",
        annotation2: "Lion King"
      },
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "First Transgender Person Nominated For Emmy",
        headlineId: "headline3",
        description: "descriptionXXXX",
        voice: "This sure makes the <span class='focusPoint2'>Golden Globes</span> look like a bunch of transphobic bigots.",
        annotation1: "Emmy",
        annotation2: "Golden Globes"
      },
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "KFC Selling Chicken Prom Corsages",
        headlineId: "headline4",
        description: "",
        voice: "My daughter’s dress would look better with something from <span class='focusPoint2'>Burger King</span>.",
        annotation1: "KFC",
        annotation2: "Burger King"
      },
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Study: Cat People Smarter Than Dog People",
        headlineId: "headline5",
        description: "",
        voice: "What about <span class='focusPoint2'>lizard people</span>? What’s their deal?",
        annotation1: "Cat People (or Dog People)",
        annotation2: "lizard people"
      },
      /*
      {
        exampleTemplate: "alternativeChunkExercise",
        headline: "Michael Jackson Hologram Performs At Billboard Music Awards",
        headlineId: "headline6",
        description: "",
        voice: "It must have been inspiring for all the other <span class='focusPoint2'>pop stars</span> in attendance to see what awaits them.",
        annotation1: "Michael Jackson",
        annotation2: "other pop stars",
      },
      */
      /*  
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