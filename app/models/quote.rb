class Quote < ApplicationRecord
  extend ArrayEnum
  # enum category: {community_building: "Community Building", trust: "Trust", power: "Power", space_making: "Space Making", increasing_access: "Increasing access", knowledge_building: "Knowledge Building", responsibility: "Responsibility", mutual_learning: "Mutual Learning", change_making: "Change Making", rewards_upsides_positives: "Rewards/Upsides/Positives (Need new name)", community_empowerment: "Community Empowerment", future_implications: "Future Implications ", adaptation: "Adaptation", design: "Design"}
  # enum role: [:Charity, :Volunteer]
  enum category_int: [
    :community_building,
    :trust,
    :power,
    :space_making,
    :increasing_access,
    :knowledge_building,
    :responsibility,
    :mutual_learning,
    :change_making,
    :rewardsUpsidesPositives,
    :community_empowerment,
    :future_implications,
    :adaptation,
    :design,
  ]
  array_enum categories: {
    "community_building" => 0,
    "trust" => 1,
    "power" => 2,
    "space_making" => 3,
    "increasing_access" => 4,
    "knowledge_building" => 5,
    "responsibility" => 6,
    "mutual_learning" => 7,
    "change_making" => 8,
    "rewardsUpsidesPositives" => 9,
    "community_empowerment" => 10,
    "future_implications" => 11,
    "adaptation" => 12,
    "design" => 13,
  }

  belongs_to :participant
end





