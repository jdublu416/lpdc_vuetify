<template>
    <v-container fluid fill-height class='home-hero'>
         <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black white--text text-xs-center" 
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            >We are Data Concepts</div>
           
            <div class="display-1 font-weight-bold white--text text-xs-center" 
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            >Driving Digital Transformations</div>
            <v-btn fab class="mt-5 indigo lighten-2">
            <v-icon large color="darkgray">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
}
</script>
<style scoped>
.home-hero{
    background-image: url("https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    /* background-image: url("https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"); */
    /* background-image: url("https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"); */
    background-size: cover;
    width: 100%;
    height: 100%;
    max-height: 100vh;
}
</style>


