<template>
  <div>
    <component
      v-if="currentPage.content.component"
      :key="currentPage.content._uid"
      :blok="currentPage.content"
      :is="currentPage.content.component | dashify"></component>
  </div>
</template>

<script>
import {storyBlokInit} from '~/helpers/mixins.js'
export default {
  mixins: [storyBlokInit],
  methods: {
    handler (component) {
      // console.log('this component is showing')
    }
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    if (context.payload) {
      // return {
      //   loadedTopic: context.payload.topic,
      //   contentElements: context.payload.content
      // }
    } else {
      let endpoint = `cdn/stories/home`
      return context.app.$storyapi.get(endpoint, {
        version: version
      }).then((res) => {
        return {
          currentPage: res.data.story
        }
      }).catch((res) => {
        context.error({ statusCode: res.response, message: res.response })
      })
    }
  },
}
</script>

