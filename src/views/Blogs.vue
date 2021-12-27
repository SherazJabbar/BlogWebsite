<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post </span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCards
        :post="post"
        v-for="(post, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCards from "../components/BlogCard.vue";

export default {
  name: "blogs",
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
  components: {
    BlogCards,
  },
};
</script>

<style lang="scss" scoped></style>
