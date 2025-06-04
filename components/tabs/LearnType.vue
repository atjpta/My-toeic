<template>
  <div class="w-full">
    <div role="tablist" class="tabs tabs-border mx-auto w-fit tabs-xl">
      <NuxtLink
        v-for="(item, index) in tabs"
        :key="index"
        role="tab"
        class="tab"
        :to="{ name: item.value }"
        :class="[item.value === route.name && 'tab-active']"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { routeNameEnum } from "~/enum/routeNameEnum";
const route = useRoute();
const tabs = [
  {
    value: routeNameEnum.vocabulary,
    label: "Từ vựng",
  },
  {
    value: routeNameEnum.grammar,
    label: "Ngữ pháp",
  },
];
</script>

<style></style>
