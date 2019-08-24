<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id" />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'Published',
      starts_with: 'blog/'
    }).then(res => {
      console.log(res)
      return {
        posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summay,
          thumbnailUrl: bp.content.thumbnail
        }
      })
      };
    });
  }
//  data() {
//    return {
//      posts: [
//        {
//          title: 'This Is a test!',
//          previewText: "Random Hard coded blog post to test. :)",
//          thumbnailUrl: "https://dummyimage.com/400x400/000/fff.png",
//          id: "Test-Article"
//        },
//        {
//          title: 'This Is another!',
//          previewText: "Another random Hard coded blog post to test. :)",
//          thumbnailUrl: "https://avatarfiles.alphacoders.com/449/44978.jpg",
//          id: "Another-Test-Article"
//        }
//      ]
//    }
//  }
};
</script>

<style scoped>
#posts {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
}
</style>
