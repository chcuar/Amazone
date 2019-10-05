class Api::ProductsController < ApplicationController

  before_action :set_department 

  def index
    render json: @department.products.all
  end

  def create
    product = @department.products.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors }, status: :unprocessable_entity 
    end
  end

  def update
    product = @department.products.find(params[:id])
    product.update(complete: !product.complete)
    render json: product
  end

  def destroy
    @department.products.find(params[:id]).destroy
    render json: { message: 'Product deleted' }
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :stock)
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

end
