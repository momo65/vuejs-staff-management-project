<template>
  <div class="populateFirebase">
    <div class="container">
      <form class="form-group">
        <div class="row"><input type="text" v-model="profilePicture" class="form-control d-block" placeholder="profilePicture"/>
        <fieldset id="sex">
          <input type="radio" name="sex" value="male" v-model="sex"/>male
          <input type="radio" name="sex" value="female" v-model="sex"/>female
        </fieldset></div>
        <div class="row"><input type="text" v-model="firstName" class="form-control d-block" placeholder="firstName"/>
        <input type="text" v-model="lastName" class="form-control d-inline" placeholder="lastName"/></div>
        <div class="row"><input type="number" v-model="age" class="form-control d-block" placeholder="age"/>
        <input type="text" v-model="address" class="form-control d-inline" placeholder="country, city"/></div>
        <div class="row"><input type="text" v-model="phone" class="form-control d-block" placeholder="phone"/>
        <input type="text" v-model="position" class="form-control d-inline" placeholder="workPosition"/></div>
        <div class="row"><input type="text" v-model="hobby" class="form-control d-block" placeholder="hobby"/>
        <input type="checkbox" id="married" name="married" v-model="married" class="form-control d-inline"
          value="married"/>
        <label class="float-left" for="married">Married</label></div>
        <div class="row"><div class="d-block">
          <label for="plan">Plan</label><input type="text" v-model="plan" class="d-inline form-control" id="plan"/>
          <label for="from">from</label><input type="text" v-model="fromT" class="d-inline form-control" id="from"/></div>
          <div class="row"><label for="to">to</label><input type="text" v-model="toT" class="d-inline form-control" id="to"/>
          <button type="button" class="btn btn-secondary d-block" v-on:click="addPlan()">Add plan</button></div></div>
        <br/>
        <button type="submit" class="btn btn-success d-block" v-on:click="add()">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase';

export default {
  name: 'PopulateFirebase',
  props: {
    msg: String
  },
  methods:{
    add:function(){
      this.$firebaseRefs.staff.push({profilePicture:this.$data.profilePicture,sex:this.$data.sex,firstName:this.$data.firstName,
      lastName:this.$data.lastName,age:this.$data.age,address:this.$data.address,phone:this.$data.phone,
      position:this.$data.position,hobby:this.$data.hobby,married:this.$data.married,plans:this.$data.plans});
    },
    addPlan:function(){
      this.$data.plans.push({name:this.$data.plan,fromT:this.$data.fromT,toT:this.$data.toT});
      this.$data.plan='';
      this.$data.fromT='';
    }
  },
  data() {
    return {
      profilePicture:'',
      sex:'female',
      firstName:'',
      lastName:'',
      age:0,
      address:'',
      phone:'',
      position:'',
      hobby:'',
      married:false,
      plan:'',
      fromT:'',
      toT:'',
      plans:[]
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
input[type="text"],fieldset,input[type="checkbox"]{
  width:40%;
  margin:6px;
}
input[type="number"]{
width:40%;
margin:6px;
}

</style>
