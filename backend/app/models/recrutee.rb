class Recrutee
  include Mongoid::Document
  
  embeds_one :timeline, type: Timeline
  
  field :name, type: String
  field :surname, type: String
  field :phone, type: String
  field :email, type: String

  belongs_to :recruter
end
