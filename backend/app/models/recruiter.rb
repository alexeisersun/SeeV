class Recruiter
  include Mongoid::Document

  field :name, type: String
  field :surname, type: String
  field :phone, type: String
  field :email, type: String

  has_many :recrutees
end
