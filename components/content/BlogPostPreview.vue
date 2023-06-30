<script setup lang="ts">
const props = defineProps<{
  post: any
  label: string
  reverse?: boolean
}>()
</script>

<template>
  <div
    class="flex flex-row gap-2 p-1 text-center"
    :class="{ 'justify-end': props.reverse }"
  >
    <NuxtLink
      v-if="!props.reverse"
      :to="props.post._path"
      aria-hidden="true"
    >
      <nuxt-img
        :src="props.post.imageUrl"
        class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
        alt="blog post cover image"
        preset="blogImg"
        provider="cloudinary"
        format="webp"
        quality="90"
      />
    </NuxtLink>
    <dl
      class="self-center"
      :class="{ 'text-end': props.reverse, 'text-start': !props.reverse }"
    >
      <dt class="text-xs">
        {{ props.label }}
      </dt>
      <dd class="text-xl font-bold tracking-tight text-teal-600">
        <NuxtLink
          :to="props.post._path"
          :aria-label="`Go to ${props.label === 'Vorheriger Beitrag' ? 'previous' : 'next'} post`"
        >
          {{ props.post.title }}
        </NuxtLink>
      </dd>
      <dd class="text-xs">
        {{ props.post.description }}
      </dd>
    </dl>
    <NuxtLink
      v-if="reverse"
      :to="props.post._path"
      aria-hidden="true"
    >
      <nuxt-img
        :src="props.post.imageUrl"
        class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
        alt="blog post cover image"
        preset="blogImg"
        provider="cloudinary"
        format="webp"
        quality="90"
      />
    </NuxtLink>
  </div>
</template>
