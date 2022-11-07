class Question < ApplicationRecord
  has_one :category
  has_many :answer
end
