<template>
	<view>
		<view v-show="data" class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" 
				:indicator-dots="indicatorDots" 
				:autoplay="autoplay" :interval="interval" 
				:duration="duration">
					<template v-for="(item,index) in data" :index="index">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image :src="item.img_url" mode=""></image>
							</view>
						</swiper-item>
					</template>					
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bannertype:Number
		},
		data(){
			return{
				// background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				data:[]
			}
		},
		created() {
			this.getbanner();
		},
		methods:{
			//获取banner图
			getbanner(){
				//获取数据
				this.$myRequest({
					url:'index/banner',
					data:{},
					methods:"GET"
					
				}).then(res=>{
					// console.log(res);
				// const data = JSON.parse(res.data);
					if(res.data.code == 0){
						// console.log(res.data.msg);
						// console.log(res.data.data);
						for (var i = 0; i < res.data.data.length; i++) {
							if(res.data.data[i].type == this.bannertype){//判断类型 1:首页 2:日常保洁 3:开荒保洁 4:家电清洁 5:上门除甲醛 6:最新动态 7:关于我们'
								this.data.push(res.data.data[i]);
								// console.log("this.data");
								// console.log(this.data);
							}else{
								this.data =null;
							}
						}		
					}else if(res.data.code == 1){
						// console.log(res.data.msg);
					}else{
						console.log(res.data.msg)
					}
				})
			},
		}
	}
</script>

<style scoped>
	/* 轮播图 */
	.swiper {
		height: 300upx;
	}
	
	.swiper-item image {
		height: 300upx;
		width: 100%;
	}
	
	#myVideo {
		width: 100%;
		height: 300upx;
	}
</style>
