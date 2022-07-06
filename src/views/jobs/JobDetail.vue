<template>
  <div v-if="job">
    <h1>Job title - {{job.title}}</h1>
    <p>Job detail - {{job.detail}}</p>
  </div>
</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      job:null
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs/'+this.id)
    .then(((response)=>{
      return response.json()
    }))
    .then((data)=>{
      this.job=data
    })
    .catch(()=>{
      console.log(err.message());
    })
  }
  // data(){
  //   return{
  //     id:this.$route.params.id
  //   }
  // }
}
</script>

<style>

</style>