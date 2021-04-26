class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :rating, null: false
      t.belongs_to :animal, null: false
      t.belongs_to :user, null: false
      t.timestamps null: false
    end
  end
end
