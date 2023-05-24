<template>
  <UContainer>
    <div class="h-screen grid place-items-center">
      <ClientOnly class="w-full max-w-sm">
        <UInputGroup
          :help="evaluation"
          label="Cron Expression"
        >
          <UInput
            v-model="expression"
            name="expression"
            placeholder="you@example.com"
          />
        </UInputGroup>
      </ClientOnly>
    </div>
  </UContainer>
</template>

<script setup>
import cron from 'cronstrue';

const expression = ref('* * * * * *');
const evaluation = computed(() => cron.toString(expression.value, {
  throwExceptionOnParseError: false,
  use24HourTimeFormat: true,
}));

useHead({
  title: 'Understand Cron',
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900',
  },
});
</script>
