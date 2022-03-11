<template>
    <div>
        <NuxtHeader />
        <NuxtContent>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-5"
            >
                <NuxtProductCard v-for="index in 6" :key="index" />
            </div>
        </NuxtContent>
        <NuxtDivider />
        <NuxtFooter />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'IndexPage',
});
</script>
