<template>
  <footer class="mt-auto border-t dark:border-gray-700">
    <UContainer>
      <div class="flex items-center justify-between">
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
        </ClientOnly>
        <NuxtLink class="text-sm" to="https://discord.nuxtjs.org" target="_blank">
          © 2023 ACB Hosting
        </NuxtLink>
        <UButton
          to="https://github.com/acbhosting/understand-cron"
          target="_blank"
          color="gray"
          variant="ghost"
          icon="i-simple-icons-github"
        />
      </div>
    </UContainer>
  </footer>
</template>
<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
