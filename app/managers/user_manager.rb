class UserManager

  def self.create(attributes)
    user = User.new(attributes)
    if user.valid?
      user.save!
    else
      raise InvalidRecordError.new(user)
    end
  end

  def self.update(id, attributes)
    user = User.find(id)
    user.attributes = attributes
    if user.valid?
      user.save
    else
      raise InvalidRecordError.new(user)
    end
  end

end