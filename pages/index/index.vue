<template>
	<view class="content">
		<!-- 操作菜单 -->
		<paper-left-popup 
		:show="show" 
		@hide="hidepopup" 
		@addfriend="addfrined"
		@clear="clear"></paper-left-popup>
		<!-- 轮播图 -->
		<Swiper :image="image"></Swiper>
		<!-- 九宫格导航 -->
		<view class="gird">
			<view class="gird-item" style="background-image: url(../../static/index/1.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="opendaily">日常保洁</view>
			<view class="gird-item" style="background-image: url(../../static/index/1.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="openwasteland">开荒保洁</view>
			<view class="gird-item" style="background-image: url(../../static/index/2.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="openhousehold">家电清洗</view>
			<view class="gird-item" style="background-image: url(../../static/index/3.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="openformaldehyde">上门除甲醛</view>
			<view class="gird-item" style="background-image: url(../../static/index/4.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="openabout">关于我们</view>
			<view class="gird-item" style="background-image: url(../../static/index/5.png);background-size: auto 100%;background-repeat:no-repeat;" @tap="go">电话联系</view>
		</view>
		<!-- 精品推荐 -->
		<view class="recommend">
			<image class="recommend-img" src="../../static/index/hot.png" mode="" width="100%" height="100%"></image>
			<view class="recommend-list">
				<view class="recommend-content">
					<image src="../../static/index/smalldaliy.png" mode=""></image>
					<view class="des">
						<h3>日常上门保洁服务</h3>
						<view class="mark">
							<p class="star iconfont iconxing">专业保洁师</p>
							<p class="star iconfont iconxing">提供售后保障</p>
							<p class="star iconfont iconxing">速达易家员工</p>
							<p class="star iconfont iconxing">不磨洋工</p>
							<p class="star iconfont iconxing">服务满意为止</p>
						</view>
						<p class="price">价格:<span style="color: red;">60</span>元/小时</p>
					</view>
				</view>
				<view class="btn">
					<view class="consult">在线咨询 </view>
					<view class="order" @tap="go">立即预约</view>
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
	import paperLeftPopup from '../../components/popup/paper-left-popup.vue';
	import Swiper from "../../components/swiper/swiper.vue"
	export default {
		components:{
			paperLeftPopup,
			 Swiper
		},
		data() {
			return {
				show:false,
				image:[
					{path:"../../static/index/daliy.png"},
					{path:"../../static/index/wastelang.png"},
					{path:"../../static/index/household.png"},
					{path:"../../static/index/formldehyde.png"},
				],
				gird:[
					{
						text:"日常保洁",
						path:"../"
					
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			//操作菜单
			addfrined(){
				console.log('addfirend');
				this.hidepopup();
			},
			clear(){
				console.log();
				this.hidepopup();
			},
			hidepopup(){
				this.show = false;
			},
			showpopup(){
				this.show = true;
			},
			// 导航页面
			opendaily(){
				uni.navigateTo({
					url: '../dailycleaning/dailycleaning',
				});
			},
			openwasteland(){
				uni.navigateTo({
					url: '../wasteland/wasteland',
				});
			},
			openhousehold(){
				uni.navigateTo({
					url: '../household/household',
				});
			},
			openformaldehyde(){
				uni.navigateTo({
					url: '../formaldehyde/formaldehyde',
				});
			},
			openabout(){
				uni.navigateTo({
					url: '../about/about',
				});
			},
			go(){
			 	uni.makePhoneCall({
			 	
			 	// 手机号
			    phoneNumber: '400-135-8966', 
			
				// 成功回调
				success: (res) => {
					console.log('调用成功!')	
				},
			
				// 失败回调
				fail: (res) => {
					console.log('调用失败!')
				}
				
			  });
			}
		},
		//监听原生导航栏点击事件
		onNavigationBarButtonTap(e) {
			// console.log(JSON.stringify());
			switch (e.index){
				case 0:
				console.log("点击了左边按钮");
				uni.navigateTo({
					url: '../index/index',
				});
					break;
				case 1:
				this.showpopup();
					break;
				case 2:
				this.go();
					break;
				default:
					break;
			}
		}
	}
</script>

<style scoped>
	/* 九宫格导航 */
	.gird{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #f0ffe2;
		/* height:300upx ; */
		padding: 9upx;
		border-top: 1upx solid #CCCCCC;
		border-bottom:1upx solid #CCCCCC ;
		align-items: center;
		margin-top: 30upx;
		/* box-sizing: border-box; */
	}
	.gird .gird-item{
		width: 230upx;
		height: 128upx;
		justify-content: center;
		display: flex;
		align-items: center;
		color: white;
		border-radius: 0.4rem;
		/* background-color: #007AFF; */
		margin-top: 30upx;
		margin-bottom: 30upx;
		text-align: center;
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
		margin-top: 30upx;
	}
	.recommend-content image{
		width: 262upx;
		height:262upx;
		border-radius: 0.4rem;
		background-color: #007AFF;
		flex-shrink: 0;
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
		padding-left:18upx ;
		padding: 0;
		font-size: 28upx;
		margin-right: 18upx;
	}
	.recommend-list .btn{
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
		margin-bottom: 30upx;
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
