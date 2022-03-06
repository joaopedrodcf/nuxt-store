<template>
    <div>
        <NuxtHeader />
        <NuxtContent>Im a slot content</NuxtContent>
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
