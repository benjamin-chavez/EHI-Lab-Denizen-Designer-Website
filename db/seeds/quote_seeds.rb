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
  category: "power",
  category_int: 2,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "If you're not organizing and designing with a community or peers with the courage and bravery to name and examine inequitable norms and behaviors within your practice, it’ll be hard to ever be accountable for the bias and tendencies that are inherent in all of us.",
  category: "power",
  category_int: 2,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "I gravitated towards design because it is this process that allows you to clarify your past and present to inform a future vision. There’s a hopefulness to the process that gives me purpose and direction.",
  category: "increasing_access",
  category_int: 4,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "There's so much to be said about being told at a young age that your ideas matter and that we want to invest in them,build them, and see them in the world.",
  category: "increasing_access",
  category_int: 4,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "...that's a really big strength of design and designers, to take the messiness of all the things happening in everyone's brain and organize it into some semblance of understanding, be it in the form of a series of sticky notes, vision boards, or documents. There’s something magical about sensemaking, revealing hidden patterns, and new possibilities",
  category: "responsibility",
  category_int: 6,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "How do we make sure that this isn't extractive and that we can be really accountable to the folks that have given part of themselves in the design process by sharing their stories with us?",
  category: "responsibility",
  category_int: 6,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "I gravitated towards design because it is this process that allows you to clarify your past and present to inform a future vision. There’s a hopefulness to the process that gives me purpose and direction.",
  category: "change_making",
  category_int: 8,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "“These community relationships that you're building, you have to make sure that folks know that it's about the relationships at the core, not simply about the projects and the things that you're trying to do. I acknowledge that collaborators and co-designers are often arriving with different lived experiences. How do we prioritize accepting people as their whole self?”",
  category: "community_empowerment",
  category_int: 10,
})

Quote.create!({
  participant_id: 1,
  first_name: "Andrea",
  last_name: "Ngan",
  quote_body: "If you're not organizing and designing with a community or peers with the courage and bravery to name and examine inequitable norms and behaviors within your practice, it’ll be hard to ever be accountable for the bias and tendencies that are inherent in all of us.",
  category: "future_implications",
  category_int: 11,
})

# Quote.create!({
#   participant_id: 1,
#   first_name: "Andrea",
#   last_name: "Ngan",
#   quote_body: "",
#   category: "",
#   category_int: ,
# })