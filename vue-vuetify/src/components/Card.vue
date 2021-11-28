<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="180px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title> {{cardtitle}} - {{cardid}} </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{carddata}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>author:{{cardauthor}}</div>

      <div>{{carddescription}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['cardid', 'cardtitle', 'carddescription','carddata', 'cardauthor']
  }
</script>