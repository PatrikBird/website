<template>
  <div class="top-0 z-40">
    <nav>
      <div class="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex shrink-0 items-center">
              <NuxtLink to="/" aria-label="main">
                <img class="h-8 w-auto" src="/logo.webp" width="48" height="48" alt="logo">
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center space-x-5 text-sm">
            <NuxtLink
              to="/"
              class="no-underline opacity-75 hover:opacity-100 p-1 xs:block"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/articles"
              class="no-underline opacity-75 hover:opacity-100 p-1"
            >
              Articles
            </NuxtLink>
            <NuxtLink
              href="https://github.com/PatrikBird"
              target="_blank"
              title="GitHub"
              class="opacity-75 hover:opacity-100"
              aria-label="Go to GitHub"
            >
              <Icon name="line-md:github-loop" class="w-5 h-5" />
            </NuxtLink>
            <ToggleDark
              class="opacity-75 hover:opacity-100"
              title="Toggle color mode"
            />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
