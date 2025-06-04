<template>
  <div class="dropdown dropdown-bottom dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      {{ theme || "Theme" }}
      <svg
        width="12px"
        height="12px"
        class="inline-block h-2 w-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul
      tabindex="0"
      class="dropdown-content h-96 overflow-auto rounded-box w-52 p-2 backdrop-blur-xs shadow-2xl"
    >
      <li v-for="item in themes" :key="item">
        <input
          :data-set-theme="item"
          data-act-class="ACTIVECLASS"
          @click="setThemeCurrent(item)"
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block justify-start"
          :aria-label="item"
          :value="item"
          :class="[item === theme ? 'btn-primary hover:opacity-80' : 'btn-ghost']"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { themeChange } from "theme-change";
import { localStorageKeyEnum } from "~/enum/localStorageKeyEnum";

const theme = ref();

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
const getTheme = () => {
  theme.value = localStorage.getItem(localStorageKeyEnum.THEME);
};

const setThemeCurrent = (themeRaw: string) => {
  theme.value = themeRaw;
};

onMounted(() => {
  getTheme();
  themeChange(false);
});
</script>

<style></style>
