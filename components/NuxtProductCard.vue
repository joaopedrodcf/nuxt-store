<template>
    <div class="flex flex-col gap-6">
        <img src="~/assets/img/product1.jpg" alt="product1" />
        <div class="flex flex-col gap-6">
            <div>
                <div class="text-lg font-bold">XBOX Controller</div>
                <div class="">
                    Textured triggers and bumpers I Hybrid D-pad I Button
                    mapping I Bluetooth® technology
                </div>
            </div>
            <div class="flex flex-row justify-between items-center">
                <div class="">$220</div>
                <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuxtProductCard',
    data() {
        return {
            items: [{ message: 'Foo' }, { message: 'Bar' }],
        };
    },
};
</script>
