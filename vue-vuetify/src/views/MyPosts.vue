<template>
    <div>
        <h1>{{title}}</h1>
        <h1>Visitantes da semana: </h1>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Email
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(item, n) in events"
                :key="n"
                >
                <td>{{ item.first_name }}</td>
                <td>{{ item.email }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
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
        },
        title(){
            return this.$store.getters.bigTitle
        },
        events(){
            return this.$store.state.events
        }
    },
    async created(){
        this.$store.dispatch("fetchEvents")
    }
  }
</script>