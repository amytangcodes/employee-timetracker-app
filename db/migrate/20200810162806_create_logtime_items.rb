class CreateLogtimeItems < ActiveRecord::Migration[6.0]
  def change
    create_table :logtime_items do |t|
      t.date :date
      t.time :clockIn
      t.time :clockOut
      t.integer :totalBreakDuration
      t.integer :totalLogDuration
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
