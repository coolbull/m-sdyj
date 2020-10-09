<template>
	<view class="content">
		<Swiper :bannertype="bannertype"></Swiper>
		<Video :type="type" style="margin-top: 15upx;border: 1upx solid #e8e8e8;padding-top: 15upx;"></Video>
		<Gird></Gird>
		<Baojia></Baojia>
		<view class="beijing">
			<standard :standardtitile="standardtitle" :standarddes="standarddes" ></standard>
		</view>
		<Prove :prove="prove" :list="list"></Prove>
		<standard :ensureserver="ensureserver" :ensuretxt="ensuretxt"></standard>
		<view class=" balance">
			<view class="pre">
				<p>清洗前</p>
				<image src="../../static/household/1.png" mode=""></image>
			</view>
			<view class="iconfont iconvs vs"></view>
			<view class="after">
				<p style="color: red;">清洗前</p>
				<image src="../../static/household/2.png" mode=""></image>
			</view>
		</view>
		<view class=" balance">
			<view class="pre">
				<p>清洗前</p>
				<image src="../../static/household/3.png" mode=""></image>
			</view>
			<view class="iconfont iconvs vs"></view>
			<view class="after">
				<p style="color: red;">清洗前</p>
				<image src="../../static/household/4.png" mode=""></image>
			</view>
		</view>
		<view class=" balance">
			<view class="pre">
				<p>清洗前</p>
				<image src="../../static/household/5.png" mode=""></image>
			</view>
			<view class="iconfont iconvs vs"></view>
			<view class="after">
				<p style="color: red;">清洗前</p>
				<image src="../../static/household/6.png" mode=""></image>
			</view>
		</view>
		<view class="standard-hand">
				<view class="line"></view>
				<h2>清洗报价</h2>
				<view class="line"></view>
		</view>
		<view class="pip"><span>专业家电无损清洗</span></view>
		<view class="pro">
			<block v-for="(item,index) in pro" :index="index">
				<view class="proitem">
					{{item.proitem}}
				</view>
			</block>
		</view>
		<view class="insturces">
			<h4>温馨提示：</h4>
			<p>以上价格仅供参考，具体价格请提供照片客服报价为准。</p>
		</view>
		
		<!-- <standard></standard> -->
		<ensure></ensure>
		<view class="procedure">
			//<span>清洗家电预约流程</span>//
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
				type:3,
				standardtitle:"家电清洗",
				standarddes:"专业师傅无损清洗",
				ensureserver:"清洗前后",
				ensuretxt:"专业无损清洗优质服务",
				pro:[
					{proitem:"油烟机:￥300元"},
					{proitem:"空调:￥300元"},
					{proitem:"冰箱:￥300元"},
					{proitem:"洗衣机:￥300元"},
					{proitem:"锅炉:￥300元"},
					{proitem:"地暖:￥300元"},
					{proitem:"洗衣机:￥300元"},
					{proitem:"锅炉:￥300元"},
				],
				plist:[
					{}
				],
				prove:[],
				bannertype:4,
				list:[
					{
						src:"../../static/household/household1.png",
						p:"专业清洗师傅"
					},
					{
						src:"../../static/household/household2.png",
						p:"自带工具上门"
					},
					{
						src:"../../static/household/household3.png",
						p:"服务满意收费"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
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
	/* 项目价格 */
	.pro{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-right: 2%;
		padding-top: 30upx;
	}
	.proitem{
		border: 1upx solid #007635;
		text-align: center;
		width: 28%;
		height: 60upx;
		margin-left: 3%;
		line-height: 60upx;
		margin-bottom: 30upx;
		margin-top: 30upx;
	}
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
	/* 对比 */
	.balance{
		display: flex;
		align-items: center;
		border: 1upx solid #e9e9e9;
		padding-left: 30upx;
		padding-right: 30upx;
		justify-content: center;
		margin-top: 30upx;
	}
	.balance .pre{
		width:40% ;
		text-align: center;
	}
	.balance .after{
		width:40% ;
		text-align: center;
	}
	..balance .vs{
		width:20% ;
		color: #007635;
	}
	.pre image{
		width: 100%;
		height: 160upx;
	}
	.after image{
		width: 100%;
		height: 160upx;
	}
</style>
