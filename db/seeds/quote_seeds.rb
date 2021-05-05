# CLEAN DATABASE
puts "Cleaning Quote Database Table..."
Quote.destroy_all

# PARTICIPANT SEEDS
puts 'Creating Quote Seeds...'

puts 'Creating Quotes for Andrea Ngan...'
Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "There's incredible power in design processes that build collective agency. It’s important to know how to invite folks to the table, share decision-making power, and set it up so people can successfully work together.",
  categories: ["power"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "If you're not organizing and designing with a community or peers with the courage and bravery to name and examine inequitable norms and behaviors within your practice, it’ll be hard to ever be accountable for the bias and tendencies that are inherent in all of us.",
  categories: ["power", "future_implications"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "I gravitated towards design because it is this process that allows you to clarify your past and present to inform a future vision. There’s a hopefulness to the process that gives me purpose and direction.",
  categories: ["increasing_access", "change_making"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "There's so much to be said about being told at a young age that your ideas matter and that we want to invest in them,build them, and see them in the world.",
  categories: ["increasing_access"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "...that's a really big strength of design and designers, to take the messiness of all the things happening in everyone's brain and organize it into some semblance of understanding, be it in the form of a series of sticky notes, vision boards, or documents. There’s something magical about sensemaking, revealing hidden patterns, and new possibilities",
  categories: ["responsibility"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "How do we make sure that this isn't extractive and that we can be really accountable to the folks that have given part of themselves in the design process by sharing their stories with us?",
  categories: ["responsibility"],
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "These community relationships that you're building, you have to make sure that folks know that it's about the relationships at the core, not simply about the projects and the things that you're trying to do. I acknowledge that collaborators and co-designers are often arriving with different lived experiences. How do we prioritize accepting people as their whole self?",
  categories: ["community_empowerment"],
})

puts 'Creating Quotes for Anjanette Davenport Hatter...'
Quote.create!({
  participant_id: 2,
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  quote_body: "I can’t tell you what you need. I can’t tell a community, I can have an idea on what it is, but when you have the voice, and you go through those steps of the framework, it becomes bigger than you.",
  categories: ["community_building", "space_making", "community_empowerment"],
  
})

Quote.create!({
  participant_id: 2,
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  quote_body: "I think that having a community involved as part of the process shows that they’re valued and they’re respected –that I value and respect you, and I think that goes back to the whole equity lens, because every person is not gonna come into a community and feel that same way, so it’s very much a process of “we’re in this together.",
  categories: ["community_building", "community_empowerment"],
})

Quote.create!({
  participant_id: 2,
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  quote_body: "In order to be in a position of advocacy, you have to also be able to be in a position to organize, to galvanize, to get the support, and get the ears of the community.",
  categories: ["space_making", "increasing_access"],
})

Quote.create!({
  participant_id: 2,
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  quote_body: "Helping us understand and reinforce the value that we had and the impact we had on the communities. And that we had the power to be seen, to be heard, and to help uplift and save our own community.",
  categories: ["increasing_access"],
})
# *****************************************************************************************last one^ look at name
# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "We think about trust when we do relationship building, and so first of all it's meeting people where they are and listening before we talk.",
#   category: "trust",
#   category_int: 1,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "Cause if we don't examine and question and call out and intervene in systems of oppression we're not gonna be doing anything new, we're just gonna be perpetuating the same old stuff, even if we have a shiny new gadget to attach to it.",
#   category: "power",
#   category_int: 2,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...it's glaringly obvious that there's a top-down paradigm that people with good intentions are trying to follow, that's very technocratic and very focused on a narrow set of expertise, that's credentialed by a narrow set of privileged institutions that does not recognize the expertise that is lived experience and all sorts of other things.",
#   category: "power",
#   category_int: 2,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...there are certain types of expertise in design work that are afforded resources and credibility and decision-making power that other people don't get.",
#   category: "power",
#   category_int: 2,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...the whole community is invisible to you, because you don't see these people as experts.",
#   category: "space_making",
#   category_int: 3,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...it's glaringly obvious that there's a top-down paradigm that people with good intentions are trying to follow, that's very technocratic and very focused on a narrow set of expertise, that's credentialed by a narrow set of privileged institutions that does not recognize the expertise that is lived experience and all sorts of other things.",
#   category: "increasing_access",
#   category_int: 4,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...the whole community is invisible to you, because you don't see these people as experts.",
#   category: "increasing_access",
#   category_int: 4,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "Cause if we don't examine and question and call out and intervene in systems of oppression we're not gonna be doing anything new, we're just gonna be perpetuating the same old stuff, even if we have a shiny new gadget to attach to it.",
#   category: "responsibility",
#   category_int: 6,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "Cause if we don't examine and question and call out and intervene in systems of oppression we're not gonna be doing anything new, we're just gonna be perpetuating the same old stuff, even if we have a shiny new gadget to attach to it.",
#   category: "change_making",
#   category_int: 8,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...there are certain types of expertise in design work that are afforded resources and credibility and decision-making power that other people don't get.",
#   category: "future_implications",
#   category_int: 11,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...if you're living in systems that are designed to harm you, exploit you, and not serve you, you're innovating all the time just to make your way through the world.",
#   category: "adaptation",
#   category_int: 12,
# })

# Quote.create!({
#   participant_id: 3,
#   first_name: "Brooke",
#   last_name: "Staton",
#   quote_body: "...if you're living in systems that are designed to harm you, exploit you, and not serve you, you're innovating all the time just to make your way through the world.",
#   category: "design",
#   category_int: 13,
# })

puts 'Creating Quotes for Bryan Lee Jr...'

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "...when you believe that design is about how the future can be shaped, should it be shaped by those with power or should it be shaped by those in community?",
  categories: ["power"],
})

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "Our job is to challenge those [oppressive] systems and to think about the ways in which design solutions can be activated at many different spaces along the design continuum.",
  categories: ["power", "responsibility", "change_making"],
})

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "And if we can understand the way that people are already using spaces that were not built for them, that were actively built to deny them their rights, to deny them justice in some capacity, then we can start to redirect our design initiatives to support the ways in which that language actually manifests.",
  categories: ["space_making"],
})

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "And I think that's what design offers us over and over and over again, the opportunities to see beyond the limitations of our current moment and escape into the potential of the next moment.",
  categories: ["increasing_access", "responsibility", "change_making"],
})

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "To protest is to have an unyielding faith in the power of a just society.’ It's about collective hope, by its very nature. And to design is fundamentally rooted in that same instinct. It's about faith in a better tomorrow by way of manifesting what you believe that tomorrow should be.",
  categories: ["change_making", "future_implications", "design"],
})

Quote.create!({
  participant_id: 3,
  first_name: "Bryan",
  last_name: "Lee Jr",
  quote_body: "...in a building, we're making 75 to 100-year decisions within, you know, five to eight weeks. That's wild. I mean, would you make decisions for your great grandchildren in eight weeks and just be done with it for the next seventy years?",
  categories: ["community_empowerment", "future_implications"],
})

puts 'Creating Quotes for Cedric Douglas...'
Quote.create!({
  participant_id: 4,
  first_name: "Cedric",
  last_name: "Douglas",
  quote_body: "And it's really how you talk to people, and how you connect with them and that's where everyone wants to connect. Everybody wants to be loved, everybody wants that and yearns for that and they wanna connect, we're social beings.",
  categories: ["community_building", "space_making", "community_empowerment"],
})

Quote.create!({
  participant_id: 4,
  first_name: "Cedric",
  last_name: "Douglas",
  quote_body: "And I just said, \"Let me just try to beautify this space that no one really cares about.\" So, it really made me look at that public space in a way that... In a completely different way. So I saw that there was some power in that.",
  categories: ["power"],
})

Quote.create!({
  participant_id: 4,
  first_name: "Cedric",
  last_name: "Douglas",
  quote_body: "My design is more about reaching people's hearts or their gut, having the gut reaction, to kinda think about a situation.",
  categories: ["design"],
})

Quote.create!({
  participant_id: 4,
  first_name: "Cedric",
  last_name: "Douglas",
  quote_body: "...design is... It's really about problem solving, and it's about connecting to an audience. It really is about problem solving. And the aesthetic is important, but I think solving the problem, I think, is more important.",
  categories: ["design"],
})

puts 'Creating Quotes for Chris Rudd...'
Quote.create!({
  participant_id: 5,
  first_name: "Chris",
  last_name: "Rudd",
  quote_body: "I define [design] as a way for rich people to exploit the emotions, desires, pains, of poor people, to make more money. I think most of the methods and frameworks that exist in the space are created with the end goal of advancing business, of advancing corporations.",
  categories: ["power"],
})

Quote.create!({
  participant_id: 5,
  first_name: "Chris",
  last_name: "Rudd",
  quote_body: "I think design can be positioned to solve some of the activities that it created that exacerbated inequity. Can it solve inequity? No. I think inequity is built into the DNA of the system in which we live under, and until that changes, inequity will not change.",
  categories: ["power"],
})

Quote.create!({
  participant_id: 5,
  first_name: "Chris",
  last_name: "Rudd",
  quote_body: "But instead of just bringing them in at certain points of the design process as “co-creators”, how do we just have them-How are we training them to understand design mindsets and capabilities so that they can do it themselves?",
  categories: ["increasing_access", "change_making"],
})

Quote.create!({
  participant_id: 5,
  first_name: "Chris",
  last_name: "Rudd",
  quote_body: "So, we have to get out of our palaces, and go to where people are.",
  categories: ["community_empowerment", "future_implications"],
})

Quote.create!({
  participant_id: 5,
  first_name: "Chris",
  last_name: "Rudd",
  quote_body: "Design gives us permission to take our time to solve a problem, and I think that’s what’s valuable.",
  categories: ["design"],
})

puts 'Creating Quotes for Claudia Paraschiv...'
Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "Go to where the people are, go in their place during their time.",
  categories: ["community_building","increasing_access"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "I really fell in love with how design and it’s projects can be a vehicle for bringing people together, working together on a shared goal.",
  categories: ["community_building", "mutual_learning", "change_making"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "...just to create situations where people connect to each other in ways that maybe they wouldn't have otherwise.",
  categories: ["community_building"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "The main purpose of social design is to very tangibly demonstrate to people that they themselves can change things in a really big way.",
  categories: ["power", "change_making"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "You have to lean into the discomfort, the perceived discomfort. The other thing I would say is people want to be heard, and they want to be seen.",
  categories: ["space_making"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "A routine or a ritual, it's important because I think if you have more resources or capital, you could create something permanent, but when you don't, by creating the ritual of something happening every week, it creates a sense of permanence. If something's just a one-off event, again, it's not a system. It's not something you can maybe count on.",
  categories: ["change_making"],
})

Quote.create!({
  participant_id: 6,
  first_name: "Claudia",
  last_name: "Paraschiv",
  quote_body: "...elevating some of this scrappy creativity that you need to use sometimes, because I think that a lot of times people don't realize how special that is especially in communities where there isn't that much wealth.",
  categories: ["community_empowerment"],
})