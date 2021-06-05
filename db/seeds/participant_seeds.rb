# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require "open-uri"

# create_table "users", force: :cascade do |t|
#   t.string "email", default: "", null: false
#   t.string "encrypted_password", default: "", null: false
#   t.string "reset_password_token"
#   t.datetime "reset_password_sent_at"
#   t.datetime "remember_created_at"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["email"], name: "index_users_on_email", unique: true
#   t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
# end

# CLEAN DATABASE
puts "Cleaning database..."
Participant.destroy_all

# PARTICIPANT SEEDS
puts 'Creating Participant Seeds...'

# Participant.create!({
  # first_name: "",
  # last_name: "",
  # designer_type: "",
  # location_state: "",
  # location_city: "",
  # bio: "",
  # twitter: "",
  # instagram: "",
  # linkedin: "",
  # email: "",
  # website: "",
  # profileImgLink: "",
  # interviewed: true
  # })

Participant.create!({
  first_name: "Andrea",
  last_name: "Ngan",
  designer_type: "Design strategist and community organizer",
  location_state: "PA",
  location_city: "Philadelphia",
  bio: "Andrea Ngan is a design strategist and community organizer. She co-initiated the Creative Resilience Collective, the Design Justice Network Philadelphia Node, and serves as a Service Design Strategist at the City of Philadelphia’s Service Design Studio.",
  twitter: "andrea_ngan",
  instagram: "andreangan",
  linkedin: "",
  email: "andrea@creativeresco.org",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877730/Denizen%20Participant%20Photos/AndreaNgan-Photo_jizsbz.jpg",
  interviewed: true,
  })


Participant.create!({
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  designer_type: "Community-based Innovator",
  location_state: "MI",
  location_city: "Detroit",
  bio: "Anjanette Davenport Hatter is the Founder and CEO of Harambee Care where she helps social workers live their best lives. She is also the Founding Executive Director of Your goodVillage Collective, a nonprofit organization that seeks to improve population health through equitable community-based education and support services.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "anjanetteh@harambeecare.org",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877729/Denizen%20Participant%20Photos/Anjanette_Davenport_Hatter_gc11lm.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Bryan",
  last_name: "Lee Jr",
  designer_type: "Architect",
  location_state: "LA",
  location_city: "New Orleans",
  bio: "Bryan Lee is the Design Principal of Colloqate and a national Design Justice Advocate. Lee is the founding organizer of the Design Justice Platform and organized the Design As Protest National Day of Action.",
  twitter: "bcleejr",
  instagram: "bcleejr",
  linkedin: "",
  email: "bryan@colloqate.org",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877732/Denizen%20Participant%20Photos/Bryan_Lee_Jr_kia6zj.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Cedric",
  last_name: "Douglas",
  designer_type: "Social Engaged Designer",
  location_state: "MA",
  location_city: "Boston",
  bio: "Cedric Douglas is a social designer and artivist who uses street art to express his views of some of the social inequities of the world. We sat down with Cedric to talk about his work, the state of design, and how his art and introduction to design stems from his Jamaican upbringing.",
  twitter: "cedricdouglas",
  instagram: "vise_1_boston",
  linkedin: "",
  email: "cedricdouglasdesign@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877737/Denizen%20Participant%20Photos/Cedric_Douglas_wm6qsh.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Chris",
  last_name: "Rudd",
  designer_type: "Designer, Community Organizer",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Chris Rudd is a designer, community organizer, and youth worker with a passion for social justice. Chris is the founder of ChiByDesign, a black-owned and people-of-color-led human-centered design firm.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "crudd2@id.iit.edu",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616883086/Denizen%20Participant%20Photos/Chris_Rudd2_hypelb.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Claudia",
  last_name: "Paraschiv",
  designer_type: "Architect",
  location_state: "MA",
  location_city: "Salem",
  bio: "Claudia Paraschiv is an architect and urbanist based in Salem MA. She is the founder and principal at Studioful Design a practice for participatory design.",
  twitter: "",
  instagram: "studioful.design",
  linkedin: "",
  email: "claudia@studiofuldesign.com",
  website: "https://www.studiofuldesign.com/",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877744/Denizen%20Participant%20Photos/Claudia_Paraschiv_b18oxi.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Denise",
  last_name: "Shanté Brown",
  designer_type: "Holistic Design Strategist",
  location_state: "MD",
  location_city: "Baltimore",
  bio: "Denise Shanté Brown is a queer, disabled entrepreneur and holistic design strategist. She is also the founding director of Black Women Flourish, a design for wellbeing collective, and creator of the cohort experience Design for the Wellbeing of Black Women.",
  twitter: "",
  instagram: "denise.om.shanti",
  linkedin: "",
  email: "design@deniseshantebrown.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Denise_Shant%C3%A9_Brown_cppqwp.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Elle",
  last_name: "Ramel",
  designer_type: "Urban Planner",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Elle Ramel is the founder of City Open Workshop, a pro-bono planning and design service group for Chicago communities. She is currently the director of GET Cities, a gender-in-tech equity program designed to accelerate the representation and leadership of women in tech to meet the demands of the industry’s future.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "elleramel@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877706/Denizen%20Participant%20Photos/Elle_Ramel_dw9b1p.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Jenny",
  last_name: "Lin",
  designer_type: "UX Designer",
  location_state: "CA",
  location_city: "Los Angeles",
  bio: "Jenny Lin is currently a graduate student at SVA Design for Social Innovation. Her background includes community organizing, UX Design, and art. She is an avid believer in food analogies and having fun.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "jenny@winjoy.design",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877707/Denizen%20Participant%20Photos/Jenny_Lin_kbuoxh.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Ezra",
  last_name: "Kong",
  designer_type: "Equity Design Facilitator",
  location_state: "CA",
  location_city: "Oakland",
  bio: "Ezra Kong is a co-founder and managing partner at Reflex Design Collective. They are an equity designer with a background in digital design and social innovation.",
  twitter: "",
  instagram: "meiiikong",
  linkedin: "",
  email: "ezra@reflexdc.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877752/Denizen%20Participant%20Photos/Ezra_Kong_mwkkk8.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Katanya",
  last_name: "Raby",
  designer_type: "Urban Planner and Principal Consultant",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Katanya Raby is an urban planner and Principal Consultant at Urban Dreams, LLC. She is also the co-founder of the Al Raby Foundation, which honors the legacy of Civil Rights Leader Albert Anderson Raby through the collection of archival materials to be derived from oral histories and other resources through the cultivation of community relations, activism, and youth leadership development in Chicago.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "urbandreamsofmine@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877710/Denizen%20Participant%20Photos/Katanya_Raby_k32ufg.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Lorin ",
  last_name: "Jackson",
  designer_type: "Interior Design, graphics, & communication",
  location_state: "MO",
  location_city: "St. Louis",
  bio: "Lorin Jackson is an interior architect and equity-driven designer based in the Midwest. She was formerly a Program Facilitator with Chicago Mobile Makers and does design consulting work with small firms to create access to design for minority communities.",
  twitter: "lorine.reinnoire",
  instagram: "lorine.reinnoire",
  linkedin: "",
  email: "lorin@reinnoireco.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877712/Denizen%20Participant%20Photos/Lorin_Jackson_yyzjbp.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "N'Deye",
  last_name: "Diakhate",
  designer_type: "Design Collaborator",
  location_state: "MD",
  location_city: "Baltimore",
  bio: "N’Deye Diakhate is a design collaborator who loves working with fellow artists and creators on ways we can move towards our collective liberation. A member of Black Women Flourish and Balti Gurls, they have experience in co-creating generative spaces ranging from design strategy sessions to film screenings and art exhibitions.",
  twitter: "",
  instagram: "wednesdeye",
  linkedin: "",
  email: "ndiakhate93@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877717/Denizen%20Participant%20Photos/N_Deye_Diakhate_h1zntn.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Nour",
  last_name: "Arafat",
  designer_type: "Strategist and Biomedical Engineer",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Nour Arafat is a strategist and biomedical engineer. They are also actively involved in the Chicago chapter of the Design Justice Network.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "nour.arafat@protonmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877721/Denizen%20Participant%20Photos/Nour_Arafat_e3or0a.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Olivia",
  last_name: "Nava",
  designer_type: "Senior Design Strategist",
  location_state: "CA",
  location_city: "Oakland",
  bio: "Olivia Nava is the Senior Design Strategist with Gobee, leading teams through the human-centered design process to uncover assumptions, co-create with users, develop strategy with clients and rethink how solutions can be developed and implemented.",
  twitter: "ozagogo",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/olivianava/",
  email: "olivia.nava@gobeegroup.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877717/Denizen%20Participant%20Photos/Olivia_Nava_mzjl1b.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Sabiha",
  last_name: "Basrai",
  designer_type: "Graphic Designer",
  location_state: "CA",
  location_city: "Oakland",
  bio: "Sabiha Basrai is a member of Design Action Collective — a worker-owned cooperative dedicated to serving social justice movements with art, graphic design, and web development. She is also an adjunct professor at the University of San Francisco.",
  twitter: "",
  instagram: "designactioncollective",
  linkedin: "",
  email: "sabiha@designaction.org",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Sabiha_Basrai_q3fmjq.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Stephanie",
  last_name: "Burrell",
  designer_type: "Graphic & Experiential Designer + Design Philosopher",
  location_state: "CA",
  location_city: "San Francisco",
  bio: "Stephanie Burrell is the founder of Worthy Beings, a clothing brand for storytelling and empowerment. S/he also has a passion for brand identity and working with black youth in makerspaces.",
  twitter: "",
  instagram: "kingyoko88",
  linkedin: "",
  email: "me@stephanieariburrell.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930254/Denizen%20Participant%20Photos/2Stephanie_Burrell__j78vn2.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Taylor",
  last_name: "Holloway",
  designer_type: "Architect, Designer and Social Impact Strategist",
  location_state: "LA",
  location_city: "New Orleans",
  bio: "Designer, architect, and educator, Taylor Holloway uses design-driven approaches to promote equity in the built environment. As a biracial woman, first generation college graduate, and individual who has experienced the U.S. foster care system, issues of creative voice, belonging, and healing are personal to her. 

  Her work is focused on developing new and radical uses of public space, advancing collective capacities for social impact, and championing the preservation of shared cultural legacies.
  
  Taylor is a Core Organizer of Design As Protest, a 2020 NextCity Vanguard, a 2019 Association for Community Design Fellow, an AIA Jason Pettigrew Memorial ARE Scholar, and the 2013 AIA Chicago Martin Roche Travel Fellow. Her organization, Public Design Agency, utilizes design-thinking, public art, and architecture to train future generations of designers, builders, & change-makers. She lives and works in New Orleans.",
  twitter: "yaypda",
  instagram: "alise_in_wonderland",
  linkedin: "",
  email: "hello@yayforpda.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877723/Denizen%20Participant%20Photos/Taylor_Holloway_phyovs.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Tonika",
  last_name: "Johnson",
  designer_type: "Photo-journalist and Social Justice Artist ",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Tonika Johnson is a trained photo-journalist and self-identified social justice artist living in the Englewood neighborhood of Chicago. She developed the Folded Map project to help people understand how Chicago’s historic segregation impacts neighborhood infrastructure today as well brought residents, whose houses have the same address but on different sides of the city, together to have a conversation. We sat down with Tonika and talked to her about the Folded Map project and her take on art as social activism.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "tonika.johnson@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930254/Denizen%20Participant%20Photos/2Tonika_Johnson_se4bbb.jpg",
  interviewed: true
  })
 
Participant.create!({
  first_name: "Victoria",
  last_name: "Barnnett",
  designer_type: "Web and Graphic Designer",
  location_state: "Canada",
  location_city: "Toronto",
  bio: "Victoria Barnett is a freelance web and graphic designer. She has been a Design Justice Network member and coordinator since 2014.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "veegs42@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877728/Denizen%20Participant%20Photos/Victoria_Barnett_ftzodx.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Folayemi",
  last_name: "Wilson",
  designer_type: "Visual Artist, Educator, and Designer",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Folayemi [Fo] Wilson is an object and image maker whose work celebrates the Black imagination as a technology of resistance and self-determination. She is a visual artist, educator, co-founder and principal of blkHaUS studios, a socially-focused design studio based in Chicago.",
  twitter: "",
  instagram: "",
  linkedin: "",
  email: "fo@blkhausstudios.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Folayemi_Wilson_v8sitl.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Michele",
  last_name: "Washington",
  designer_type: "Designer, Researcher, Strategist",
  location_state: "NY",
  location_city: "New York City",
  bio: "Michele Washington is a design strategist and design researcher who works with corporate, non-profit, cultural institutions. She is also a writer, graphic designer and educator.",
  twitter: "culturalboundar",
  instagram: "culturalboundaries",
  linkedin: "https://www.linkedin.com/in/michelewashington/",
  email: "michele@washingtondesign.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Michele_Washington_jfjraw.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Anushka",
  last_name: "Jajodia",
  designer_type: "Social Justice-Centered Designer",
  location_state: "MD",
  location_city: "Baltimore",
  bio: "Anushka Jajodia is a human and value-centered designer and an aspiring illustrator. She works as a Social Design Associate at the Center for Social Design at Maryland Institute College of Art (MICA), which stands on the unceded land of the Piscataway Conoy Nation. She is currently collaborating with researchers at the Johns Hopkins School of Nursing to co-design community-centered research programs that focus on:

  1) Improving dementia literacy for Korean older adults and caregivers, 
  2) Addressing disparities in diagnosis, 
  3) Implementing advanced care planning in primary care.",
  twitter: "",
  instagram: "anujojo",
  linkedin: "",
  email: "anushkajajodia@gmail.com",
  website: "https://anushkajajodia.com/",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877740/Denizen%20Participant%20Photos/Anushka_Jajodia_h6d9fs.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Navjot",
  last_name: "Heer",
  designer_type: "Designer, Urban Planner and Organizer",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Navjot Heer is a designer, urban planner and organizer She is currently a planner at Thrivance Group, which works to bring culturally restorative concepts into the lived experiences of their clients and community partners.",
  twitter: "nvkheer",
  instagram: "nuh_vee",
  linkedin: "",
  email: "navheer29@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Navjot_Heer__glkmrl.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "De",
  last_name: "Nichols",
  designer_type: "Social impact designer",
  location_state: "CA",
  location_city: "San Francisco",
  bio: "De Nichols is a social impact designer, entrepreneur, and lecturer. De is the Principal of Design & Social Practice at Civic Creatives, a 2020 Monument Lab Fellow and 2020 Loeb Fellow of Harvard University’s Graduate School of Design.",
  twitter: "de_nichols",
  instagram: "de_nichols",
  linkedin: "",
  email: "deandrean@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877713/Denizen%20Participant%20Photos/De_Nichols_r9we2d.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Katherine",
  last_name: "Darnstadt",
  designer_type: "Architect and Urban Designer",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Katherine is an architect, educator and founder of Latent Design, a practice at the intersection of architecture and community development creating social, economic and environmental impact beyond the building. Leveraging design as a tool to make the invisible forces impacting a project visible through architecture, the firm’s collaborations range from small-scale tactical interventions, new construction community buildings, adaptive reuse, neighborhood master plans and design speculations.",
  twitter: "latent_design",
  instagram: "latent_design",
  linkedin: "",
  email: "katherine@latentdesign.net",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621910053/Denizen%20Participant%20Photos/KatherineDarnstadt_lpzuzu.jpg",
  interviewed: true
  })

  Participant.create!({
  first_name: "Brooke",
  last_name: "Staton",
  designer_type: "Equity Design Facilitator",
  location_state: "CA",
  location_city: "Oakland",
  bio: "Brooke Staton is a co-founder and managing partner at Reflex Design Collective. She is an equity design innovator and facilitator who draws on her background in city planning, public health, and participatory research to devise community-driven approaches to creative problem solving.",
  twitter: "reflexdesignc",
  instagram: "reflexdesignc",
  linkedin: "",
  email: "brooke@reflexdc.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877734/Denizen%20Participant%20Photos/Brooke_Staton_rbhcsz.jpg",
  interviewed: true
  })
  
Participant.create!({
  first_name: "Keesha",
  last_name: "Gaskins-Nathan",
  designer_type: "Philanthropic Strategist",
  location_state: "NY",
  location_city: "New York City",
  bio: "Keesha Gaskins-Nathan is the director for the Democratic Practice–United States program at the Rockefeller Brothers Fund. She is a philanthropic strategist and grantmaker, attorney, adjunct professor, and writer focused on transforming large scale systems within the U.S. political economy to realize racial and economic justice for all U.S. residents.",
  twitter: "keeshagaskins",
  instagram: "",
  linkedin: "",
  email: "keesha.gaskins@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1616877709/Denizen%20Participant%20Photos/Keesha_Gaskins-Nathan_kaaesq.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Shanelle",
  last_name: "Matthews",
  designer_type: "Communications Director",
  location_state: "NY",
  location_city: "Brooklyn",
  bio: "Shanelle Matthews partners with social justice activists, organizations, and campaigns to inspire action through strategic communications and narrative power. From Sierra Club and ACLU to the Black Lives Matter Global Network and Aspen Institute, she has collaborated with different influencers and changemakers to transform complex ideas into persuasive political messaging.

  Today, she is the Communications Director for the Movement for Black Lives, an ecosystem of 150 organizations creating a broad political home for Black people to learn, organize, and take action. In 2016, Shanelle founded the Radical Communicators Network (RadComms) to strengthen the field of strategic communications, as well as Channel Black, a program that prepares progressive spokespeople to make critical, real-time interventions through the media. In 2017, Shanelle joined The New School as its inaugural Activist-in-Residence, and is currently faculty and teaches critical theory and social justice with an emphasis on Black resistance.
  
  She holds a degree in Journalism and New and Online Media from the Manship School of Mass Communications at Louisiana State University and is co-authoring Building Narrative Power for 21st Century Social Movements, an anthology slated for print in 2022.",
  twitter: "",
  instagram: "hello_shanelle",
  linkedin: "",
  email: "helloshanelle@gmail.com ",
  website: "https://helloshanelle.com/",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621911385/Denizen%20Participant%20Photos/ShanelleMatthews_p41jgj.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Sloan",
  last_name: "Leo",
  designer_type: "Community Designer",
  location_state: "NY",
  location_city: "Brooklyn",
  bio: "Sloan Leo (they/them) is an artist and the Founder/CEO of FLOX Studio Inc. FLOX Studio is a community design and strategy studio that works with curious optimists who are committed to getting things done. FLOX is on a mission to increase the community design capacity of mission-driven enterprises so that the entire ecosystem is more brave, creative and resilient. Prior to founding FLOX Studio, Sloan Leo spent 15 years leading non-profit staff and volunteer teams at the Environmental Defense Fund, The Trust for Public Land, and other organizations at the intersection of community, justice, and design.",
  twitter: "",
  instagram: "therealsloanleo",
  linkedin: "",
  email: "therealsloanleo@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621930253/Denizen%20Participant%20Photos/2Sloan_Leo_jo4inp.jpg",
  interviewed: true
  })

Participant.create!({
  first_name: "Gabe",
  last_name: "Moreno",
  designer_type: "Artist",
  location_state: "IL",
  location_city: "Chicago",
  bio: "Gabe Moreno is an artist, educator and the manager of Design Programs Arts + Public Life at the University of Chicago.",
  twitter: "",
  instagram: "ga_beh",
  linkedin: "",
  email: "gabriel.granat@gmail.com",
  website: "",
  profileImgLink: "https://res.cloudinary.com/dbmev2ofj/image/upload/v1621910480/Denizen%20Participant%20Photos/Gabe_Moreno_xf1e8i.jpg",
  interviewed: true
  })
  
  # Participant.create!({
  # first_name: "",
  # last_name: "",
  # designer_type: "",
  # location_state: "",
  # location_city: "",
  # bio: "",
  # twitter: "",
  # instagram: "",
  # linkedin: "",
  # email: "",
  # website: "",
  # profileImgLink: "",
  # interviewed: true
  # })
