class Recrutee
  include Mongoid::Document
  embeds_one :timeline
  
  field :name, type: String
  field :surname, type: String
  field :phone, type: String
  field :email, type: String
end
