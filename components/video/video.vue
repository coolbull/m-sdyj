<template>
	<view>
		<view class=" ">
			<view>
				<video v-if="daily" id="myVideo" :src=daily @error="videoErrorCallback"  enable-danmu danmu-btn controls></video>
				 <video v-else  id="myVideo" :src=house @error="videoErrorCallback"  enable-danmu danmu-btn controls></video>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			daily:String,
			house:String
		},
		data() {
			return {
				// key: value
			}
		},
	}
</script>

<style scoped>
	/* 视频 */
	#myVideo {
		border-top: 1upx solid #e8e8e8;
		
		width: 100%;
		height: 422upx;
		padding: 0 ;
		/* margin-top: 15upx; */
	}
</style>
