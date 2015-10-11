  dataX["belief"] = {
    name: "Beliefs behind Sentiments",
    descriptionTemplate: "belief",
    nextType: "violation",
    
    
    reasonGoodExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        headlineSentiment: "weird",
        jokeSentiment: "good",
        jokeSnippet: "I look forward to...",
        beliefType: "reason good (sarcastic)",
        belief: "it will honor veterans",
      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Nintendo Game Boy Turns 25",
        joke: "That was the golden age of gaming for me because two buttons is all I can cognitively handle.",
        headlineSentiment: "good",
        jokeSentiment: "good",
        jokeSnippet: "That was the golden age...",
        beliefType: "reason good",
        belief: "Game Boy is simple<br>(it also insults the speaker as cognitively impaired)",
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
    
    reasonGoodExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "reasonGoodExercises-1",
        headline: "Teens Getting High Off Lip Balm In New ‘Beezin’ Trend",
        joke: "If they can find something fun to do with lip balm, then more power to them.",
        headlineSentiment: "weird, bad",
        jokeSentiment: "good",
        jokeSnippet: "...more power to them...",
        beliefType: "reason good",
        belief: "lip balm is safe, not a dangerous drug.<br>praise the kids for having good safe fun.",

      }       
    ],
 
 
 
    reasonBadExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        joke: "This is especially disappointing given that all the government campaigns to get adults to eat healthier have been such a success.",
        headlineSentiment: "bad",
        jokeSentiment: "bad",
        jokeSnippet: "This is especially disappointing given...",
        beliefType: "reason bad: (sarcastic)",
        belief: "because I expected it to succeed based on other information (sarcastically)",
      },              
    ],
    
    reasonBadExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "reasonBadExercises-1",
        headline: "McDonald’s Testing Customizable Burgers To Compete With Chipotle",
        joke: "Whatever happened to walking into a fast food restaurant, shouting a number, and eating whatever you were given?",
        headlineSentiment: "good?",
        jokeSentiment: "bad",
        jokeSnippet: "Whatever happened to...",
        beliefType: "reason bad (sarcastic)",
        belief: "the speaker enjoys the bad food and service as it is.",

      }       
    ], 
    
    
    
    effectOtherExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "It's an exciting time to be a shark, that's for sure.",
        headlineSentiment: "bad",
        jokeSentiment: "good",
        jokeSnippet: "It's an exciting time...",
        beliefType: "reason good<br>effect on somebody else",
        belief: "it’s good for sharks.",
      },              
    ],
    
    effectOtherExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "effectOtherExercises-1",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "This sure makes Ben & Jerry’s look like a bunch of flag-burning ISIS sympathizers.",
        headlineSentiment: "weird",
        jokeSentiment: "bad",
        jokeSnippet: "...flag-burning ISIS sympathizers.",
        beliefType: "reason bad<br>effect on somebody else",
        belief: "makes Ben & Jerry’s look unpatriotic",

      },
      {
        exampleTemplate: "aspectExample",
        displayId: "effectOtherExercises-2",
        headline: "Michael Jackson Hologram Performs At Billboard Music Awards",
        joke: "It must have been inspiring for all the other pop stars in attendance to see what awaits them.",
        headlineSentiment: "weird",
        jokeSentiment: "good",
        jokeSnippet: "It must have been inspiring...",
        beliefType: "reason good<br>effect on others",
        belief: "It will inspiring other pop stars (sarcastic?)",

      }        
    ], 
    
    
    
    
    
    
    
    effectSpeakerExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "George Clooney Engaged",
        joke: "Good. He’s had enough.",
        headlineSentiment: "good",
        jokeSentiment: "good",
        jokeSnippet: "Good.",
        beliefType: "Reason good<br>effect on the speaker",
        belief: "less romantic competition from Clooney",
      },              
    ],
    
    effectSpeakerExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "effectSpeakerExercises-1",
        headline: "U.S. Women’s Soccer Team Draws ‘Group Of Death’ For World Cup",
        joke: "Hey, I thought the deal was no one was supposed to bug me about soccer for another four years.",
        headlineSentiment: "bad",
        jokeSentiment: "bad",
        jokeSnippet: "...bug me...",
        beliefType: "reason bad<br>effect on the speaker",
        belief: "soccer is annoying",

      },
      {
        exampleTemplate: "aspectExample",
        displayId: "effectSpeakerExercises-2",
        headline: "Harrison Ford, Mark Hamill, Carrie Fisher Return For New ‘Star Wars’ Film",
        joke: "Harrison Ford will always be Tommy Lillard from The Frisco Kid to me.",
        headlineSentiment: "good, exciting",
        jokeSentiment: "not good, no effect",
        jokeSnippet: "...will always be...",
        beliefType: "effect on the speaker",
        belief: "(none)",

      }        
    ], 
    
    
    
    
    
    
    solutionExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "George Clooney Engaged",
        joke: "Good. He’s had enough.",
        headlineSentiment: "good",
        jokeSentiment: "good",
        jokeSnippet: "Good.",
        beliefType: "Reason good<br>effect on the speaker",
        belief: "less romantic competition from Clooney",
      },              
    ],
    
    solutionExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "solutionExercises-1",
        headline: "Petco To Stop Selling Dog, Cat Treats Made In China",
        joke: "Thankfully I've been importing Chinese ducks for months for just such an emergency.",
        headlineSentiment: "bad",
        jokeSentiment: "solution",
        jokeSnippet: "Thankfully I’ve been...",
        beliefType: "solution",
        belief: "import Chinese ducks<br>(for some alternative person who wants poison dog food)",

      },
      {
        exampleTemplate: "aspectExample",
        displayId: "solutionExercises-2",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "A few more years of rising ocean temperatures will take care of them.",
        headlineSentiment: "bad",
        jokeSentiment: "solution",
        jokeSnippet: "...will take care of them.",
        beliefType: "solution",
        belief: "global warming will kill the sharks before they eat us.",

      },
      {
        exampleTemplate: "aspectExample",
        displayId: "solutionExercises-3",
        headline: "Report: 'SkyMall' Magazine May End Print Edition",
        joke: "Alright, how many ‘Summer Savannah’ Backyard Garden Lion Pedestals do I have to order to turn this thing around?",
        headlineSentiment: "bad",
        jokeSentiment: "solution",
        jokeSnippet: "Alright, how... do I turn this around?",
        beliefType: "solution<br>(for someone who loves SkyMall)",
        belief: "buy more crap",

      }          
    ], 
    
    
    
    
    
    
    blameExamples: [
      {
        exampleTemplate: "aspectExample",
        displayId: "blameExamples-1",
        headline: "People Bending iPhones At Apple Stores",
        joke: "If Apple didn’t want people to abuse its products in idiotic ways, it shouldn’t have placed them where the American consumer could reach them.",
        headlineSentiment: "bad (blame customers)",
        jokeSentiment: "bad, blame",
        jokeSnippet: "If they didn’t want... they shouldn’t have...",
        beliefType: "blame",
        belief: "Apple Stores<br>for letting customers touch the phones<br>(also insult American consumers for having the level of self control of children)",
      },              
    ],
    
    blameExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "blameExercises-1",
        headline: "Teens Getting High Off Lip Balm In New ‘Beezin’ Trend",
        joke: "They wouldn’t have to resort to lip balm if Visine made an eye drop with some balls.",
        headlineSentiment: "bad",
        jokeSentiment: "bad, blame",
        jokeSnippet: "They wouldn’t have to resort to... if...",
        beliefType: "blame",
        belief: "Visine<br>for not being strong enough of a drug",

      },
      {
        exampleTemplate: "aspectExample",
        displayId: "blameExercises-2",
        headline: "Home Trampolines Responsible For 1 Million ER Visits",
        joke: "I don’t blame the trampoline. My 8-year-old went into this with his eyes open.",
        headlineSentiment: "bad",
        jokeSentiment: "bad, blame",
        jokeSnippet: "I don’t blame the trampoline...",
        beliefType: "blame",
        belief: "the kid (sarcastically)<br>he knew the risks of using the trampoline",

      },        
    ],                


    
    
    
    
    
    failExamples: [
      {
        exampleTemplate: "aspectExample",
        displayId: "failExamples-1",
        headline: "LeVar Burton Raises $1 Million To Bring Back ‘Reading Rainbow’",
        joke: "As much as I’d love to see new episodes, I feel like the show really completed its arc in 2006.",
        headlineSentiment: "good",
        jokeSentiment: "fail",
        jokeSnippet: "As much as I’d love... I feel like...",
        beliefType: "reason fail",
        belief: "the show completed its arc",
      },              
    ],
    
    failExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "failExercises-1",
        headline: "Taco Bell Adds ‘Quesarito’ To Official Menu",
        joke: "Yeah, but how’s the item going to do in markets not filled with a bunch of food snobs?",
        headlineSentiment: "good? weird?",
        jokeSentiment: "fail",
        jokeSnippet: "Yeah, but how’s it going to do...",
        beliefType: "reason fail<br>(sarcastic)",
        belief: "food snobs won’t like it",

      },      
    ],   

    
    
    
    
    
    sympathizeExamples: [
      {
        exampleTemplate: "aspectExample",
        displayId: "sympathizeExamples-1",
        headline: "Google Glass Users Facing Verbal, Physical Attacks",
        joke: "I hope the attackers were careful to punch around the eyewear.",
        headlineSentiment: "bad",
        jokeSentiment: "sympathize",
        jokeSnippet: "As much as I’d love... I feel like...",
        beliefType: "sympathize with<br>reason",
        belief: "google glass wearers<br>hopes the attacks don’t hurt their eyewear",
      },              
    ],
    
    sympathizeExercises:[
      {
        exampleTemplate: "aspectExample",
        displayId: "sympathizeExercises-1",
        headline: "Poll: Elite Colleges Don’t Produce Happier Graduates",
        joke: "Is there no joy in this world for the privileged?",
        headlineSentiment: "bad",
        jokeSentiment: "sympathize",
        jokeSnippet: "Is there no joy...",
        beliefType: "sympathize with<br>reason",
        belief: "elite college grads (the privileged)<br>they can’t find happiness",

      },      
    ], 

  }