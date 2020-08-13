<template>
	<view>
		<view class=" ">
			<view>
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
				 @error="videoErrorCallback"  enable-danmu danmu-btn controls></video>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* 视频 */
	#myVideo {
		border-top: 1upx solid #e8e8e8;
		
		width: 100%;
		height: 600upx;
		padding: 0 ;
		/* margin-top: 15upx; */
	}
</style>
