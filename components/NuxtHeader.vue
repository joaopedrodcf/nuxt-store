<template>
    <header
        class="container sticky top-0 bg-white flex items-center justify-between w-full z-10 text-lg flex-wrap"
    >
        <a href="/">
            <img
                src="~/assets/gif/icons8-shopping-bag.gif"
                alt="Logo"
                width="50"
                height="50"
            />
        </a>

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
                <a href="/products" class="hover:text-blue-400"> Products </a>
            </li>
            <li>
                <a href="/services" class="hover:text-blue-400"> Services </a>
            </li>
            <li>
                <a href="/about-us" class="hover:text-blue-400"> About us </a>
            </li>
            <li>
                <a href="/reviews" class="hover:text-blue-400"> Reviews </a>
            </li>
            <li>
                <a href="/contacts" class="hover:text-blue-400"> Contacts </a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'NuxtHeader',
};
</script>
