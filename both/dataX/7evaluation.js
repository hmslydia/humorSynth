  dataX["evaluation"] = {
    name: "Joke Evaluation",
    descriptionTemplate: "evaluation",
    nextTemplate: "writeWrapper",
    nextType: "writeWrapper",
    
    
    evaluationExamples: [
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        connections: [
          {headlineAspect: "honor veterans", jokeAspect: "graves of the fallen"},
          {headlineAspect: "ice cream", jokeAspect: "placing a few of those"},
        ],
        violation: "sarcastic",
        belief: "reason good<br>ice cream as a way to honor vets",
      },           
      {
        exampleTemplate: "aspectExample",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "It's an exciting time to be a shark, that's for sure.",
        connections: [
          {headlineAspect: "Populations Surging", jokeAspect: "It’s an exciting time"},
          {headlineAspect: "to be a shark", jokeAspect: "Shark"},
        ],
        violation: "angle",
        belief: "reason good, effect on someone else<br>good for sharks",
      },
      {
        exampleTemplate: "aspectExample",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "This sure makes Ben & Jerry’s look like a bunch of flag-burning ISIS sympathizers.",
        connections: [
          {headlineAspect: "Baskin-Robbins", jokeAspect: "Ben & Jerry’s"},
          {headlineAspect: "Honor Veterans", jokeAspect: "look like a bunch of flag-burning ISIS sympathizers"},
        ],
        violation: "angle",
        belief: "reason bad, effect on someone else<br>makes Ben and Jerry’s look unpatriotic.",
      },             
    ],
 


     evaluationExercises: [
      {
        exampleTemplate: "aspectExample",
        displayId: "evaluationExercises-1",
        headline: "Harrison Ford, Mark Hamill, Carrie Fisher Return For New ‘Star Wars’ Film",
        joke: "Harrison Ford will always be Tommy Lillard from The Frisco Kid to me.",
        connections: [
          {headlineAspect: "Harrison Ford", jokeAspect: "Harrison Ford"},
          {headlineAspect: "Tommy Lillard from The Frisco Kid", jokeAspect: "‘Star Wars’"},
        ],
        violation: "angle",
        belief: "reason bad, effect on the speaker <br>no effect. <br>the speaker prefers an obscure Harrison Ford role.",
      },           
      {
        exampleTemplate: "aspectExample",
        displayId: "evaluationExercises-2",
        headline: "Great White Shark Populations Surging Off East Coast",
        joke: "It's an exciting time to be a shark, that's for sure.",
        connections: [
          {headlineAspect: "Populations Surging", jokeAspect: "It’s an exciting time"},
          {headlineAspect: "to be a shark", jokeAspect: "Shark"},
        ],
        violation: "angle",
        belief: "reason good, effect on someone else<br>good for sharks",
      },
      {
        exampleTemplate: "aspectExample",
        displayId: "evaluationExercises-3",
        headline: "Baskin-Robbins To Honor Veterans With ‘First Class Camouflage’ Ice Cream",
        joke: "I look forward to placing a few of these on the graves of the fallen.",
        connections: [
          {headlineAspect: "Ice Cream", jokeAspect: "placing a few of these"},
          {headlineAspect: "Honor Veterans", jokeAspect: "graves of the fallen"},
        ],
        violation: "sarcasm",
        belief: "Reason good<br>Ice cream is a good way to honor veterans, just like flowers."
      },       
    ], 
   
  }