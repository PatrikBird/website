<script setup lang="ts">
// import '@/assets/css/slide-enter.sass'
// import '@/assets/css/underlined.sass'

interface RootError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

const { error } = defineProps<{ error: RootError }>()

// useSeoMetaHelper({
//   title: error.statusMessage || `Error ${error.statusCode}`,
//   description: error.message || 'Undefined error',
// })
</script>

<template>
  <div m-0 flex flex-grow flex-col p-0>
    <NuxtLayout>
      <div class="slide-enter" m-a text-gray-700 lt-md:w-90vw md:w-60ch dark:text-gray-200>
        <p m-block-0 text-10>
          {{ error?.statusMessage || `Error ${error.statusCode}` }}
        </p>
        <p m-block-0>
          At location: <span text-sm font-mono class="location">{{ useRouter().currentRoute.value.path }}</span>
        </p>
        <p m-block-0 text-sm>
          Note: The current location may be different from the error one
        </p>
        <div mt-2 :if="error.message">
          With message:
          <div class="reason" break-words text-sm font-mono>
            {{ error.message || '<undefined>' }}
          </div>
        </div>
        <p m-block-0>
          In case if you have some time, you can
          report issue
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
main {
  width: min(60ch, 90vw);
}

.location, .reason {
  background-color: var(--c-bg-code);
  border-radius: 0.25rem;
  padding: 0.10rem;
}
</style>
