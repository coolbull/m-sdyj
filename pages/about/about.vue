<template>
	<view class="content">
		<!-- 导航简介 -->
		<view class="nvatitle">
			<view class="iconfont iconshuxian"></view>
			<view class="text">速达易家简介</view>
		</view>
		<p> &nbsp;&nbsp;速达易家家政服务有限公司，是经工商局注册、税务局登记、国家信息化部备案的正规的保洁公司。专业从事家政保洁服务、开设：开荒保洁、日常保洁、家电清洗、上门除甲醛、等服务。速达易家家政服务有限公司为了创建品牌企业，为了更好的服务广大客户而推出的延伸服务，实行了扎实的技术实践培训，规范化企业管理，提供专业的优质服务，以此来取得广大客户的信任和支持。为了更好的服务客户，已开通全国免费电话:400-836-0510以便联系。有什么</p>
		<view class="nvatitle">
			<view class="iconfont"></view>
			<view class="text">速达易家简介</view>
		</view>
		<view class="projects">
			<view class="item">
				日常保洁
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item">
				日常保洁
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item">
				日常保洁
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item">
				日常保洁
				<span class="iconfont iconhot"></span>
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
	/* 导航简介 */
	.nvatitle{
		border-top: 2upx solid #C0C0C0;
		border-bottom: 2upx solid #C0C0C0;
		display: flex;
		font-size: 48upx;
		align-items: center;
		margin-bottom: 45upx;
	}
	.nvatitle .iconfont{
		color: #007635;
		font-size: 36upx;
		/* width: 5upx; */
	}
	.nvatitle .text{
		font-size: 36upx;
	}
	/* 服务项目 */
	.projects{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-left: 9upx;
		margin-right: 9upx;
	}
	.projects .item{
		border-radius: 0.2rem;
		width: 25%;
		height: 75upx;
		text-align: center;
		background-color: #f6f6f6;
		border: 2upx solid #CCCCCC;
		position: relative;
		line-height: 75upx;
		margin-top: 35upx;
	}
	.projects .item span{
		position: absolute;
		right: -2upx;
		top: -26upx;
		color: #d70202;
		font-size: 16upx;
	}
</style>
