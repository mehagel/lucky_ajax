get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  p params
  value = params[:value] ? params[:value].to_i : ""
  p "value #{value}"
  @roll = value ? Roll.create({ value: value }) : Roll.create
  p @roll
  erb :_users_dice_roll, layout: false
end

# post '/user_roll' do
#   p params
#    value = params[:value] ? params[:value].to_i : nil

#   @roll = value ? Roll.create({ value: value }) : Roll.create
#   erb :_users_dice_roll, layout: false
# end