FactoryBot.define do
  factory :question do
    category_id { 1 }
    level { 11 }
    questions { "はてな" }
    note { "説明" }
    association :category
  end
end
