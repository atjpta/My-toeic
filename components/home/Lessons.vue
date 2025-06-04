<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full m-auto"
  >
    <div class="card bg-base-100 h-44 w-80 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Từ vựng</h2>
        <p>Bạn có thể học lại bằng cách nghe và xem nghĩa các từ cũ ^^</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="{ name: routeNameEnum.vocabulary }">
            <button class="btn btn-primary">Learn Now!!</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 h-44 w-80 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Ngữ pháp</h2>
        <p>Xem lại các cấu trúc, ngữ pháp thường thường gặp</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="{ name: routeNameEnum.grammar }">
            <button class="btn btn-primary">Learn Now!!</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { routeNameEnum } from "~/enum/routeNameEnum";
</script>

<style></style>
