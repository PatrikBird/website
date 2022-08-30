<script setup>
// import { OnClickOutside } from '@vueuse/components'

const { navigation } = useContent()
const theme = useTheme()

// const mobileIsOpen = ref(false)
</script>

<template>
  <div class="top-0 z-40 text-primary-800">
    <!-- <OnClickOutside @trigger="mobileIsOpen = false"> -->
    <nav class="dark:bg-primary-800">
      <div class="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/">
                <img class="h-8 w-auto" src="/logo.webp" width="48" height="48" alt="logo">
              </NuxtLink>
              <!-- <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                > -->
            </div>
            <!-- <div
                class="ml-6 flex space-x-8 dark:text-primary-200"
              >
                Navigation
                <NuxtLink
                  v-for="link of navigation"
                  :key="link._path"
                  :to="link._path"
                  active-class="active-navbar-link"
                  class="border-transparent hover:border-gray-300 dark:text-primary-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {{ link.title }}
                </NuxtLink>
              </div> -->
          </div>
          <div class="flex items-center space-x-6">
            <NuxtLink
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              active-class="active-navbar-link"
              class="border-transparent opacity-75 hover:opacity-100 hover:border-gray-300 dark:text-primary-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              {{ link.title }}
            </NuxtLink>
            <a
              v-if="theme.socials?.twitter"
              :href="`https://twitter.com/${theme.socials?.twitter}`"
              target="_blank"
              title="Twitter"
              class="opacity-75 hover:opacity-100 dark:text-primary-100"
            >
              <Icon name="line-md:twitter" />
            </a>
            <a
              v-if="theme.socials?.github"
              :href="`https://github.com/${theme.socials?.github}`"
              target="_blank"
              title="GitHub"
              class="opacity-75 hover:opacity-100 dark:text-primary-100"
            >
              <Icon name="line-md:github-loop" />
            </a>
            <ColorModeSwitch class="opacity-75 hover:opacity-100 dark:text-primary-100" />
          </div>

          <!-- Mobile menu -->
          <!-- <div class="-mr-2 flex items-center sm:hidden gap-4">
              <ColorModeSwitch
                class="inline-flex items-center justify-center hover:text-primary-700 dark:text-primary-100 dark:hover:text-primary-300"
              />
              <button
                class="inline-flex items-center justify-center hover:text-primary-700 dark:text-primary-100 dark:hover:text-primary-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="mobileIsOpen = !mobileIsOpen"
              >
                <span class="sr-only">Open main menu</span>
                <Icon
                  v-if="!mobileIsOpen"
                  name="clarity:menu-line"
                  aria-hidden="true"
                />
                <Icon v-else name="clarity:times-line" aria-hidden="true" />
              </button>
            </div> -->
        </div>
      </div>

      <!-- <div v-show="mobileIsOpen" class="sm:hidden">
          <div class="pt-2 pb-3 space-y-1 text-primary-800">
            <NuxtLink
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              active-class="active-navbar-link-mobile"
              class="border-transparent hover:text-primary-700 hover:border-gray-300 dark:text-primary-100 dark:hover:text-primary-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              @click="mobileIsOpen = false"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
        </div> -->
    </nav>
    <!-- </OnClickOutside> -->
  </div>
</template>
