<template>
  <div class="hello">
    <h1>Kalender</h1>
    <VueCal
      :locale="locale"
      :events="events"
      :time-from="9 * 60"
      :time-to="19 * 60"
      :disable-views="['years', 'year']"
      hide-weekends
      :on-event-click="onEventClick"
    />

    <v-dialog v-model="showDialog">      
      <v-card>
        <v-card-title>
          
          <span>{{ selectedEvent.title }}</span>
          <v-spacer />
          <strong>{{ selectedEvent.startDate && selectedEvent.startDate.format('DD/MM/YYYY') }}</strong>
        </v-card-title>
        <v-card-text>
          <p v-html="selectedEvent.contentFull" />
          <strong>Event details:</strong>
          <ul>
            <li>Start: {{ selectedEvent.startDate && selectedEvent.startDate.format('DD.MM.YYYY hh:mm') }}</li>
            <li>Ende: {{ selectedEvent.endDate && selectedEvent.endDate.format('DD.MM.YYYY hh:mm') }}</li>
           
            <!-- Example
            <li>Event starts at: {{ selectedEvent.startDate && selectedEvent.startDate.formatTime() }}</li>
            <li>Event ends at: {{ selectedEvent.endDate && selectedEvent.endDate.formatTime() }}</li>            
           You can also manipulate the `start` & `end` formatted strings.
        <li>Event starts at: {{ (selectedEvent.start || '').substring(11) }}</li>
            <li>Event ends at: {{ (selectedEvent.end || '').substring(11) }}</li>-->
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/de.js";
import "vue-cal/dist/vuecal.css";

export default {
  name: "Calendar",
  components: { VueCal },
  data: () => ({
    locale: "de",
    selectedEvent: {},
    showDialog: false,
    events: [
      {
        start: "2020-02-18 10:00",
        end: "2020-02-19 12:30",
        title: "Doctor appointment",
        content: '<i class="v-icon material-icons">local_hospital</i>',
        class: "health"
      }
    ]
  }),
  methods: {
    onEventClick (event, e) {
      this.selectedEvent = event
      this.showDialog = true
      //alert("Test: " + this.selectedEvent.title)
      e.stopPropagation()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
