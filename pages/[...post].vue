<template>
  <main>
    <Html lang="de" />
    <ReadProgressBar />
    <ScrollToTop />
    <div class="m-auto max-w-3xl px-4 py-10 sm:rounded sm:px-8 sm:pt-14 lg:relative">
      <div class="prose prose-zinc max-w-none dark:prose-invert">
        <GoUpOnePageBtn />
        <article>
          <ContentDoc>
            <template #empty>
              <h1>Document is empty</h1>
            </template>
            <template #not-found>
              <h1>Document not found</h1>
            </template>
          </ContentDoc>
        </article>
      </div>
    </div>
  </main>
</template>
