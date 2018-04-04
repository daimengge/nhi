<template>
  <div class="about">
      <div  id="soso">
           <div class="soso_2">
                <HelloWorld/>
           </div>
           <div class="soso_3">
                <div class="soso_3_1" v-for="i in arr">
                  <figure>
                     <img :src="i.img"/>
                     <figcaption>
                     <h4>{{i.name}}</h4> 
                     <p>地区:{{i.diqu}}</p>
                     <p>户型:{{i.huxing}}</p>
                     <p>价格:{{i.jiage}}</p>
                     </figcaption>
                  </figure>


                </div>


             </div>
             <div class="soso_3">
                <div class="soso_3_1" v-for="i in arr">
                  <figure>
                     <img :src="i.img"/>
                     <figcaption>
                     <h4>{{i.name}}</h4>
                      <p>地区:{{i.diqu}}</p>
                     <p>户型:{{i.huxing}}</p>
                     <p>价格:{{i.jiage}}</p>
                     </figcaption>
                  </figure>
                </div>

             </div>
             <div class="soso_3">
                 <div class="soso_3_1"  v-for="i in arr">
                  <figure >
                     <img :src="i.img"/>
                     <figcaption> 
                     <h4>{{i.name}}</h4>
                      <p>地区:{{i.diqu}}</p>
                     <p>户型:{{i.huxing}}</p>
                     <p>价格:{{i.jiage}}</p>
                     </figcaption>
                   </figure>
                 </div>
             </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from '../components/zujian.vue'
export default {
	components: {
    HelloWorld

   },
	data(){
		return{
           arr:[]
		}
	},
	created(){
		this.$http.get("http://localhost:8000").then(e=>this.arr=e.body)

	}
}
</script>
<style>
#soso{
	width: 1000px;
	margin:0 auto;
	margin-top:50px; 
	overflow:hidden;
}
.soso_1{
	width: 650px;
	float: left;
}
.soso_3{
	width: 650px;
	float: left;
	background:#8d9095; 
	margin-top:30px;
	
}
.soso_3_1{
	width: 32.5%;
	height: 245px;
	float:left;
    background:#fff;
    margin-left:0.5%;
}
.soso_3_2{
	width: 100%;
	height: 80px;
	text-align:center; 
}
.soso_3_2 h3{
	margin-top:15px;
}
.soso_3_2 p{
     font-size:14px;
}
.soso_3_1 img{
	width: 100%;
}
.soso_3_1 p{
	font-size:14px;
}
.soso_3_1 h4{
	line-height:50px;
}
.soso_3_3{
	width: 100%;
	height: 80px;
	text-align:center; 
	float:left;
}
.soso_3_3 a{
	display:block;
	width: 120px;
	line-height: 30px;
	padding:1px;
	border:1px solid #000; 
	margin:0 auto;
	margin-top:30px;
}
.soso_2{
  width:340px;
  float:right;
}
</style>
