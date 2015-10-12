  dataX["violation"] = {
    name: "Expectation Violation Mechanisms",
    descriptionTemplate: "violation",
    nextTemplate: "introduction",
    nextType: "evaluation",
    
    
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
 
    sarcasmExercises: [

      {
        exampleTemplate: "aspectExample",
        displayId: "sarcasmExercises-1",
        headline: "McDonald’s Testing Customizable Burgers To Compete With Chipotle",
        joke: "Whatever happened to walking into a fast food restaurant, shouting a number, and eating whatever you were given?",
        expectations: [
          {expectation: "This is good"},
          {expectation: "McDonald’s has terrible food and service. They need to fix things"},
        ],
        beliefType: "This is bad",
        belief: "It’s better the way it is now"

      }, 

      {
        exampleTemplate: "aspectExample",
        displayId: "sarcasmExercises-2",
        headline: "Poll: Elite Colleges Don’t Produce Happier Graduates",
        joke: "Is there no joy in this world for the privileged?",
        expectations: [
          {expectation: "This is bad."},
          {expectation: "For whom? For Elite College graduates."},
          {expectation: "Do I really feel bad for elite college graduates?"},
          {expectation: "No, I don't have sympathy for them."},
        ],
        beliefType: "Sympathize with the elite",
        belief: "There is no joy for them."

      }, 
      {
        exampleTemplate: "aspectExample",
        displayId: "sarcasmExercises-3",
        headline: "Report: More Couples Getting Social Media Prenups",
        description: "According to a report by ABC News, more couples are opting to include social media clauses in their prenuptial agreements dictating what their spouses can and can’t post online, with some couples including fines as steep as $50,000 for posting an unflattering picture of their partner. ",
        joke: "It’s a great idea if you’re planning on marrying someone you sort of know but don’t have a good feeling about.",
        expectations: [
          {expectation: "This is weird and bad"},
          {expectation: "Why? If you don’t trust them to post pictures of you, why are you marrying them."},
          {expectation: "This is bad"},
        ],
        beliefType: "this is great",
        belief: "marrying someone you don’t trust enough to post their own photos to factbook is great!"

      },   
      /*
      {
        exampleTemplate: "aspectExample",
        displayId: "sarcasmExercises-1",
        headline: "Study: Kids Throwing Away Healthier School Lunches",
        joke: "This is especially disappointing given that all the government campaigns to get adults to eat healthier have been such a success.",
        expectations: [
          {expectation: "This is bad."},
          {expectation: "But this is not surprising"},
          {expectation: "Nobody likes healthy food"},
          {expectation: "It’s not like adults are any better."},
          {expectation: "this is not surprising"},
        ],
        beliefType: "this is surprising",
        belief: "It works great on adults!"

      }, 
      */           
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
 
    angleExercises: [

      {
        exampleTemplate: "aspectExample",
        displayId: "angleExercises-1",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "A few more years of rising ocean temperatures will take care of them.",
        expectations: [
          {expectation: "This is bad"},
          {expectation: "Sharks are a problem"},
          {expectation: "Sharks are in the ocean"},
          {expectation: "Oceans are in danger from global warming"},
        ],
        angle: "Global Warming",
        beliefType: "Solution",
        belief: "Global warming will kill the sharks."

      }, 

      {
        exampleTemplate: "aspectExample",
        displayId: "angleExercises-2",
        headline: "Teens Getting High Off Lip Balm In New ‘Beezin’ Trend",
        joke: "If they can find something fun to do with lip balm, then more power to them.",
        expectations: [
          {expectation: "Teens getting high is bad."},
          {expectation: "Drugs are dangerous"},
          {expectation: "But it’s just lip balm."},
        ],
        angle: "Lip Balm",
        beliefType: "reason good",
        belief: "Lip Balm is not dangerous"

      }, 
      {
        exampleTemplate: "aspectExample",
        headline: "George Clooney Engaged",
        displayId: "angleExercises-3",
        joke: "Good. He’s had enough.",
        expectations: [
          {expectation: "This is good for Clooney"},
          {expectation: "George Clooney is attractive."},
          {expectation: "This could be good for the speaker"},
        ],
        angle: "Clooney",
        beliefType: "personality flaw",
        belief: "jealous of Clooney; less competition from Clooney"

      },        
      /*
      {
        exampleTemplate: "aspectExample",
        displayId: "angleExercises-4",
        headline: "Harrison Ford, Mark Hamill, Carrie Fisher Return For New ‘Star Wars’ Film",
        joke: "Harrison Ford will always be Tommy Lillard from The Frisco Kid to me.",
        expectations: [
          {expectation: "This is good"},
          {expectation: "It’s exciting to see these actors reprise their best roles"},
          {expectation: "Especially Harrison Ford playing Han Solo, that’s a popular role"},
          {expectation: "Alternative thing: Han Solo -> ?"},
          
        ],
        angle: "Tommy Lillard from The Frisco Kid",
        beliefType: "not good, effect on speaker (none)",
        belief: "This is not exciting to somebody out there."

      }, 
      */
    ]  

  }