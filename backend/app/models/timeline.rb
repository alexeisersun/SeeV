class Timeline
  include Mongoid::Document
  embedded_in :recrutee
  field :created_at, type: DateTime
  embeds_many :timeline_items
end
