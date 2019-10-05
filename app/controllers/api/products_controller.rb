class Api::ProductsController < ApplicationController

  def index
    render json: @Department.product.all
  end

  def create
    product = @Department.product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors }, status: :unprocessable_entity 
    end
  end

  def update
    product = @Department.product.find(params[:id])
    product.update(complete: !product.complete)
    render json: product
  end

  def destroy
    @Department.product.find(params[:id]).destroy
    render json: { message: 'Product deleted' }
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :stock)
  end

end
