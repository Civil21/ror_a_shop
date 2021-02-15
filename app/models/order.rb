class Order < ApplicationRecord
  attr_accessor :city

  has_many :order_products
  accepts_nested_attributes_for :order_products
  belongs_to :user
  accepts_nested_attributes_for :user

  enum payment_type: %w[cash card]
  enum delivery_type: %w[self_pickup nova_poshta]
end
