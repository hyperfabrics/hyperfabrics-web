<template>
  <div>
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component | dashify"></component>
  </div>
</template>

<script>
const loadData = function({api, cacheVersion, errorCallback, version, path}) {
  return api.get(`cdn/stories/${path}`, {
    version: version,
    cv: cacheVersion
  }).then((res) => {
    return res.data
  }).catch((res) => {
    if (!res.response) {
      console.error(res)
      errorCallback({ statusCode: 404, message: 'Failed to receive content form api' })
    } else {
      console.error(res.response.data)
      errorCallback({ statusCode: res.response.status, message: res.response.data })
    }
  })
}

export default {
  data () {
    return { story: { content: {} } }
  },
  mounted () {
    this.$storyblok.init()
    this.$storyblok.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        if (event.storyId === this.story.id) {
          loadData({
            version: 'draft',
            api: this.$storyapi,
            cacheVersion: this.$store.state.cacheVersion,
            errorCallback: console.error,
            path: this.story.full_slug
          }).then((data) => {
            this.story = data.story
          })
        }
      }
    })
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let editMode = false

    let version = editMode ? 'draft' : 'published'
    let path = context.route.path == '/' ? 'home' : context.route.path

    // Load the JSON from the API
    return loadData({
      version: version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path: path
    })
  }
}
</script>
