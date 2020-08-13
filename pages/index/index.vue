<template>
	<view class="content">
		<!-- 操作菜单 -->
		<paper-left-popup :show="show" @hide="hidepopup" @addfriend="addfrined" @clear="clear"></paper-left-popup>
		<!-- 轮播图 -->
		<Swiper :image="image"></Swiper>
		<!-- 九宫格导航 -->
		<view class="gird">
			<view class="gird-item" style="background-image: url(../../static/index/1.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="opendaily">日常保洁</view>
			<view class="gird-item" style="background-image: url(../../static/index/1.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="openwasteland">开荒保洁</view>
			<view class="gird-item" style="background-image: url(../../static/index/2.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="openhousehold">家电清洗</view>
			<view class="gird-item" style="background-image: url(../../static/index/3.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="openformaldehyde">上门除甲醛</view>
			<view class="gird-item" style="background-image: url(../../static/index/4.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="openabout">关于我们</view>
			<view class="gird-item" style="background-image: url(../../static/index/5.png);background-size: auto 100%;background-repeat:no-repeat;"
			 @tap="go">电话联系</view>
		</view>
		<!-- 精品推荐 -->
		<view class="recommend">
			<image class="recommend-img" src="../../static/index/recommend.png" mode="" width="100%" height="100%"></image>
			<block v-for="(item,index) in recommend" :index="index">
				<view class="recommend-list">
					<view class="recommend-content">
						<image :src=item.path mode=""></image>
							<view class="des">
								<h3>{{item.h}}</h3>
								<view class="mark">
									<block block v-for="(items,index) in item.p" :index="index">
										<p class="star iconfont iconxing"><span>{{items.tag}}</span></p>
									</block>
								</view>
								<p class="price">价格:<span style="color: red;">{{item.price}}</span></p>
							</view>
					</view>
					<view class="btn">
						<view class="consult">在线咨询 </view>
						<view class="order" @tap="go">立即预约</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 服务介绍 -->
		<view class="server">
			<view class="title">
				<image src="../../static/index/home.png" mode=""></image>
				<h2>速达易家</h2>
			</view>
			<view class="itemcontent" style="font-weight: bold;">专业家庭服务 线上预约平台</view>
			<view class="itemcontent">速达易家国内的家政服务品牌，家政业务已覆盖全国26个城市为、10万家庭提供服务，好评率达到98%</view>
			<view class="itempic"><image src="../../static/index/family.png" mode=""></image></view>
			<Standard></Standard>
			<view class="itemcontent">留下优秀员工区别传统中介家政, 速达易家采用培训上岗! 经过礼仪与理论培训、身份+健康+技能3重认证合格后上岗!训练有素，自然更优秀</view>
			<view class="itempic"><image src="../../static/index/door.png" mode=""></image></view>
			<Standard></Standard>
			<view class="itemcontent">四大保障，维护您的权益。进过无数次事件表明可以行安全</view>
			<view class="itempic"><image  src="../../static/index/door.png" mode=""></image></view>
			<Standard></Standard>
			<view class="itempic">
				<image src="../../static/index/homedes.png" mode=""></image>
			</view>
		</view>
		<!-- 服务宗旨 -->
		
		<!-- 底部版权 -->
		<Footer></Footer>
		<tab></tab>
	</view>
</template>

<script>
	import paperLeftPopup from '../../components/popup/paper-left-popup.vue';
	import Swiper from "../../components/swiper/swiper.vue";
	import Standard from "../../components/standard/standard.vue";
	import Tab from "../../components/tab/tab.vue";
	import Guide from "../../components/guide/guide.vue";
	import Footer from "../../components/footer/footer.vue";
	export default {
		components: {
			paperLeftPopup,
			Swiper,
			Standard,
			Tab,
			Guide,
			Footer
			
		},
		data() {
			return {
				show: false,
				image: [{
						path: "../../static/index/daliy.png"
					},
					{
						path: "../../static/index/wasteland.png"
					},
					{
						path: "../../static/index/household.png"
					},
					{
						path: "../../static/index/formldehyde.png"
					},
				],
				gird: [{
					text: "日常保洁",
					path: "../"

				}],
				recommend: [
					{
					h: "日常保洁上门服务",
					path:"../../static/index/smalldaliy.png",
					p: [{
							tag: "专业保洁师"
						},
						{
							tag: "提供售后保障"
						},
						{
							tag: "速达易家员工"
						},
						{
							tag: "不磨洋工"
						},
						{
							tag: "服务满意为止"
						},
					],
					price: "60/小时"
				}, 
				{
					h: "开荒保洁上门服务",
					path:"../../static/index/smallland.png",
					p: [{
							tag: "专业保洁师"
						},
						{
							tag: "提供售后保障"
						},
						{
							tag: "速达易家员工"
						},
						{
							tag: "不磨洋工"
						},
						{
							tag: "服务满意为止"
						},
					],
					price: "6元/平方"
				}, 
				{
					h: "家电清洗上门服务",
					path:"../../static/index/house.png",
					p: [{
							tag: "专业保洁师"
						},
						{
							tag: "提供售后保障"
						},
						{
							tag: "速达易家员工"
						},
						{
							tag: "不磨洋工"
						},
						{
							tag: "服务满意为止"
						},
					],
					price: "咨询客服"
				}, 
				{
					h: "上门除甲醛服务",
					path:"../../static/index/jiaquan.png",
					p: [{
							tag: "专业保洁师"
						},
						{
							tag: "提供售后保障"
						},
						{
							tag: "速达易家员工"
						},
						{
							tag: "不磨洋工"
						},
						{
							tag: "服务满意为止"
						},
					],
					price: "50元/平方"
				}, 
				]
			}
		},
		onLoad() {
			// console.log(items.tag);
		},
		methods: {
			//操作菜单
			addfrined() {
				console.log('addfirend');
				this.hidepopup();
			},
			clear() {
				console.log();
				this.hidepopup();
			},
			hidepopup() {
				this.show = false;
			},
			showpopup() {
				this.show = true;
			},
			// 导航页面
			opendaily() {
				uni.navigateTo({
					url: '../dailycleaning/dailycleaning',
				});
			},
			openwasteland() {
				uni.navigateTo({
					url: '../wasteland/wasteland',
				});
			},
			openhousehold() {
				uni.navigateTo({
					url: '../household/household',
				});
			},
			openformaldehyde() {
				uni.navigateTo({
					url: '../formaldehyde/formaldehyde',
				});
			},
			openabout() {
				uni.navigateTo({
					url: '../about/about',
				});
			},
			go() {
				uni.makePhoneCall({

					// 手机号
					phoneNumber: '400-836-0510',

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
			switch (e.index) {
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
	.gird {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #f0ffe2;
		/* height:300upx ; */
		padding: 9upx;
		border-top: 1upx solid #CCCCCC;
		border-bottom: 1upx solid #CCCCCC;
		align-items: center;
		margin-top: 30upx;
		/* box-sizing: border-box; */
	}

	.gird .gird-item {
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
	.recommend {}

	.recommend-img {
		/* background-color: #007AFF; */
		width: 34%;
		height: 64upx;
		text-align: center;
		padding-left: 32%;
		padding-top: 15upx;

	}

	.recommend-list {
		padding: 9upx;
		background-color: #f0ffe2;
		border-bottom: 1upx solid #e5e5e5;
	}

	.recommend-content {
		display: flex;
		margin-top: 30upx;
	}

	.recommend-content image {
		width: 262upx;
		height: 262upx;
		border-radius: 0.4rem;
		background-color: #007AFF;
		flex-shrink: 0;
	}

	.recommend-content .des {
		padding-left: 20upx;
	}

	.recommend-content .des h2 {}

	.recommend-content .des .mark {
		display: flex;
		flex-wrap: wrap;
	}

	.recommend-content .des .mark p {
		padding-left: 18upx;
		padding: 0;
		font-size: 28upx;
		margin-right: 18upx;
	}

	.recommend-list .btn {
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.recommend-list .btn view {
		width: 240upx;
		height: 50upx;
		border-radius: 0.8rem;
		color: #FFFFFF;
		text-align: center;
	}

	.recommend-list .btn .consult {
		background-color: #ea5514;
	}

	.recommend-list .btn .order {
		background-color: #009844;
	}

	/* 服务介绍 */
	.server .title{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.server .title image{
		width: 160upx;
		height: 160upx;
		
	}
	.server .itemcontent{
		text-align: center;
	}
	.server .itempic{
		padding-top: 30upx;
	}
	.itempic image{
		width: 100% !important;
	}
	

</style>
