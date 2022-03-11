<template>
    <footer class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-5">
            <div class="flex flex-col gap-4">
                <div class="text-lg font-bold">Customer Service</div>
                <ul class="flex flex-col gap-2">
                    <li>
                        <NuxtLink to="/privacy-policy">Privacy policy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/terms-and-conditions"
                            >Terms and conditions</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink to="/shipping-policy"
                            >Shipping policy</NuxtLink
                        >
                    </li>
                    <li><NuxtLink to="/faqs">FAQS</NuxtLink></li>
                    <li>
                        <NuxtLink to="/service-terms">Service terms</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/returns-and-refunds"
                            >Returns & refunds</NuxtLink
                        >
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-lg font-bold">Follow us</div>
                <ul class="flex gap-6">
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-facebook-50.png"
                            alt="facebook"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-instagram-50.png"
                            alt="instagram"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-twitter-50.png"
                            alt="twitter"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-tiktok-50.png"
                            alt="tiktok"
                        />
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-lg font-bold">Payment methods</div>
                <ul class="flex gap-6">
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-american-express-48.png"
                            alt="american-express"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-mastercard-48.png"
                            alt="mastercard"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img src="~/assets/img/icons8-visa-48.png" alt="visa" />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-paypal-48.png"
                            alt="paypal"
                        />
                    </li>
                    <li class="w-10 h-10">
                        <img
                            src="~/assets/img/icons8-stripe-48.png"
                            alt="stripe"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-row justify-between">
            <p>Copyright © 2022 Nuxt Store</p>

            <NuxtLink to="https://github.com/joaopedrodcf">
                Powered by João Ferreira
            </NuxtLink>

            <NuxtLink to="https://icons8.com"> Icons by icons8 </NuxtLink>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'NuxtFooter',
};
</script>
