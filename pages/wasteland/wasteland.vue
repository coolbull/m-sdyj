<template>
	<view class="content">
		<view class="ensure">
			<!-- 服务说明 -->
			<view class="introduce">
				<view class="standard-hand">
					<view class="line"></view>
					<h2>服务说明</h2>
					<view class="line"></view>
				</view>
				<view class="pip"><span>日常保洁服务标准</span></view>
			</view>
			<view class="plist">
				<view class="iconfont iconrenyuan-05"></view>
				<view class="deslist">
					<h4>人员保障</h4>
					<p>专职员工、规范培训，身份联网认证服务过程有把控</p>
				</view>
			</view>
			<view class="plist">
				<view class="iconfont iconrenyuan-05"></view>
				<view class="deslist">
					<h4>人员保障</h4>
					<p>专职员工、规范培训，身份联网认证服务过程有把控</p>
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
	/* 服务说明 */
	.ensure{
		background-color: #f0ffe2;
	}
	.ensure .plist{
		margin-left: 24upx;
		margin-right: 24upx;
		display: flex;
		align-items: center;
	}
	.ensure .plist .iconfont{
		font-size: 88upx;
		color: #007635;
		padding-right: 28upx;
	}
	.ensure .plist p{
		font-size: 18upx;
	}
</style>
