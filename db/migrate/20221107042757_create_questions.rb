class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.references :category, foreign_key: true
      t.integer :level,presence: true
      t.string :question,presence: true
      t.string :note

      t.timestamps
    end
  end
end
