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
              <!--pass the staff firebase elements to autocomplete-->
              <md-autocomplete class="searchPerson" v-model="selectedPerson" :md-options="staff">
                <label>searchFor</label>
          <!--item below refers to a single element from staff as an object & term might refer to the value term of autocomplete-->
                <template v-if="staff!=null" slot="md-autocomplete-item" slot-scope="{ item, term }"
                  v-click="personDetails(item['.key'])">
                  <span><img class="img-responsive" style="max-height:36px;max-width:36px;"
                    v-bind:src="item.profilePicture"/></span>
                  <md-highlight-text :md-term="term">{{ item.firstName+" "+item.lastName }}</md-highlight-text>
                </template>
              </md-autocomplete>
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
    personDetails:function(key){  // this function's supposed to send the firebase key of the selected person to the PersonDetail page
      //$router.push('PersonDetail/'+key)
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
.searchPerson{
  background-color:white;
  width:100%;
}
.nbBg{
  background-color: rgb(65,184,131);
}
.md-autocomplete{
    margin-top: 11px;
}

</style>
