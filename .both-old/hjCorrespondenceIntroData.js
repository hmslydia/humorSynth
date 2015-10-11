dataX["headlineJokeCorrespondenceIntro"] = {
    name: "Intro: Aspects of the Headline",
    descriptionTemplate: "headlineJokeCorrespondenceIntroDescription",
    nextTemplate: "scaffold",
    nextType: "headlineJokeCorrespondenceScaffold", 
    examples: [
      {
        headline: "People Bending iPhones At Apple Stores",
        headlineChunks: [
          {chunk: "People", sentence: "<span class='focusPoint'>People</span> Bending iPhones At Apple Stores"},
          {chunk:"iPhones", sentence: "People Bending <span class='focusPoint'>iPhones</span> At Apple Stores"},
          {chunk:"Apple", sentence: "People Bending iPhones At <span class='focusPoint'>Apple</span> Stores"},
          {chunk:"Apple Stores", sentence: "People Bending iPhones At <span class='focusPoint'>Apple Stores</span>"},
          {chunk:"People at Apple Stores", sentence: "<span class='focusPoint'>People</span> Bending iPhones <span class='focusPoint'>At Apple Stores</span>"}
        ],
        jokeChunkCorrespondence: [
          {
            exampleTemplate: "hjCorrespondenceExample",
            headline: "People Bending iPhones At Apple Stores",
            joke: "I can’t believe <span class='focusPoint2'>people</span> would just walk into an <span class='focusPoint2'>Apple store</span> and start <span class='focusPoint2'>breaking things</span> like it’s a <span class='focusPoint2'>Best Buy</span>.",
            voice_img: "voice1.jpg",            
            annotations:[
              {
                headlineChunk: "People",
                headlineAnnotated: "<span class='focusPoint'>People</span> Bending iPhones At Apple Stores",
                jokeChunk: "People",
                jokeAnnotated: "I can’t believe <span class='focusPoint2'>people</span> would just...",
                comment: "" 
              },
      
              {
                headlineChunk: "Apple Store",
                headlineAnnotated: "People Bending iPhones At <span class='focusPoint'>Apple Stores</span>",
                jokeChunk: "Apple Store",
                jokeAnnotated: "...walk into an <span class='focusPoint2'>Apple store</span>... ",
                comment: ""           
              } 
              ,
              {
                headlineChunk: "bending iPhones",
                headlineAnnotated: "People <span class='focusPoint'>Bending iPhones</span> At Apple Stores",
                jokeAnnotated: "... and start <span class='focusPoint2'>breaking things</span>...",
                jokeChunk: "breaking things",
                comment: "<ul><li><span class='focusPoint2'>breaking things</span> is an extreme generalization of <span class='focusPoint'>bending iPhones</span> </li></ul>"           
              } ,        
              {
                headlineChunk: "Apple Store",
                headlineAnnotated: "People Bending iPhones At <span class='focusPoint'>Apple Stores</span>",
                jokeChunk: "Best Buy",
                jokeAnnotated: "...like it’s a <span class='focusPoint2'>Best Buy</span>.",
                comment: "<ul><li><span class='focusPoint2'>Best Buy</span> is the same category as <span class='focusPoint'>Apple Store</span>, but not as up-scale.</li></ul>"           
              }       
            ]
          },
          
          {
            exampleTemplate: "hjCorrespondenceExample",
            headline: "People Bending iPhones At Apple Stores",
            joke: "If <span class='focusPoint2'>Apple</span> didn’t want <span class='focusPoint2'>people</span> to <span class='focusPoint2'>abuse its products in idiotic ways</span>, it shouldn’t have placed them where the <span class='focusPoint2'>American consumer</span> could reach them.",
            voice_img: "voice1.jpg",
            annotations:[
              {
                headlineChunk: "Apple",
                headlineAnnotated: "People Bending iPhones At <span class='focusPoint'>Apple</span> Stores",
                jokeChunk: "Apple",
                jokeAnnotated: "If <span class='focusPoint2'>Apple</span>...",
                comment: "" 
              },
      
              {
                headlineChunk: "People",
                headlineAnnotated: "<span class='focusPoint'>People</span> Bending iPhones At Apple Stores",
                jokeChunk: "people",
                jokeAnnotated: "...didn’t want <span class='focusPoint2'>people</span>... ",
                comment: ""           
              } 
              ,
              {
                headlineChunk: "bending iPhones",
                headlineAnnotated: "People <span class='focusPoint'>Bending iPhones</span> At Apple Stores",
                jokeAnnotated: "...to <span class='focusPoint2'>abuse its products in idiotic ways</span>,...",
                jokeChunk: "abuse its products in idiotic ways",
                comment: "<ul><li>this is a judgmental and negative re-statement of <span class='focusPoint'>bending iPhones</span></li></ul>"           
              } ,        
              {
                headlineChunk: "Stores",
                headlineAnnotated: "People Bending iPhones At Apple <span class='focusPoint'>Stores</span>",
                jokeChunk: "consumer",
                jokeAnnotated: "...it shouldn’t have placed them where the American <span class='focusPoint2'>consumer</span> could reach them.",
                comment: "<ul><li>This relationship is harder to see. 'Consumer' is the reverse of a retailer, which is what a store is. This joke transfers the blame from the customer/consumer to the retailer/store.</li></ul>"           
              }       
            ]
            
          }

        ] 
      }
    ]
  }
/* //////////////////////////////////
  
  
  SCAFFOLD
  
  
  //////////////////////////////////
  */  

dataX["headlineJokeCorrespondenceScaffold"] = {
    name: "Practice: Isolating Aspects of the Headline",
    descriptionTemplate: "hjCorrespondenceScaffoldDescription",
    nextTemplate: "introduction",
    nextType: "alternativeChunkIntro",
    examples: [
      { 
        headline: "Justin Bieber Baptized In NYC Bathtub",
        headlineId: "asdf",
        description: "Pop star Justin Bieber was baptized in a friend’s bathtub this weekend after weeks of Bible study and church services, with celebrity blogs reporting that the 20-year-old sought spiritual guidance in an attempt to wash away his sins following a scandal in which videos emerged of him using racial slurs. What do you think?",
        
        headlineChunks:[
            {chunk: "Justin Bieber", sentence: "<span class='focusPoint'>Justin Bieber</span> Baptized In NYC Bathtub"},
            {chunk: "Baptized", sentence: "Justin Bieber <span class='focusPoint'>Baptized</span> In NYC Bathtub"},
            {chunk: "NYC", sentence: "Justin Bieber Baptized In <span class='focusPoint'>NYC</span> Bathtub"},
            {chunk: "Bathtub", sentence: "Justin Bieber Baptized In NYC <span class='focusPoint'>Bathtub</span>"},          
        ],
        /*
        jokeChunkCorrespondence: [
          {
            exampleTemplate: "hjCorrespondenceExample",
            joke: "Oh my God! Can <span class='focusPoint2'>I</span> lick the <span class='focusPoint2'>tub</span>?",
            voice_img: "voice1.jpg",
            annotations: [
              { headlineChunk: "Justin Beiber", 
                jokeChunk: "I", 
                jokeAnnotated: "Oh my God! Can <span class='focusPoint2'>I</span>... ",
                comment: "The speaker is a fan of Justin Beiber"
                },
              {
                headlineChunk: "Bathtub",
                jokeChunk: "tub", 
                jokeAnnotated: "...lick the <span class='focusPoint2'>tub</span>? ",
                comment: "Justin Bieber Baptized In NYC <span class='focusPoint'>Bathtub</span>"},
              
            ]
          },
          {
            exampleTemplate: "hjCorrespondenceExample",
            joke: "Great, now my <span class='focusPoint2'>teenage daughter’s</span> going to be begging me for $300 so she can <span class='focusPoint2'>reaffirm her devotion to God</span>, too.",
            voice_img: "voice1.jpg",
            annotations: [
              {headlineChunk: "Justin Beiber",
                jokeChunk: "teenage daughter", 
                jokeAnnotated: "Great, now my <span class='focusPoint2'>teenage daughter’s</span>... ",
                comment: "The speaker's daughter is a fan of Justin Beiber"},
              {
                headlineChunk: "Baptized", 
                jokeChunk: "reaffirm her devotion to God", 
                jokeAnnotated: "...going to be begging me for $300 so she can <span class='focusPoint2'>reaffirm her devotion to God</span>, too.",
                comment: "'Reaffirming devotion is a generalization of 'Baptism.'"
                },              
            ]
          },
          {
            exampleTemplate: "hjCorrespondenceExample",
            joke: "Never let it be said that <span class='focusPoint2'>Bieber’s PR people</span> aren’t bringing <span class='focusPoint2'>new ideas</span> to the table.",
            voice_img: "voice1.jpg",
            annotations: [
              {
                headlineChunk: "Justin Beiber",
                jokeChunk: "Bieber’s PR people", 
                jokeAnnotated: "Never let it be said that <span class='focusPoint2'>Bieber’s PR people</span>... ",
                comment: "The speaker is a fan of Justin Beiber"},
              {
                headlineChunk: "Baptized in NYC Bathtub",
                jokeChunk: "new ideas", 
                jokeAnnotated: "...aren’t bringing <span class='focusPoint2'>new ideas</span> to the table.",
                comment: "His 'Baptism' is just a PR idea, and not genuine."
              },
              
            ]
          }       
        
        ]
        */
      },
      { 
        headline: "UConn Holding ‘Football 101’ Clinic For Female Fans",
        headlineId: "asdf2",
        description: "",
        
        headlineChunks:[
            {chunk: "UConn", sentence: "<span class='focusPoint'>UConn</span> Holding ‘Football 101’ Clinic For Female Fans"},
            {chunk: "Football", sentence: "UConn Holding ‘<span class='focusPoint'>Football</span> 101’ Clinic For Female Fans"},
            {chunk: "Football 101", sentence: "UConn Holding ‘<span class='focusPoint'>Football 101</span>’ Clinic For Female Fans"},
            {chunk: "Clinic", sentence: "UConn Holding ‘Football 101’ <span class='focusPoint'>Clinic</span> For Female Fans"},
            {chunk: "Female Fans", sentence: "UConn Holding ‘Football 101’ Clinic For <span class='focusPoint'>Female Fans</span>"},
            {chunk: "Fans", sentence: "UConn Holding ‘Football 101’ Clinic For Female <span class='focusPoint'>Fans</span>"},          
        ],
       }     
    ]
  }