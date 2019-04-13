class TimelineItem
  include Mongoid::Document
  include Mongoid::Timestamps
  field :created_by, type: String

  embedded_in :timeline
end
