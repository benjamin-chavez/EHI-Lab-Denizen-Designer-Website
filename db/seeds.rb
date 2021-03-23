# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# first_name
# last_name
# title
# location_state
# location_city
# bio
# picture
# twitter
# instagram
# linkedin
# email
# website

# PARTICIPANT SEEDS
puts 'Creating Participant Seeds...'

# Participant.create!({
  # first_name: "",
  # last_name: "",
  # location_state: "",
  # location_city: "",
  # bio: "",
  # twitter: "",
  # instagram: "",
  # email: "",
  # website: "",
# })
Participant.create!({
  first_name: "Andrea",
  last_name: "Ngan",
  location_state: "PA",
  location_city: "Philadelphia",
  bio: "Andrea Ngan is a design strategist and community organizer. She co-initiated the Creative Resilience Collective, the Design Justice Network Philadelphia Node, and serves as a Service Design Strategist at the City of Philadelphia’s Service Design Studio.",
  twitter: "andrea_ngan",
  instagram: "andreangan",
  email: "andrea@creativeresco.org",
  website: "",
})