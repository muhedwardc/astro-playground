<template>
  <div class="w-full p-4 flex flex-col items-start bg-white rounded-md">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

    <slot />
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
