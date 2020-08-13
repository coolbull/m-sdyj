<template>
	<view>
		<view class="gird">
			<view class="gird-item">
				<image src="../../static/dailycleaning/gird1.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/dailycleaning/gird2.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/dailycleaning/gird3.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/dailycleaning/gird4.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* 九宫格 */
	.gird {
		display: flex;
		padding: 9upx;
		/* border: 1upx solid #CCCCCC; */
		justify-content: space-between;
	}
	
	.gird-item {
		width: 20%;
		height: 78upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		/* padding-left: 3%; */
	}
	
	.gird-item image {
		width: 100%;
		height: 100%;
	}
	
</style>
