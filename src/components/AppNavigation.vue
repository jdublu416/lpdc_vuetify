<template>
<span>
     <v-navigation-drawer app v-model="drawer" class="indigo darken-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile  :key="index"
                                  router
                                   :to="item.link">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
    <v-toolbar app color="indigo darken-4" dark >
        <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer =!drawer"></v-toolbar-side-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
         <router-link to='/'>
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>   
        </router-link>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-btn flat class="hidden-sm-and-down" to='/work'>Work</v-btn>
        <v-btn flat class="hidden-sm-and-down" to='/services'>Services</v-btn>
        <v-btn flat class="hidden-sm-and-down" to='/insights'>Insights</v-btn>
        <v-btn flat class="hidden-sm-and-down" to='/careers'>Careers</v-btn>
        <v-btn flat class="hidden-sm-and-down" to='/about'>About</v-btn>
        <v-btn flat class="hidden-sm-and-down" to='/contact'>Contact</v-btn>
    </v-toolbar>
    
        </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data(){
        return {
            appTitle:'DataConcepts',
            drawer: false,
            items: [
                {title:'Work', link: '/work'},
                {title:'Services', link: '/services'},
                {title:'Insights', link: '/insights'},
                {title:'Careers', link: '/careers'},
                {title:'About', link: '/about'},
                {title:'Contact', link: '/contact'}
            ]
        }
    }
}
</script>

<style scoped>
a{
    color:white;
    text-decoration: none;
}
</style>
