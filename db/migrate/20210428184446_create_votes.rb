class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.boolean :isUpVote, null: false
      t.belongs_to :user
      t.belongs_to :review
      
      t.timestamps null: false
    end
  end
end
