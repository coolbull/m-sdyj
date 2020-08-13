<template>
	<view>
		<view class="standard-hand">
			<view class="line"></view>
			<h2>满意服务</h2>
			<view class="line"></view>
		</view>
		<view class="pip"><span>日常保洁服务标准</span></view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				standard:[
					{
						h:"满意服务",
						pip:"日常保洁服务标准"
					}
				]
			}
		}
	}
</script>

<style scoped>
	/* 服务标题公用样式 */
	.standard-hand{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.standard-hand h2{
		padding: 30upx;
	}
	.standard-hand .line{
		width: 20%;
		height: 4upx;
		background-color: #007635;
	}
	 .pip{
		display: flex;
		justify-content: center;
	}
	 .pip span{
		display: block;
		height: 60upx;
		width: 40%;
		background-color:#007635;
		text-align: center;
		padding-left: 30upx;
		padding-right: 30upx;
		border-radius: 1rem;
		color: #FFFFFF;
		line-height: 70upx;
		font-size: 30upx;
	}
</style>
