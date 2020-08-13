<template>
	<view class="guide">
		<view class="guide-list">
			<p class="iconfont icontuanduisvg"></p>
			<h3>专业</h3>
			<li>严格筛选</li>
			<li>专业培训</li>
			<li>专业设备</li>
		</view>
		<view class="guide-list">
			<p class="iconfont icondunpai1"></p>
			<h3>便捷</h3>
			<li>专业客服</li>
			<li>快速上门</li>
			<li>快速理赔</li>
		</view>
		<view class="guide-list">
			<p class="iconfont icondunpai"></p>
			<h3>保障</h3>
			<li>人员保障</li>
			<li>健康保障</li>
			<li>隐私保障</li>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* 服务宗旨 */
	.guide {
		border-top: 1upx solid #e9e9e9
		;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.guide-list .iconfont{
		font-size: 66upx;
		color: #007635;
		font-weight: bold;
	}
	.guide-list li{
		list-style-type:none;
		color: #818181;
	}
</style>
