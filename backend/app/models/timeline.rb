class Timeline
  include Mongoid::Document
  embedded_in :recrutee
  field :created_at, type: DateTime
  field :status_update, type: StatusUpdate
  field :interview, type: Interview
end
