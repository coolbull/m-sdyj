<template>
	<view class="content">
		<!-- 轮播图 -->
		<Swiper :bannertype="bannertype"></Swiper>
		<!-- 导航简介 -->
		<view class="nvatitle">
			<view class="iconfont iconshuxian"></view>
			<view class="text">速达易家简介</view>
		</view>
		<p>{{data.intr}}</p>
		<view class="nvatitle">
			<view class="iconfont iconshuxian"></view>
			<view class="text">服务项目</view>
		</view>
		<view class="projects">
			<view class="item" @tap="opendaily">
				日常保洁
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item" @tap="openwasteland">
				开荒保洁
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item" @tap="openhousehold">
				家电清洗
				<span class="iconfont iconhot"></span>
			</view>
			<view class="item" @tap="openformaldehyde">
				上门除甲醛
				<span class="iconfont iconhot"></span>
			</view>
		</view>
		<Footer></Footer>
		<Tab></Tab>
	</view>
</template>

<script>
	import Swiper from "../../components/swiper/swiper.vue";
	import Tab from "../../components/tab/tab.vue";
	import Footer from "../../components/footer/footer.vue";
	export default {
		components: {
			Swiper,
			Tab,
			Footer
			
		},
		data() {
			return {
				bannertype:7,
				data:{}
			}
		},
		created() {
			this.getCompanyinfo();
			// uni.$emit('companyinfo',{data:this.data})
			// console.log('aaa');
			
		},
		methods: {
			//home - 获取公司信息
			getCompanyinfo(){
				//获取数据
				this.$myRequest({
					url:'index/company-info',
					data:{},
					methods:"GET"
				}).then(res=>{
					if(res.data.code == 0){
						// console.log(res.data.msg);
							this.data = res.data.data;
					}else if(res.data.code == 1){
						console.log(res.data.msg);
					}else{
						console.log(res.data.msg)
					}
				})
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
		margin-top: 30upx;
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
		margin-bottom: 40upx;
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
