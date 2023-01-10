# frozen_string_literal: true

class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.references :question, foreign_key: true
      t.string :answer, presence: true
      t.boolean :correctness, default: false, null: false

      t.timestamps
    end
  end
end
