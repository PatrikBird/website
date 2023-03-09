<script setup>
// import { OnClickOutside } from '@vueuse/components'

const { navigation } = useContent()
const appConfig = useAppConfig()

// const mobileIsOpen = ref(false)
</script>

<template>
  <div class="top-0 z-40">
    <!-- <OnClickOutside @trigger="mobileIsOpen = false"> -->
    <nav>
      <div class="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex shrink-0 items-center">
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
                class="ml-6 flex space-x-8 dark:text-gray-200"
              >
                Navigation
                <NuxtLink
                  v-for="link of navigation"
                  :key="link._path"
                  :to="link._path"
                  active-class="active-navbar-link"
                  class="border-transparent hover:border-gray-300 dark:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
              rel="prefetch"
              active-class="active-navbar-link"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium opacity-75 hover:border-gray-300 hover:opacity-100 dark:text-gray-100"
            >
              {{ link.title }}
            </NuxtLink>
            <a
              v-if="appConfig.socials?.twitter"
              :href="`https://twitter.com/${appConfig.socials?.twitter}`"
              target="_blank"
              title="Twitter"
              class="opacity-75 hover:opacity-100 dark:text-gray-100"
            >
              <Icon name="iconoir:twitter" class="h-5 w-5" />
            </a>
            <a
              v-if="appConfig.socials?.github"
              :href="`https://github.com/${appConfig.socials?.github}`"
              target="_blank"
              title="GitHub"
              class="opacity-75 hover:opacity-100 dark:text-gray-100"
            >
              <Icon name="iconoir:github" class="h-5 w-5" />
            </a>
            <ColorModeSwitch class="opacity-75 hover:opacity-100 dark:text-gray-100" title="Toggle color mode" />
          </div>

          <!-- Mobile menu -->
          <!-- <div class="-mr-2 flex items-center sm:hidden gap-4">
              <ColorModeSwitch
                class="inline-flex items-center justify-center hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
              />
              <button
                class="inline-flex items-center justify-center hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          <div class="pt-2 pb-3 space-y-1 text-gray-800">
            <NuxtLink
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              active-class="active-navbar-link-mobile"
              class="border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-100 dark:hover:text-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
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
