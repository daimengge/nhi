<template>
<div>
    <div id="lunbo">
            <div id='lunboCon'>
                <img src="../assets/1 (1).jpg" alt="">
                <img src="../assets/1 (2).jpg" alt="">
                <img src="../assets/1 (3).jpg" alt="">
                <img src="../assets/1 (1).jpg" alt="">
            </div>
            <ul id='lunboNum'>
                <li class="checked"></li>
                <li></li>
                <li></li>
            </ul>
           <button id='btnL' type="">&lt;</button>
           <button id='btnR' type="">&gt;</button>
    </div>
    <div  id="soso">
           <div class="soso_1">
                <div class="soso_1_1" v-for="i in arr">
                  <img src="../assets/1 (1).jpg" alt="">
            </div>


           </div>
           <div class="soso_2">
              
              <HelloWorld/>
               <Dianhua/>

           </div>
           <div class="soso_3">
                 <div class="soso_3_2"><h3>全新楼盘</h3><p>- New Apartment -</p></div>
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
                <div class="soso_3_3">

                   <a href="#">浏览更多新楼盘</a>

                 </div>


             </div>
             <div class="soso_3">
                 <div class="soso_3_2"><h3>全新商铺</h3><p>- New Apartment -</p></div>
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
                <div class="soso_3_3">

                   <a href="#">浏览更多新楼盘</a>

                 </div>


             </div>
             <div class="soso_3">
                 <div class="soso_3_2"><h3>二手楼盘</h3><p>- New Apartment -</p></div>
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

                <div class="soso_3_3">

                   <a href="#">浏览更多新楼盘</a>

                 </div>


             </div>
    </div>
</div>  
</template>

<script>
import HelloWorld from '../components/zujian.vue'
import Dianhua from '../components/zujian2.vue'

export default {
	components: {
    HelloWorld,
    Dianhua

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


 //  export default{
 //    datat(){
 //    	return{
 //    		arr:[]


 //    	}
 //    },
 //    // watch:{
 //    // 	"$route"(){
 //    // 		this.$http.post("http://localhost:8000",{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
 //    // 	}
 //    // }
 //    created(){
	// 	this.$http.get("http://localhost:8000").then(e=>this.arr=e.body)
	// }

 //  };



 function getStyle(element,attribute){
                if('currentStyle' in element){
                    //in语法：判断某属性是否存在于某对象里
                    //ie9以下获取非行内样式方法
                   return element.currentStyle[attribute];
                }else {
                    //非ie获取非行内样式方法
                    return getComputedStyle(element)[attribute];
                }
            }
            window.onload=function(){
                 //获取元素
                var lunbo=document.getElementById('lunbo'),
                    lunboCon=document.getElementById('lunboCon'),
                    lunboImg=lunboCon.getElementsByTagName('img'),
                    lunboNum=document.getElementById('lunboNum'),
                    lunboNumLI=lunboNum.getElementsByTagName('li'),
                    btnL=document.getElementById('btnL'),
                    btnR=document.getElementById('btnR');

                //定义相关变量
                var imgW=1200,//单张图片的宽度
                    speed=20, //每次移动的距离
                    num=1, //记录步骤
                    index=0, //图片索引
                    time, // 定时器
                    onOff=true;


              
                 //定义移动
                function move(speed){
                    
                    time=setInterval(function(){
                        if(num>=Math.abs(imgW/speed)){
                            clearInterval(time)
                            num=0;
                            onOff=true;                            
                        }
                        lunboCon.style.left=parseInt(getStyle(lunboCon,'left'))+speed+'px';
                        num++;
                    },30)
                }

                function changeNum(index){
                    for(i=0;i<lunboNumLI.length;i++){
                        lunboNumLI[i].className='';
                    }
                    if(index==lunboImg.length-1){
                        lunboNumLI[0].className='checked';
                    }else{
                        lunboNumLI[index].className='checked';
                    }
                    
                }

                btnR.onclick=function(){

                    if(onOff){
                        onOff=false;
                        if(index>=lunboImg.length-1){
                            lunboCon.style.left='0px';
                            index=0;
                        }
                        move(-speed) 
                        index++;
                        changeNum(index)   
                   }
                }

                btnL.onclick=function(){
                    if(onOff){
                        onOff=false;
                            if(index<=0){
                                lunboCon.style.left=-imgW*(lunboImg.length-1)+'px';
                                index=lunboImg.length-1;
                            }
                            move(speed)
                            index--;
                            changeNum(index)
                    }
                }

                var autoTime=setInterval(function(){
                        btnR.onclick();
                },3000)

                lunbo.onmouseover=function(){
                    clearInterval(autoTime)
                }
                lunbo.onmouseout=function(){
                    autoTime=setInterval(function(){
                        btnR.onclick();
                    },3000)
                }
                    
}
</script>
<style>
/*轮播*/
  *{
    margin: 0;
    padding: 0; 
    list-style: none; 
}
#lunbo{
     position: relative;
      width:1100px;
      height:400px;
      margin:0 auto;
      overflow: hidden;
}
#lunbo #lunboCon{
      position:absolute;
      z-index: 10;
}
#lunbo #btnL,#lunbo #btnR{
    position:absolute;
    z-index: 11;
    top:180px;
}
#lunbo #lunboCon{
    width:4800px;
    height:400px;
}
#lunbo img{
    float:left;
    width: 1200px;
     height: 400px;
}
            #lunbo #btnL{
                left:15px;
            }
            #lunbo #btnR{
                right:15px;
            }

            #lunbo #lunboNum{
                position:absolute;
                z-index: 11;
                left:50%;
                margin-left: -30px;
                bottom: 15px;
            }
            #lunbo #lunboNum li{
                float: left;
                margin:0 5px;
                list-style: none;
                width:10px;
                height:10px;
                border-radius: 5px;
                background: #fff;
            }
            #lunbo #lunboNum li.checked{
                background-color: blue;
            }
/**/
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
.soso_1_1{
	width: 48%;
	height: 100px;
	float: left;
	margin:1%;
	background:#fff;
	background-color:#fff;
}
.soso_1_1 img{
	width: 100%;
	height: 100%;
}
/*.soso_2{
	width: 340px;
	height: 500px;
	float: right;
	background:#000; 
}*/
.soso_3{
	width: 650px;
	float: left;
	background:#f7f7f7; 
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
/**/
.soso_2{
	width:340px;
	float:right;
}


</style>
