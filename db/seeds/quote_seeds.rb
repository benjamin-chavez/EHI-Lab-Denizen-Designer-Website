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

puts 'Creating Quotes for Claudia Paraschiv...'
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

puts 'Creating Quotes for Denise Shanté Brown...'
Quote.create!({
  participant_id: 7,
  first_name: "Denise",
  last_name: "Shanté Brown",
  quote_body: "I think the value is knowing we’re creating spaces where Black womxn’s dreams for health and healing are affirmed. Their creativity has a place to be expressed in ways that it hasn’t before, especially for those who don’t identify as designers. Together, we’re exploring the spectrum of what design is and can be when Black womxn are the ones reimagining the design process to bring more flourishing futures into existence.",
  categories: ["space_making", "increasing_access"],
})

Quote.create!({
  participant_id: 7,
  first_name: "Denise",
  last_name: "Shanté Brown",
  quote_body: "I am not a therapist. But the experiences that we facilitate can be very therapeutic. With that distinction, we’re genuinely holding space for everyone’s truths to be creatively expressed, inviting their lived experiences to be shared in safe and sacred ways, and providing local and online resources to Black womxn healing practitioners who can continue supporting their journeys.",
  categories: ["space_making"],
})

Quote.create!({
  participant_id: 7,
  first_name: "Denise",
  last_name: "Shanté Brown",
  quote_body: "So much of this work started off with me making a commitment to not just do extractive research in the city of Baltimore and leave, but to make genuine, life-giving connections with Black womxn and BIPOC who were also calling Baltimore home.",
  categories: ["responsibility"],
})

puts 'Creating Quotes for Elle Ramel...'
Quote.create!({
  participant_id: 8,
  first_name: "Elle",
  last_name: "Ramel",
  quote_body: "I think, unfortunately a lot of communities get designed for, or designed and like steamrolled over.",
  categories: ["power"],
})

puts 'Creating Quotes for Elle Ramel...'
Quote.create!({
  participant_id: 8,
  first_name: "Elle",
  last_name: "Ramel",
  quote_body: "So I think the collaboration and the empathy between these fields, helps you think little differently, is very helpful. And then I think also the fact that it's something that we're not charging. We can be really, really honest and almost capacity build those communities. A lot of times they're just asking for things with the wrong words.",
  categories: ["space_making", "knowledge_building"],
})

Quote.create!({
  participant_id: 8,
  first_name: "Elle",
  last_name: "Ramel",
  quote_body: "They shouldn’t have to know the principles in a book. I think that the space has to be welcoming and acknowledge that you don't have to know a lot to contribute your feedback.",
  categories: ["increasing_access", "community_empowerment"],
})

Quote.create!({
  participant_id: 8,
  first_name: "Elle",
  last_name: "Ramel",
  quote_body: "And I think another thing is,I think the word \"community\" has become this condescending word for a person in power. It'd be like, \"We'll check on the community.\" And if you were gonna really do design, it would be full stakeholder engagement. It would be the business owners, it would be the people who live there, people who work there, and sometimes it's lipstick on a pig, where everyone's like, \"Well, we'll just do a community workshop.\" Well, you'll do this one workshop and then you'll say you did it and then you'll pat yourself on the back and then you're done. And so we have to battle that, because if I wanna do anything more than that, it's seen as expensive.",
  categories: ["change_making", "future_implications"],
})

Quote.create!({
  participant_id: 8,
  first_name: "Elle",
  last_name: "Ramel",
  quote_body: "How can we leave the community with the principles and the skills to do it without me? I think that's really exciting because, man, if I could leave everyone and be like, \"They're totally capable.\" They see an empty lot and they can concept it themselves, I would be so excited.",
  categories: ["future_implications"],
})

Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "But in terms of how it helps our actual organizing, you just have to be there. You have to show up and you have to talk to people. You can't just organize from a distance or what they call armchair revolutionary.",
  categories: ['community_building', 'increasing_access', 'knowledge_building', 'responsibility'],
})

puts 'Creating Quotes for Jenny Lin...'
Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "When you go and you talk with someone, you don't prescribe them their problem. Design thinking is all about realizing you come with a set of assumptions, and you challenge those assumptions, and you actually let the other person tell you what's happening.",
  categories: ['space_making', 'mutual_learning', 'community_empowerment'],
})
 
Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "Everyone practices design. Design Thinking is just a fancy facilitation of the whole process. We all benefit from it 'cause we're all different learners, and we're all different participators. And so I think it makes long lengthy meetings, possibly academic discussions, just more accessible to people.",
  categories: ['increasing_access'],
})
 
Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "I think it's really feeling a shift in energy when you do it right.",
  categories: ['change_making'],
})
 
Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "Design is just doing something with intention, and that's why I think we're all designers.I don't believe in designer as a title.",
  categories: ['community_empowerment', 'design'],
})
 
Quote.create!({
  participant_id: 9,
  first_name: "Jenny",
  last_name: "Lin",
  quote_body: "Design thinking comes into play when people can't decide or don't understand what to do with each other's feedback or thoughts.",
  categories: ['design'],
})

puts 'Creating Quotes for Ezra Kong...'
Quote.create!({
  participant_id: 10,
  first_name: "Ezra",
  last_name: "Kong",
  quote_body: "... it's not just about having a seat at the table, it's about redesigning the table because access is a huge thing.",
  categories: ['community_building', 'power', 'space_making', 'increasing_access'],
})

Quote.create!({
  participant_id: 10,
  first_name: "Ezra",
  last_name: "Kong",
  quote_body: "...who gets to make it look cool. Who gets to be a professional about it. Who gets to have access to that kind of decision making power, and it's, it's not the people who should.",
  categories: ['power'],
})

Quote.create!({
  participant_id: 10,
  first_name: "Ezra",
  last_name: "Kong",
  quote_body: "And so, especially people who are specifically oppressed and are limited in their access to resources have tapped on an immense amount of creative power as a survival mechanism.",
  categories: ['power', 'change_making', 'community_empowerment'],
})

puts 'Creating Quotes for Katanya Raby...'
Quote.create!({
  participant_id: 11,
  first_name: "Katanya",
  last_name: "Raby",
  quote_body: "And it was so cool because [the community], they at the end of the day, they knew what it was they wanted to see. They just needed to understand how to get there. We developed a road map for them to do it.",
  categories: ['community_building', 'increasing_access', 'community_empowerment'],
})

Quote.create!({
  participant_id: 11,
  first_name: "Katanya",
  last_name: "Raby",
  quote_body: "Because we had to take ownership of our communities, we can't wait for somebody to come scoop us up and save us. We have to be the ones that are going to take the reins and say 'hey this is the direction our community wants to go with.",
  categories: ['community_building', 'power', 'change_making', 'future_implications'],
})

Quote.create!({
  participant_id: 11,
  first_name: "Katanya",
  last_name: "Raby",
  quote_body: "I mean it's hard to find the right, like not just the right people, but like the people who deserve, like who should be there.",
  categories: ['change_making', 'increasing_access', 'community_empowerment'],
})

puts 'Creating Quotes for Lorin Jackson...'
Quote.create!({
  participant_id: 12,
  first_name: "Lorin",
  last_name: "Jackson",
  quote_body: "I think design is everywhere without it being called that. There's always a need that someone went through a process to meet, or modified a process, object, language, or situation to make something else better.",
  categories: ['community_building', 'increasing_access', 'community_empowerment', 'design'],
})

Quote.create!({
  participant_id: 12,
  first_name: "Lorin",
  last_name: "Jackson",
  quote_body: "Larger organizations do socially good work, but I feel it's still in a cute little box. It's very clean, it's profitable in some way. If it's not marketing, metrics, or press collateral, it's just feel-good stuff. Interventions are necessary, but it's long overdue for us to more aggressively address deeper, root causes.",
  categories: ['power', 'change_making', 'future_implications'],
})

Quote.create!({
  participant_id: 12,
  first_name: "Lorin",
  last_name: "Jackson",
  quote_body: "Or you know, just bringing it down to people's experience, not like this you know more, god-complex kind of perspective.",
  categories: ['knowledge_building'],
})

puts "Creating Quotes for N'Deye Diakhate..."
Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "...creating safer, accountable, honest and vulnerable spaces that focus on relationship building, I think, is how you can integrate design or make design accessible is by focusing on the people first.",
  categories: ['community_building'],
})

Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "...our job is to be translators and to communicate and then translate what we learn. So I guess that's it, relationship building, we have to build relationships first and create spaces for that relationship, building that up.",
  categories: ['trust', 'space_making', 'knowledge_building', 'responsibility'],
})

Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "...creating safer, accountable, honest and vulnerable spaces that focus on relationship building, I think, is how you can integrate design or make design accessible is by focusing on the people first.",
  categories: ['space_making', 'increasing_access'],
})
 
Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "Everyone in some way relates to design even if they don't acknowledge it as being design.",
  categories: ['increasing_access', 'knowledge_building'],
})
 
Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "And so I think designers have a very important role of providing the alternatives that people are already pondering about or thinking about. How do we make it legible, how do we make it visual, how do we make it understood on an internal level that like, ‘Oh well, this could work.",
  categories: ['responsibility'],
})
 
Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "There’s this quote by Janine Benyus on biomimicry, I learned about it from Billy Almon at Black in Design 2019 about ‘Life creates conditions conducive to life' and I thought that it was so simple and perfect and I think that design needs to do the same thing, it needs to create conditions conducive to life.",
  categories: ['change_making', 'design'],
})
 
Quote.create!({
  participant_id: 13,
  first_name: "N'Deye",
  last_name: "Diakhate",
  quote_body: "[Balti Gurls] wanted to create spaces where it could actually help women of color in the Baltimore art scene. And if it's like, "Oh okay, you were in one or two shows," then curators feel more comfortable adding more artists of color that are starting out into the wider arts community. And so when we say, "Developing platforms," it was really about centering our narratives, creating spaces that centered our narratives...",
  categories: ['future_implications'],
})

puts "Creating Quotes for Nour Arafat..."
Quote.create!({
  participant_id: 14,
  first_name: "Nour",
  last_name: "Arafat",
  quote_body: "I think the first thing is always just building a relationship, not even considering this goal of, how can we impart these design tools on them, but it's the trust building.",
  categories: ['community_building', 'trust'],
})

Quote.create!({
  participant_id: 14,
  first_name: "Nour",
  last_name: "Arafat",
  quote_body: "And I think with design, it's really important instead to do more of mutual learning frameworks because people are already designing. So telling them, "We're gonna teach you design," it's like, "Well, maybe we can teach you different ways to approach design or different ways to whatever, but you're already designing.",
  categories: ['knowledge_building', 'mutual_learning'],
})

Quote.create!({
  participant_id: 14,
  first_name: "Nour",
  last_name: "Arafat",
  quote_body: "...socially engaged frameworks, I think, involve a sense of mutual learning and empowerment which you're passing on those tools and also passing on the role of designer and placing it back in the hands of the community…",
  categories: ['mutual_learning', 'community_empowerment'],
})

Quote.create!({
  participant_id: 14,
  first_name: "Nour",
  last_name: "Arafat",
  quote_body: "A lot of people tend to relate design to like, ‘Okay, you must be really great with graphics, designing a room’ and rather bringing it back to addressing problems and getting people to think more about the strategy with which we meet our needs.",
  categories: ['design'],
})

puts "Creating Quotes for Olivia Nava..."
Quote.create!({
  participant_id: 15,
  first_name: "Olivia",
  last_name: "Nava",
  quote_body: "I think that a lot of the community building is just taking as humble of an approach as you can despite the fact that you're often facilitating the process.",
  categories: ['community_building', 'power'],
})

Quote.create!({
  participant_id: 15,
  first_name: "Olivia",
  last_name: "Nava",
  quote_body: "I think our role really is facilitation and recognition of the power that we hold in facilitation, and constantly trying to diffuse the power and remind people that they're the expert of their own life experience in their own community, and their perspectives are highly valued [in the process we are facilitating].",
  categories: ['trust', 'space_making'],
})

Quote.create!({
  participant_id: 15,
  first_name: "Olivia",
  last_name: "Nava",
  quote_body: "I guess for me, it's really about creating processes, products, services and experiences that put people's needs (as defined by them) at the center. And, create something with them that is able to meet one of those needs through an experience, product, or service or other intervention.",
  categories: ['community_empowerment', 'design'],
})
 
Quote.create!({
  participant_id: 15,
  first_name: "Olivia",
  last_name: "Nava",
  quote_body: "For me, the key to all design is being useful to whoever has invited you into it.",
  categories: ['design'],
})

puts "Creating Quotes for Sabiha Basrai..."
Quote.create!({
  participant_id: 16,
  first_name: "Sabiha",
  last_name: "Basrai",
  quote_body: "The projects that have been most successful are ones where trust building has happened.",
  categories: ['community_building', 'trust'],
})

Quote.create!({
  participant_id: 16,
  first_name: "Sabiha",
  last_name: "Basrai",
  quote_body: "....it's not on us to create this cool new app or new tool. It's on us to listen to the people who are most impacted by the issues, and find out what they've already been doing to struggle and to fight and figure out where we're useful to them.",
  categories: ['community_building', 'mutual_learning', 'community_empowerment'],
})

Quote.create!({
  participant_id: 16,
  first_name: "Sabiha",
  last_name: "Basrai",
  quote_body: "I think there's a lot of hubris in design when we're like, "This is really cool. I think this looks cool. This is gonna be an awesome portfolio piece," but it's not really listening to the people that we're making it for or we say we're making it for.",
  categories: ['power', 'responsibility', 'change_making', 'design'],
})

# Quote.create!({
#   participant_id: 16,
#   first_name: "Sabiha",
#   last_name: "Basrai",
#   quote_body: "",
#   categories: [''],
# })
 