class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name, null: false
      t.text :body, null: false
      t.float :rating, default: 0, null: false
    end
  end
end
