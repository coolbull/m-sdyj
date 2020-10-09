<template>
	<view>
		<view class=" ">
			<view>
				<video  id="myVideo" :src="data.video_url"   enable-danmu danmu-btn controls></video>
				 <!-- <video v-else  id="myVideo" :src=house @error="videoErrorCallback"  enable-danmu danmu-btn controls></video> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			type:Number
		},
		data() {
			return {
				data:{}
			}
		},
		created() {
			this.getVideo();
		},
		methods:{
			//获取视频
			getVideo(){
				//获取数据
				this.$myRequest({
					url:'other/get-video',
					data:{},
					methods:"GET"
				}).then(res=>{
					if(res.data.code == 0){
						// console.log(res.data.msg);
						for (var i = 0; i < res.data.data.length; i++) {
							if(res.data.data[i].type == this.type){//判断类型 类型 1：日常保洁 2：开荒保洁 3：家电清洁 4：上门除甲醛
								this.data = res.data.data[i];
							}
						}	
					}else if(res.data.code == 1){
						console.log(res.data.msg);
					}else{
						console.log(res.data.msg)
					}
				})
			}
		}
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
