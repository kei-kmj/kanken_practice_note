# frozen_string_literal: true

FactoryBot.define do
  factory :question do
    category_id { 1 }
    level { 11 }
    question { 'はてな' }
    note { '説明' }
    association :category
  end
end
