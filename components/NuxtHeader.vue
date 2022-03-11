<template>
    <header
        class="container sticky top-0 bg-white flex items-center justify-between w-full z-10 text-lg flex-wrap h-20"
    >
        <NuxtLink to="/">Nuxt store</NuxtLink>

        <button class="flex lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
            </svg>
        </button>

        <ul
            class="flex flex-col gap-2 w-full bg-white lg:flex lg:gap-8 lg:flex-row lg:w-auto hidden"
        >
            <li>
                <NuxtLink to="/products" class="hover:text-blue-400">
                    Products
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="hover:text-blue-400">
                    Services
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about-us" class="hover:text-blue-400">
                    About us
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/reviews" class="hover:text-blue-400">
                    Reviews
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contacts" class="hover:text-blue-400">
                    Contacts
                </NuxtLink>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'NuxtHeader',
};
</script>
