<template>
    <footer class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-5">
            <div class="flex flex-col gap-4">
                <div class="text-lg">Customer Service</div>
                <ul class="flex flex-col gap-2">
                    <li><a href="/privacy-policy">Privacy policy</a></li>
                    <li>
                        <a href="/terms-and-conditions">Terms and conditions</a>
                    </li>
                    <li><a href="/shipping-policy">Shipping policy</a></li>
                    <li><a href="/faqs">FAQS</a></li>
                    <li><a href="/service-terms">Service terms</a></li>
                    <li>
                        <a href="/returns-and-refunds">Returns & refunds</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-lg">Follow us</div>
                <ul class="flex gap-6">
                    <li>
                        <img
                            src="~/assets/img/icons8-facebook-50.png"
                            alt="facebook"
                        />
                    </li>
                    <li>
                        <img
                            src="~/assets/img/icons8-instagram-50.png"
                            alt="instagram"
                        />
                    </li>
                    <li>
                        <img
                            src="~/assets/img/icons8-twitter-50.png"
                            alt="twitter"
                        />
                    </li>
                    <li>
                        <img
                            src="~/assets/img/icons8-tiktok-50.png"
                            alt="tiktok"
                        />
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-lg">Payment methods</div>
                <ul class="flex gap-6">
                    <li>
                        <img
                            src="~/assets/img/icons8-american-express-48.png"
                            alt="american-express"
                        />
                    </li>
                    <li>
                        <img
                            src="~/assets/img/icons8-mastercard-48.png"
                            alt="mastercard"
                        />
                    </li>
                    <li>
                        <img src="~/assets/img/icons8-visa-48.png" alt="visa" />
                    </li>
                    <li>
                        <img
                            src="~/assets/img/icons8-paypal-48.png"
                            alt="paypal"
                        />
                    </li>
                    <li>
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

            <a href="https://github.com/joaopedrodcf">
                Powered by João Ferreira
            </a>

            <a href="https://icons8.com"> Icons by icons8 </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'NuxtFooter',
};
</script>
