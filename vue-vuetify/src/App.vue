<template>
  <v-app id="inspire">

    <div>
      <v-system-bar
        dark
        color="primary lighten-1"
        app
      >
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>

    <v-app-bar
    color="primary lighten-1"
    app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Mais Opções</v-toolbar-title>

    </v-app-bar>
  
    <v-navigation-drawer
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="20%"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>    
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
       <HelloWorld />
    </v-main>

    <v-footer
    color="primary lighten-1"
    padless
    app>
      <v-row
        justify="center"
        no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2">
          {{ link }}
        </v-btn>
        <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>

    <v-bottom-navigation
      :value="value"
      color="primary"
      horizontal
      app>
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
  
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    data: () => ({ 
      drawer: null,
      items: [
          ['mdi-email', 'Inbox'],
          ['mdi-account-supervisor-circle', 'Supervisors'],
          ['mdi-clock-start', 'Clock-in'],
      ],
      value: 1,
      items2: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
    name: 'App',
    components: {
    HelloWorld
    }
  }
</script>