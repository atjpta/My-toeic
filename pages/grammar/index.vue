<template>
  <div>
    <TabsLearnType />
    <GrammarSelectLessons @select="onSelect" class="flex justify-center mt-5" />
    <ContentRenderer :value="renderedMarkdown" />
    aa
  </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
const lesson = ref();

const onSelect = (lessonRaw: Lesson) => {
  lesson.value = lessonRaw;
};

const renderedMarkdown = computed(async () => {
  if (!lesson.value) {
    return;
  }

  const { data } = await useAsyncData(`public-ngữ pháp-${lesson}`, () => {
    return queryCollection("blog").path(`/public/ngữ pháp/${lesson}`).all();
  });

  return data;
});
</script>

<style></style>
