<template>
	<view>
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" 
				:indicator-dots="indicatorDots" 
				:autoplay="autoplay" :interval="interval" 
				:duration="duration">
					<template v-for="(item,index) in image" :index="index">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image :src="item.path" mode=""></image>
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
			image:Array
		},
		data(){
			return{
				// background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
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
