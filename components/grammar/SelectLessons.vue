<template>
  <div class="dropdown dropdown-bottom">
    <button tabindex="0" role="button" class="btn m-1">
      {{ lesson?.label }}
      <svg
        width="12px"
        height="12px"
        class="inline-block h-2 w-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </button>
    <ul
      tabindex="0"
      class="dropdown-content rounded-box w-52 p-2 backdrop-blur-xs shadow-2xl"
    >
      <li v-for="item in list" :key="item.value">
        <input
          @click="selectLesson(item)"
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block justify-start"
          :aria-label="item.label"
          :value="item.value"
          :class="[
            item.value === lesson?.value ? 'btn-primary hover:opacity-80' : 'btn-ghost',
          ]"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const lesson = ref<Lesson>();
const list: Lesson[] = [
  {
    value: "tu_loai",
    label: "Từ loại",
  },
  {
    value: "thi_dong_tu",
    label: "Thì động từ",
  },
  {
    value: "so_sanh",
    label: "So sánh",
  },
  {
    value: "relative_clause",
    label: "Mệnh đề quan hệ",
  },
  {
    value: "dai_tu",
    label: "Đại từ",
  },
];

const selectLesson = (lessonRaw: Lesson) => {
  lesson.value = lessonRaw;
  (document.activeElement as HTMLElement | null)?.blur();
  emit("select", lessonRaw);
};

const emit = defineEmits<{
  (e: "select", lesson: Lesson): void;
}>();

onMounted(() => {
  selectLesson(list[0]);
});
</script>

<style></style>
