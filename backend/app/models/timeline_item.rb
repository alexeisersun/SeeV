class TimelineItem
  include Mongoid::Document
  include Mongoid::Timestamps
  field :created_by, type: Recruiter
end
