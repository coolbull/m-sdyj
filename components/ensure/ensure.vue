<template>
	<view>
		<view class="ensure">
			<!-- 服务说明 -->
			<view class="introduce">
				<standard :ensureserver="ensureserver" :ensuretxt="ensuretxt"></standard>
			</view>
			<view class="plist">
				<view class="iconfont iconrenyuan-05"></view>
				<view class="deslist">
					<h4>人员保障</h4>
					<p>专职员工、规范培训，身份联网认证服务过程有把控</p>
				</view>
			</view>
			<view class="plist">
				<view class="iconfont iconcircle-check"></view>
				<view class="deslist">
					<h4>健康保障</h4>
					<p>服务人员均通过健康认证，每年定期组织体检，保障雇
						主家庭的健康。</p>
				</view>
			</view>
			<view class="plist">
				<view class="iconfont icondunpai"></view>
				<view class="deslist">
					<h4>品质保障</h4>
					<p>未按标准使用工具或未按要求完成，不满意重做。</p>
				</view>
			</view>
			<view class="plist">
				<view class="iconfont iconsi"></view>
				<view class="deslist">
					<h4>隐私保障</h4>
					<p>服务过程中，未经允许，不擅自使用客户个人物品，不
						泄露客户隐私</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Standard from "../standard/standard.vue"
	export default {
		components:{
			Standard
		},
		data(){
			return{
				ensureserver:"服务保障",
				ensuretxt:"全面保障您的权益"
			}
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
