<template>
	<view class="content">
		<Swiper :image="image"></Swiper>
		<Video :daily="daily" style="margin-top: 15upx;border: 1upx solid #e8e8e8;padding-top: 15upx;"></Video>
		<Gird></Gird>
		<Baojia></Baojia>
		<view class="beijing">
			<standard :standardtitile="standardtitle" :standarddes="standarddes" ></standard>
		</view>
		<Prove :prove="prove" :list="list"></Prove>
		<standard :ensureserver="ensureserver" :ensuretxt="ensuretxt"></standard>
		<view class="price">
			<view class="txt">粗开荒6元/m2</view>
			<view class="txt">精开荒8元/m2</view>
		</view>
		<view class="insturces">

			<h4>温馨提示：</h4>
			<p>不包含：灯具、家电拆卸、雨棚、阳光房、挑空房屋高处的玻璃、其它具有危险性的地方。因为开荒清洁的特殊性，清洁没有办法达到百分之百的程度。建议亲在做完清洁后，务必本人验收，我们会返工止亲满意为止。</p>
		</view>
		
		
		<!-- <standard></standard> -->
		<ensure></ensure>
		<view class="procedure">
			//<span>日常保洁预约流程</span>//
		</view>
		<view class="itempic" style="width: 92%;text-align: center;padding-left: 5%;"><image   src="../../static/dailycleaning/procedure.png" mode=""></image></view>
		<Footer></Footer>
		<Tab></Tab>
	</view>
</template>

<script>
	import Standard from "../../components/standard/standard.vue";
	import Swiper from "../../components/swiper/swiper.vue";
	import Ensure from "../../components/ensure/ensure.vue";
	import Guide from "../../components/guide/guide.vue";
	import Footer from "../../components/footer/footer.vue";
	import Tab from "../../components/tab/tab.vue";
	import Video from "../../components/video/video.vue";
	import Gird from "../../components/gird/gird.vue";
	import Baojia from "../../components/baojia/baojia.vue";
	import Prove from "../../components/prove/prove.vue"
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
				daily:"../../static/video/Appliances.mp4",
				standardtitle:"开荒保洁",
				standarddes:"新家开荒洁净体验",
				ensureserver:"开荒报价",
				ensuretxt:"具体开荒请联系保洁",
				plist:[
					{}
				],
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
						txt:"服务范围：客厅、卧室、阳台、厨房等",
						
					}
				],
				list:[
					{
						src:"../../static/wasteland/wasteland1.png",
						p:"专业保洁师"
					},
					{
						src:"../../static/wasteland/wasteland2.png",
						p:"自带工具上门"
					},
					{
						src:"../../static/wasteland/wasteland3.png",
						p:"服务满意为止"
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
	.itempic image{
		margin-top: 30upx;
		width: 100% !important;
	}
	.price{
		display: flex;
		flex-direction: column;
		padding-left: 15%;
		padding-right: 15%;
	}
	.price .txt{
		border: 1upx solid #007635;
		margin-top: 30rpx;
		margin-bottom: 30upx;
		text-align: center;
	}
	/* 服务内容 */
	.insturces{
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		padding: 15upx;
	}
	.insturces h4{
		color:#007635;
		
	}
	.insturces p{
		
		font-size: 24upx;
	}
	/* 流程 */
	.procedure{
		color: #007635;
		height: 200upx;
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		padding-left: 20%;
	}
	.procedure image{
		width: 100% !important;
	}
	.procedure span{
		font-size: 46upx;
		font-weight: bold;
		text-align: center;
		color: #333333;
		line-height: 200upx;
		/* display: block; */
		margin: 0 auto;
	}
</style>
