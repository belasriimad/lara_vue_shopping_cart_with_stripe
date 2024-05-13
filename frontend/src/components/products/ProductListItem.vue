<template>
  <div class="col-md-4 mb-2">
    <div class="card h-100">
        <img :src="product.product_image" alt="Product Image" class="card-img-top">
        <div class="card-body">
            <div class="card-title">
                {{product.product_name}}
            </div>
            <p class="card-text">
                {{product.product_desc}}
            </p>
            <p>
                <span class="fw-bold text-danger">
                    ${{product.product_price}}
                </span>
            </p>
            <button class="btn btn-primary"
                @click="store.addToCart(product)"
                >
                <i class="bi bi-cart-check"></i> add to cart
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { useCartStore } from '../../store/useCartStore.js'

    const store = useCartStore()

    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>

<style>
</style>