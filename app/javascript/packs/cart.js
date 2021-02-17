import Rails from "@rails/ujs"
import * as bootstrap from 'bootstrap'
import toastr from "toastr";



toastr.options = {
  "positionClass": "toast-top-center",
}

  export function add_to_cart(product_id) {
    Rails.ajax({
      type: "POST",
      url: "/products/" + product_id + "/cart",
      success: function(response) {
        toastr.success("Товар доданий до кошика")
      },
      error: function(response) {
        console.log("error")
      }
    })
  }

  export function remove_from_cart(product_id) {
    Rails.ajax({
      type: "DELETE",
      url: "/products/" + product_id + "/cart",
      success: function(response) {
        var cart_product = document.getElementById('cart_product_'+product_id)
        cart_product.remove()
        toastr.success("Товар видалено з кошика")
        check_blank_cart()
      },
      error: function(response) {
        console.log("error")
      }
    })
  }

  export function check_blank_cart(){
    var cart = document.getElementById("cart_modal")
    if(cart.querySelectorAll(".card-product").length == 0){

    var order_button = cart.querySelector(".btn-success")
    order_button.classList.add("disabled")
    var cart_body = cart.querySelector('.modal-body')
    cart_body.innerHTML = "<p> Ваш кошик, пустий, оберіть товар з каталогу перед тим як замовити<p>"
  }
  }

  export function show_cart() {
    Rails.ajax({
      type: "GET",
      url: "/products/cart",
      dataType: 'script',
      success: function(response) {
        console.log(cart);
        var myModal = new bootstrap.Modal(document.getElementById("cart_modal"), {
        })
        myModal.show()
      },
      error: function(response) {
        console.log("error")
      }
    })
  }

  export function cart_product_change_count(product_id,count){
    Rails.ajax({
      type: "PATCH",
      url: "/products/" + product_id + "/cart",
      data: "count="+count,
      success: function(response) {
        toastr.success("Зміна кількості товару")
      },
      error: function(response) {
        console.log("error")
      }
    })
  }
