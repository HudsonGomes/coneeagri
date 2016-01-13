class InvalidRecordError < StandardError
  attr_accessor :object

  def initialize(object)
    @object = object
  end
end