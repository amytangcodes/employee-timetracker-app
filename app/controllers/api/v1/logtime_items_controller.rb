class Api::V1::LogtimeItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_logtime_item, only: [:show, :edit, :update, :destroy]

  def index
    @logtime_items = current_user.logtime_items.all
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
  end

  def create
    @logtime_item = current_user.logtime_items.build(logtime_item_params)
    if authorized?
      respond_to do |format|
        if @logtime_item.save
          format.json { render :show, status: :created, location: api_v1_logtime_item_path(@logtime_item)}
        else
          format.json { render json: @logtime_item.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_logtime_item
    @logtime_item = LogtimeItem.find(params[:id])
  end

  def authorized?
    @logtime_item.user == current_user
  end

  def handle_unauthorized
    unless authorized?
      respond_to do |format|
        format.json { render :unauthorized, status: 401 }
      end
    end
  end

  def logtime_item_params
    params.require(:logtime_item).permit(:date, :clockIn, :clockOut, :totalBreakDuration)
  end

end
