<template>
  <nav class="headerNav navbar navbar-primary navbar-expand-sm nbBg">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="/" class="navbar-brand"><span><img class="img-responsive"
          style="max-height:92px;max-width:92px;" src="../assets/staff-management-logo.jpg"/></span></a>
      </div>
      <div class="menuDiv">
        <ul class="navbar-nav nav">
          <li>
            <form class="form-inline" id="searchForm">
              <md-autocomplete class="searchPerson" v-model="selectedPerson" :md-options="staff">
                <label>searchFor</label>
                <template v-if="staff!=null" slot="md-autocomplete-item" slot-scope="{ item, term }">
                  <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
                  </template>
              </md-autocomplete>
              <button type="submit" v-on:click="searchFor('',-1)"><i class="material-icons">search</i></button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {db} from '../firebase'

export default {
  name: 'HeaderNav',
  props: {
    msg: String
  },
  methods:{
    searchFor:function(term,index){

    }
  },
  data() {
    return {
      staff: {},
      selectedPerson:''
    }
  },
  firebase: {
    staff: {
      source: db.ref('staff'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menuDiv{
  position:relative;
  right:55%;
  width:308px;
  float:left;
}
.headerNav{
  min-width:100%;
}
button{
  float:left;
}
.searchPerson{
  background-color:white;
  width:100%;
}
form{
}
ul.navbar-nav{
}
a.navbar-brand{
}
div.navbar-header{
}
.nbBg{
  background-color: rgb(65,184,131);
}
.md-autocomplete{
    margin-top: 11px;
}

</style>
