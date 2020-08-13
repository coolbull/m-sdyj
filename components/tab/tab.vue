<template>
	<view class="tab">
		<view class="tablist">
			<view class="iconfont iconkefu"></view>
			<view class="txt">在线咨询</view>
		</view>
		<view class="tablist">
			<view class="iconfont icondianhua"></view>
			<view class="txt">电话咨询</view>
		</view>
		<view class="tablist">
			<view class="iconfont iconweixin"></view>
			<view class="txt">添加微信</view>
		</view>
		<view class="tablist">
			<view class="iconfont iconbaojia"></view>
			<view class="txt">获取报价</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.tab{
		position: fixed;
		bottom: 0;
		height: 100upx;
		width: 100%;
		display: flex;
		background-color: #FFFFFF;
	}
	.tablist{
		width: 25%;
		height: 100upx;
		text-align: center;
	}
	.tablist .iconfont{
		color: red;
		font-size: 30upx;
		font-weight: bold;
	}
</style>
