<template>
  <div class="row mt-5">
    <div class="col-md-12">
        <button class="btn btn-dark" type="button"
            @click="fetchPaymentUrl">
            Pay now 
        </button>
    </div>
  </div>
</template>

<script setup>
    import axios from "axios"
    import { useCartStore } from '../../store/useCartStore.js'

    const store = useCartStore()

    const fetchPaymentUrl = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/pay/order',
                {cartItems: store.getCartItems, success_url: 'http://localhost:5173/#/payment/success'}
            )
            window.location.href = response.data.url
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style>

</style>