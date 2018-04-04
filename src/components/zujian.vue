<template>
  <div class="hello">
    <div class="lsdt">
               <h4><span></span>楼市动向 - NEWS  <a href="#">阅读更多</a></h4>
               <ul  v-for="i in xq">
             
                   <li><p class="p1">{{i.name}}</p>
                       <p class="p2">{{i.com}}</p>
                   </li>
               </ul>
    </div>
    
  </div>
</template>

<script>
export default {

  data(){
    return{
           xq:[]
    }
  },
  created(){
    this.$http.get("http://localhost:8001").then(e=>this.xq=e.body)

  }
}
</script>
<style>
.lsdt{
  width: 90%;
  margin:0 auto;
  padding-top:20px; 
  background:#f7f7f7;

}
.lsdt h4{
  display:block;
  line-height: 30px;
  margin-top:30px; 
}
.lsdt span{
  display:block;
  width: 15px;
  height: 15px;
  background:#000;
  float:left;
  margin:7px 5px 0 5px;
}
.lsdt a{
  display:block;
  width:80px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border:1px solid  #000;
  float: right;
  text-align:center; 
  margin-right:20px; 
}
.lsdt li{
  margin:10px;
}
.p1{
  font-size:14px;

}
.p2{
  font-size:12px;
  
}
</style>
