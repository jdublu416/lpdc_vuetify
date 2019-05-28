<template>
<span>
  <!-- <Video /> -->
  <home-hero></home-hero>
  <home-details></home-details>
</span>
</template>

<script>
  // import Video from '@/components/Video'
  import HomeHero from '@/components/HomeHero'
  import HomeDetails from '@/components/HomeDetails'

  export default {
    components: {
      // Video,
      HomeHero,
      HomeDetails
    }
  }
</script>
