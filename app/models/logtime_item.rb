class LogtimeItem < ApplicationRecord
  default_scope { order(created_at: :desc) }
  belongs_to :user

  validates :date, :clockIn, :clockOut, presence: true
end
