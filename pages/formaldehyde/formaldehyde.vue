<template>
	<view class="content">
		<Swiper :image="image"></Swiper>
		<Video style="margin-top: 15upx;border: 1upx solid #e8e8e8;padding-top: 15upx;"></Video>
		<Gird></Gird>
		<Baojia></Baojia>
		<view class="beijing">
			<standard :standardtitile="standardtitle" :standarddes="standarddes" ></standard>
		</view>
		<Prove :prove="prove" :list="list"></Prove>
		<view class="standard-hand">
				<view class="line"></view>
				<h2>服务范围</h2>
				<view class="line"></view>
		</view>
		<view class="pip"><span>新鲜空气每一天 全方面除甲醛</span></view>
		<view class="pic"><image src="" mode=""></image></view>
		<ensure></ensure>
		<Footer></Footer>
		<Tab ></Tab>
	</view>
</template>

<script>
	import Prove from "../../components/prove/prove.vue";
	import Standard from "../../components/standard/standard.vue";
	import Swiper from "../../components/swiper/swiper.vue";
	import Ensure from "../../components/ensure/ensure.vue";
	import Guide from "../../components/guide/guide.vue";
	import Footer from "../../components/footer/footer.vue";
	import Tab from "../../components/tab/tab.vue";
	import Video from "../../components/video/video.vue";
	import Gird from "../../components/gird/gird.vue";
	import Baojia from "../../components/baojia/baojia.vue";
	export default {
		components:{
			Standard,
			Swiper,
			Ensure,
			Guide,
			Footer,
			Tab,
			Video,
			Gird,
			Baojia,
			Prove
		},
		data() {
			return {
				standardtitle:"甲醛治理",
				standarddes:"提供治理后的检测报告",
				standardrang:"服务范围",
				standardrangm:"新鲜空气每一天 全方面除甲醛",
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
				prove:[
					{
						txt:"服务人员：速达易家专职员工",
						
					},
					{
						txt:"服务时间：8:00~18:00（具体时间以实际为准)",
						
					},
					{
						txt:"服务家电：家具、地板、墙面、窗帘等",
						
					}
				],
				list:[
					{
						src:"../../static/formaldehyde/item1.png",
						p:"专业师傅上门检测"
					},
					{
						src:"../../static/formaldehyde/item2.png",
						p:"专业除甲醛"
					},
					{
						src:"../../static/formaldehyde/item3.png",
						p:"专提供检测报告"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	/* 背景 */
	.beijing{
		background-color: #f0ffe2;
	}
	.pic image{
		width: 100% !important;
	}
	/* 服务标题公用样式 */
	.standard-hand{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.standard-hand h2{
		padding: 30upx;
	}
	.standard-hand .line{
		width: 20%;
		height: 4upx;
		background-color: #007635;
	}
	 .pip{
		display: flex;
		justify-content: center;
	}
	 .pip span{
		display: block;
		height: 60upx;
		width: 60%;
		background-color:#007635;
		text-align: center;
		padding-left: 30upx;
		padding-right: 30upx;
		border-radius: 1rem;
		color: #FFFFFF;
		line-height: 60upx;
		font-size: 30upx;
		}
</style>
