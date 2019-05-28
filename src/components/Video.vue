<template>
    <v-video autoplay muted loop id="myVideo">
        <source src="../assets/videodc.mp4" type="video/mp4">
    </v-video>
</template>

<script>
export default {
  name: "Video"  
};
</script>

<style scoped>

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 100wh; 
  max-height: 100vh;
  min-width: 100%;
  min-height:auto;
  opacity:0.6;
  z-index: -1;
  object-fit:cover;
  margin:0;
}
</style>
