<template>
	<view>
		<!-- 轮播图 -->
		<Swiper :image="image"></Swiper>
		<view class="line" style="height: 2upx;background-color:#e8e8e8; width: 100%;margin-top: 15upx;"></view>
		<!-- 视频 -->
		<Video></Video>
		<!-- 九宫格导航 -->
		<Gird></Gird>
		<!-- 报价 -->
		
		<!-- 场景 -->
		<view class="scene">
			<view class="title">服务场景图 服务满意为止</view>
			<view class="tag">
				<view class="item">
					<p>自家员工<span class="iconfont iconcircle-check"></span></p>
					<p>没有中间商<span class="iconfont iconcircle-check"></span></p>
					<p>价格统一<span class="iconfont iconcircle-check"></span></p>
				</view>
			</view>
			<view class="mdl">
				<block v-for="(item,index) in mdllist" :index="index">
					<view class="list">
						<image class="listpic" :src=item.bigicon mode=""></image>
						<view class="des">
							<image :src=item.smallicon mode=""></image>
							<p>{{item.p}}</p>
						</view>
					</view>
				</block>
			</view>
			<view class="tip">
				<h2>温馨提示:</h2>
				<p>仅适用于日常家庭室内保洁，新房开荒保洁不在服务范围。不可用于学校、办公室、商铺、出(群)群)租房、新装修房、长期未入住房、					宿舍楼、自建房等房子类型保洁
				</p>
			</view>
		</view>
		<!-- 服务标准 -->
		<standard :standardtitile="standardtitle" :standarddes="standarddes" ></standard>
		<view class="itempic"><image  src="../../static/dailycleaning/b1.png" mode=""></image></view>
		<!-- 服务内容 -->
		
		<Baojia></Baojia>
		<view class="insturces">
			<block v-for="(item,index) in insturces" :index="index">
			<h4>{{item.title}}</h4>
			<p>{{item.content}}</p>
			</block>
		</view>
		
		<!-- 服务说明 -->
		<standard :ensureserver="ensureserver" :ensuretxt="ensuretxt"></standard>
		<!-- 价格说明 -->
		<view class="standardprice">
			<h2>日常保洁服务价格标准</h2>
			<table class="tablecss" border="0" cellspacing="0">
			<tr>
			<th width="33.3%">类型</th>
			<th width="33.3%">时长/小时</th>
			<th width="33.3%">收费/元</th>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>2</td>
			<td>88</td>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>3</td>
			<td>122</td>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>4</td>
			<td>148</td>
			</tr>
			</table>
			<h4>温馨提示</h4>
			<p> 保洁员上门前清您确保家中留人，确保联系电话畅通。客户您好，预约后请保证家里水、电、气畅通。</p>
		</view>
		<!-- 价格说明 -->
		<view class="standardprice">
			<h2>日常保洁服务价格标准</h2>
			<table class="tablecss" border="0" cellspacing="0">
			<tr>
			<th width="33.3%">类型</th>
			<th width="33.3%">时长/小时</th>
			<th width="33.3%">收费/元</th>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>2</td>
			<td>88</td>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>3</td>
			<td>122</td>
			</tr>
			<tr>
			<td>日常保洁</td>
			<td>4</td>
			<td>148</td>
			</tr>
			</table>
			<h4>温馨提示</h4>
			<p> 保洁员上门前清您确保家中留人，确保联系电话畅通。客户您好，预约后请保证家里水、电、气畅通。</p>
		</view>
		<!-- 流程 -->
		<view class="procedure">
			//<span>日常保洁预约流程</span>//
		</view>
		<view class="itempic" style="width: 92%;text-align: center;padding-left: 5%;"><image   src="../../static/dailycleaning/procedure.png" mode=""></image></view>
		<ensure></ensure>
		<guide></guide>
		<Footer></Footer>
		<tab></tab>
	</view>
</template>
<script>
	import Standard from "../../components/standard/standard.vue";
	import Swiper from "../../components/swiper/swiper.vue";
	import Ensure from "../../components/ensure/ensure.vue";
	import Guide from "../../components/guide/guide.vue";
	import Footer from "../../components/footer/footer.vue"
	import Tab from "../../components/tab/tab.vue";
	import Video from "../../components/video/video.vue";
	import Gird from "../../components/gird/gird.vue"
	import Baojia from "../../components/baojia/baojia.vue"
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
			Baojia
		},
		data() {
			return {
				standardtitle:"满意服务",
				standarddes:"日常保洁服务标准",
				ensureserver:"服务说明",
				ensuretxt:"日常保洁服务标准",
				image: [
					{
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
				gird:[
					{
						path:""
					},
				],
				mdllist:[
					{
						bigicon:"../../static/dailycleaning/b5.png",
						smallicon:"../../static/dailycleaning/i2.png",
						p:"清洁玻璃"
					},
					{
						bigicon:"../../static/dailycleaning/b3.png",
						smallicon:"../../static/dailycleaning/i6.png",
						p:"清洁家具"
					},
					{
						bigicon:"../../static/dailycleaning/b2.png",
						smallicon:"../../static/dailycleaning/i5.png",
						p:"清洁地板"
					},
					{
						bigicon:"../../static/dailycleaning/b6.png",
						smallicon:"../../static/dailycleaning/i3.png",
						p:"清洁尘埃毛"
					},
					{
						bigicon:"../../static/dailycleaning/b1.png",
						smallicon:"../../static/dailycleaning/i4.png",
						p:"清洁厨房"
					},
					{
						bigicon:"../../static/dailycleaning/b4.png",
						smallicon:"../../static/dailycleaning/i1.png",
						p:"清洁冰箱"
					},
				],
				insturces:[
					{
						title:"玻璃",
						content:"目视无水痕、无手印、无污渍、光亮洁净。"
					},
					{
						title:"卫生间",
						content:"洗漱台、镜子、洁具、马桶不锈钢管件、垃圾桶、门和淋浴房玻璃等设施均光亮洁净无污渍、物品摆放整齐"
					},
					{
						title:"厨房",
						content:"墙体、不锈钢管件、地面、灶台水池、油烟机表面、台面、厨房电器表面、柜子表面无污渍灰尘油渍、垃圾清理。"
					},
					{
						title:"客厅/餐厅/阳台",
						content:"家具表面、地面、电器表面、茶几、餐桌、桌子、电视柜、沙发、垃圾清理。"
					},
					{
						title:" 清洁工具",
						content:"如拖把、扫把等清理干净，垃圾带走并扔到规范地点。"
					},
					{
						title:"服务时长",
						content:" 服务时长打扫满，并和客户确认清洁无问题后，方可离开"
					}
				]
			}
		},
		methods: {
		},
	}
</script>

<style scoped>
	



	/* 场景 */
	.scene{
		margin-left: 9upx;
		margin-right: 9upx;
		justify-content: center;
	}
	.scene .title{
		font-size: 46upx;
		text-align: center;
	}
	.tag .item{
		display: flex;
		justify-content: space-around;
	}
	.tag .item .iconcircle-check{
		color: #188b42;
	} 
	.scene .mdl{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.scene .list{
		display: flex;
		flex-wrap: wrap;
		width: 48%;
		justify-content: center;
	}
    .list .listpic{
		width: 100%;
		height: 240upx;
	}
	.des{
		display: flex;
		margin-top: 15upx;
		justify-content: center;
		text-align: center;
	}
	.des image{
		width: 40upx;
		height: 40upx;
		padding-right: 15upx;
	}
	/* 温馨提示 */
	.tip{
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		padding: 15upx;
	}
	.tip h2{
		color: #007635;
		margin-top: 30upx;
		font-size: 28upx;
	}
	.tip p{
		margin-bottom: 30upx;
		font-size: 24upx;
	}
	/* 服务标准 */
	.standard{
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
	}
	.itempic image{
		margin-top: 30upx;
		width: 100% !important;
	}
	.standard image{
		margin-top: 30upx;
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
	/* 服务价格 */
	.standardprice{
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		padding: 15upx;
	}
	.standardprice h4{
		padding-top: 30upx;
		color: #007635;
	}
	.standardprice p{
		font-size: 20upx;
		color: #CCCCCC;
	}
	.tablecss{text-align:center; border:1px solid #007635;border-bottom:0;border-left:0;width: 100%;}
	.tablecss th{color:#808080; line-height:60upx;border-bottom:1px solid #007635;border-left:1px solid #007635}
	.tablecss td{font-size:28upx;line-height:60upx;border-bottom:1px solid #007635;border-left:1px solid #007635}
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
