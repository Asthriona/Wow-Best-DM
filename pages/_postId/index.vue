
<template>
    <div id="post" v-editable="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="post-content">
        <h2 class="title">{{ title }}</h2>
        <hr>
        <p>{{ content }}</p>
    </section>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    asyncData(context) {
        return context.app.$storyapi
            .get('cdn/stories/blog/' + context.params.postId, {
                version: "Published"
        })
        .then(res => {
    return {
            blok: res.data.story.content,
            image: res.data.story.content.thumbnail,
            title: res.data.story.content.title,
            content: res.data.story.content.content
            };
        });
    },
    computed: {
    body () {
      return marked(this.data.story.content.content)
    }
  },
};
</script>

<style>
.post-thumbnail {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
}
.post-content {
    width: 80%;
    max-width: 700px;
    margin: auto;
}
.post-content p {
    white-space: pre-line;
}
.title {
    margin-top: 4.3rem;
    margin-bottom: 4.3rem;
}
</style>