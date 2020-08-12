<template>
	<view class="content">
		<view class="prove">
			<view class="item">
				<view class="iconfont iconnvren"></view>
				<view class="txt">服务家电：家具、地板、墙面、窗帘等</view>
			</view>
			<view class="list">
				<view class="listitem">
					<image src="../../static/logo.png" width="150upx" height="150upx" mode=""></image>
					<p>专业师傅上门检测</p>
				</view>
				<view class="listitem">
					<image src="../../static/logo.png" width="150upx" height="150upx" mode=""></image>
					<p>专业师傅上门检测</p>
				</view>
				<view class="listitem">
					<image src="../../static/logo.png" width="150upx" height="150upx" mode=""></image>
					<p>专业师傅上门检测</p>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.prove{
		background-color: #f0ffe2;
		padding-left: 24upx;
		padding-right: 24upx;
	}
	.prove .item{
		display: flex;
		align-items: center;
	}
	.item .iconnvren{
		padding-right: 30upx;
		color: #007635;
	}
	.item .txt{
		font-weight: bold;
	}
	.prove .list{
		display: flex;
		justify-content: space-between;
	}
	.prove .list .listitem image{
		border: 2upx solid #007635;
		border-radius: 0.3rem;
		width: 200upx;
		height: 180upx;
	}
	.prove .list .listitem p{
		text-align: center;
		font-size: 18upx;
	}
</style>
