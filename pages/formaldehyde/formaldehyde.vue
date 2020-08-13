<template>
	<view class="content">
		<Swiper :image="image"></Swiper>
		<Video></Video>
		<Gird></Gird>
		<Baojia></Baojia>
		<standard></standard>
		<Prove :prove="prove" :list="list"></Prove>
		<view class="pic"><image src="" mode=""></image></view>
		<view class="pic"><image src="" mode=""></image></view>
		<view class="pic"><image src="" mode=""></image></view>
		<ensure></ensure>
		<Footer></Footer>
		<Tab></Tab>
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
				image: [{
						path: "../../static/index/daliy.png"
					},
					{
						path: "../../static/index/wastelang.png"
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
	.pic image{
		width: 100% !important;
	}
</style>
