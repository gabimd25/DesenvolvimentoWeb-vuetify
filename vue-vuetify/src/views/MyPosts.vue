<template>
    <div>
        <v-row>
            <v-col
                v-for="(card,n) in myCards"
                :key="n"
                cols="12"
                sm="6"
                md="4"
                xs="2"
            >
            
            <Card :cardid="n" :cardtitle="card.title" :carddescription="card.description"
            :carddata="card.data" :cardauthor="card.author"></Card>

            </v-col>
        </v-row>
    </div>
</template>
<script>
  import Card from "../components/Card"

  export default {
    data: () => ({ 
      
    }),
    name: 'MyPosts',
    components: {
        Card,
    },
    computed: {
        myCards(){
            return this.$store.state.cards
        }
    }
  }
</script>