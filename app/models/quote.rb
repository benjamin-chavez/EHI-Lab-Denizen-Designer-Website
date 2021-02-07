class Quote < ApplicationRecord
  enum category: {community_building: "Community Building", trust: "Trust", power: "Power", space_making: "Space Making", increasing_access: "Increasing access", knowledge_building: "Knowledge Building", responsibility: "Responsibility", mutual_learning: "Mutual Learning", change_making: "Change Making", rewards_upsides_positives: "Rewards/Upsides/Positives (Need new name)", community_empowerment: "Community Empowerment", future_implications: "Future Implications ", adaptation: "Adaptation", design: "Design"}
end






