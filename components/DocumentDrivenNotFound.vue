<template>
  <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="text-4xl font-bold tracking-tight sm:text-5xl">
          404
        </p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p class="mt-1 text-base">
              Please check the URL in the address bar and try again.
            </p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink to="/" class="inline-flex items-center rounded-md border border-transparent bg-secondary-600 px-4 py-2 text-sm font-medium text-white no-underline shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2">
              Go back home
            </NuxtLink>
            <!-- <NuxtLink href="#" class="no-underline inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-secondary-100 hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500">
              Contact support
            </NuxtLink> -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
