<template>
	<view>
		<view class="standard-hand">
			<view class="line"></view>
			<h2 v-if="standardtitile">{{standardtitile}}</h2>
			<h2 v-else>{{ensureserver}}</h2>
			<view class="line"></view>
		</view>
		<view class="pip" v-if="standarddes"><span>{{standarddes}}</span></view>
		<view class="pip" v-else><span>{{ensuretxt}}</span></view>
	</view>
</template>

<script>
	export default {
		props:{
			standardtitile:String,
			standarddes:String,
			ensureserver:String,
			ensuretxt:String
		},
		data(){
			return{

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
		line-height: 60upx;
		font-size: 30upx;
	}
</style>
