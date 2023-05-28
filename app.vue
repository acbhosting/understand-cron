<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <UContainer class="flex flex-grow justify-center items-center w-full">
      <ClientOnly>
        <UInputGroup
          :help="evaluation"
          name="expression"
          label="Cron Expression"
          class="flex-grow max-w-sm"
        >
          <UInput
            v-model="expression"
            name="expression"
            placeholder="* * * * * *"
          />
        </UInputGroup>
      </ClientOnly>
    </UContainer>
    <Footer />
  </div>
</template>

<script setup>
import cron from 'cronstrue';

const expression = ref('* * * * * *');
const evaluation = computed(() => {
  try {
    return cron.toString(expression.value, { use24HourTimeFormat: true });
  } catch (error) {
    return error.toString();
  }
});

useHead({
  title: 'Understand Cron',
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'antialiased font-sans text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-900',
  },
});
</script>
