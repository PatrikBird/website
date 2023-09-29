<script setup lang='ts'>
import type { ReadingTime } from '~/types'

const props = defineProps<{ title: string; date: string; readingTime: ReadingTime }>()
</script>

<template>
  <header class="mb-7">
    <h1 class="text-4xl">
      {{ props.title }}
    </h1>
    <dl class="mt-1 flex flex-col text-xs uppercase sm:flex-row gap-2">
      <div class="flex flex-row">
        <dt>
          Published
        </dt>
        <dd class="font-semibold ml-3">
          <NuxtTime
            :datetime="props.date"
            day="numeric"
            month="long"
            year="numeric"
          />
        </dd>
      </div>
      <dd class="hidden m0 sm:inline-block">
        &middot;
      </dd>
      <div class="flex flex-row">
        <dt>
          Reading time
        </dt>
        <dd class="ml-3 font-semibold">
          {{ props.readingTime.text.substring(0, 5) }}
        </dd>
      </div>
    </dl>
  </header>
</template>
