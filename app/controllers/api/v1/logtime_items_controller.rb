class Api::V1::LogtimeItemsController < ApplicationController
  before_action :set_logtime_item, only: [:show, :edit, :update, :destroy]

  def index
    @logtime_items = LogtimeItem.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_logtime_item
    @logtime_item = LogtimeItem.find(params[:id])
  end

end
