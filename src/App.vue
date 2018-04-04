<template>
  <div id="header">
     <div class="header-1">
         <img src="./assets/logo1.png"  class="img-1">
         <div id="nav">
             <router-link to="/">首页</router-link> |
             <router-link to="/about/:1">全新楼盘</router-link> |
             <router-link to="/about/:2">二手楼盘</router-link> |
             <router-link to="/about/:3">全新商铺</router-link>|
             <router-link to="/qxsp">楼市动态</router-link>|
             <router-link to="/qxsp">联系我们</router-link>
         </div>
         <span> <img src="./assets/dianhua_03.png" alt="" class="dh"> 008-6666 6666 <button class="zx">咨询电话</button></span>
     </div>
        <router-view/>
  </div>
</template>
<script>


</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  color:#000;
  font-size:14px;
  text-decoration:none;
}
.img-1{
  height: 70px;
  float:left;
}
.header-1{
  width: 90%;
  margin: 0 auto;  
  line-height:70px; 
  overflow: hidden;
}
#nav{
  float:left;
  margin-left:40px;
  font-size:14px;
}
.header-1 span{
  float:right;
  font-size: 14px;
  color:#8d9095;
}
.dh{
  margin-bottom:-3px;
}
.zx{
  background:#3a79e8;
  color:#fff;
  border: none;
  border-radius:2px;
  padding:0 5px; 
}
.lunbo{
  width: 1100px;
  height: 400px;
  background:red;
  margin:0 auto;
  margin-top:20px;
}


</style>
