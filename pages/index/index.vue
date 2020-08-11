<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/swiper/nav.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image src="../../static/swiper/nav.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<image src="../../static/swiper/nav.png" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 九宫格导航 -->
		<view class="gird">
			<view class="gird-item">日常保洁</view>
			<view class="gird-item">日常保洁</view>
			<view class="gird-item">日常保洁</view>
			<view class="gird-item">日常保洁</view>
			<view class="gird-item">日常保洁</view>
			<view class="gird-item">日常保洁</view>
		</view>
		<!-- 精品推荐 -->
		<view class="recommend">
			<image class="recommend-img" src="" mode="widthFix"></image>
			<view class="recommend-list">
				<view class="recommend-content">
					<image src="../../static/font/iconfont.svg" mode=""></image>
					<view class="des">
						<h2>日常上门保洁服务</h2>
						<view class="mark">
							<p class="star iconfont iconxing">专业保洁师</p>
							<p class="star iconfont iconxing">专业保洁师</p>
							<p class="star iconfont iconxing">专业保洁师</p>
							<p class="star iconfont iconxing">专业保洁师</p>
						</view>
						<p class="price">价格:<span>60</span>元/小时</p>
					</view>
				</view>
				<view class="btn">
					<view class="consult">在线咨询 </view>
					<view class="order">立即预约</view>
				</view>
			</view>
		</view>
		<!-- 服务介绍 -->
		<view class="server">
			<view class="title">
				<image src="../../static/font/iconfont.svg" mode=""></image>
				<h2>速达易家</h2>
			</view>
			<view class="itemcontent"></view>
			<view class="itemcontent"></view>
			<view class="itempic"></view>
			<view class="">放心服务</view>
			<view class="">放心服务</view>
			<view class="">放心服务</view>
			<view class="">放心服务</view>
			<view class="">放心服务</view>
			<view class="">放心服务</view>
			<view class="title">
				<image src="../../static/font/iconfont.svg" mode=""></image>
			</view>
		</view>
		<!-- 服务宗旨 -->
		<view class="guide">
			<view class="guide-list">
				<p class="icon"></p>
				<h1>专业</h1>
				<li>专业培训</li>
				<li>专业培训</li>
				<li>专业培训</li>
			</view>
			<view class="guide-list">
				<p class="icon"></p>
				<h1>专业</h1>
				<li>专业培训</li>
				<li>专业培训</li>
				<li>专业培训</li>
			</view>
			<view class="guide-list">
				<p class="icon"></p>
				<h1>专业</h1>
				<li>专业培训</li>
				<li>专业培训</li>
				<li>专业培训</li>
			</view>
		</view>
		<!-- 底部版权 -->
		<view class="footer">
			<p></p>
			<p></p>
			<p></p>
			<p></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	/* 轮播图 */
	.swiper {
		height: 278upx;
	}

	.swiper-item image {
		height: 278upx;
		width: 100%;
	}

	#myVideo {
		width: 100%;
		height: 300upx;
	}
	/* 九宫格导航 */
	.gird{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #f0ffe2;
		height:300upx ;
		padding: 9upx;
		border-top: 1upx solid #CCCCCC;
		border-bottom:1upx solid #CCCCCC ;
		align-items: center;
		margin-top: 30upx;
		/* box-sizing: border-box; */
	}
	.gird .gird-item{
		width: 220upx;
		height: 90upx;
		justify-content: center;
		display: flex;
		align-items: center;
		color: white;
		border-radius: 0.4rem;
		background-color: #007AFF;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	/* 精品推荐 */
	.recommend{
		
	}
	.recommend-img{
		background-color: #007AFF;
		width: 100%;
		height: 100upx;
	}
	.recommend-list{
		padding: 9upx;
		background-color:#f0ffe2 ;
	}
	.recommend-content{
		display: flex;
	}
	.recommend-content image{
		width: 150upx;
		height:150upx;
		border-radius: 0.4rem;
		background-color: #007AFF;
	}
	.recommend-content .des{
		padding-left: 20upx;
	}
	.recommend-content .des h2{
		
	}
	.recommend-content .des .mark{
		display: flex;
		flex-wrap: wrap;
	}
	.recommend-content .des .mark p{
		padding-left:12upx ;
		padding: 0;
	}
	.recommend-list .btn{
		display: flex;
		justify-content: space-between;
	}
	.recommend-list .btn view{
		width: 240upx;
		height: 50upx;
		border-radius: 0.8rem;
		color: #FFFFFF;
		text-align: center;
	}
	.recommend-list .btn .consult{
		background-color:#ea5514 ;
	}
	.recommend-list .btn .order{
		background-color:#009844 ;
	}
	/* 服务宗旨 */
	.guide{
		display: flex;
		justify-content: space-around;
	}
	
</style>
