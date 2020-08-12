<template>
	<view>
		<!-- 视频 -->
		<view class=" uni-common-mt">
			<view>
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
				 @error="videoErrorCallback"  enable-danmu danmu-btn controls></video>
			</view>
		</view>
		<!-- 九宫格导航 -->
		<view class="gird">
			<view class="gird-item">
				<image src="../../static/swiper/nav.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/swiper/nav.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/swiper/nav.png" mode=""></image>
			</view>
			<view class="gird-item">
				<image src="../../static/swiper/nav.png" mode=""></image>
			</view>
		</view>

		<!-- 报价 -->
		<view class="baojia">
			<image src="../../static/swiper/nav.png" mode=""></image>
			<view class="title">预约保洁师上门服务</view>
			<p>今天890为用户获取报价</p>
			<p>算一算你所在的地区日常保洁多少前</p>
			<!-- 表单 -->
			<view class="uni-padding-wrap">
				<form @submit="formSubmit" @reset="formReset">
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<select id="skills" name="skills">
									<option value="dailyclening">日常保洁</option>
									<option value="assart"> 开荒保洁</option>
									<option value="formaldehyde">上门除甲醛 </option>
								</select>
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input class="uni-input" name="nickname" placeholder="请输入你的称呼:" />
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="number" class="uni-input" name="time" placeholder="请输入服务时长:" />
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="text" class="uni-input" name="time" placeholder="请输入手机号:" />
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="text" class="uni-input" name="time" placeholder="备注:" />
							</view>
						</view>
					</view>
					<view class="uni-btn-v uni-common-mt">
						<button class="btn-submit" formType="submit" type="primary">立即获取报价</button>
					</view>
					<p class="tips">找在线客服获取报价/拨打400-836-0510获取报价</p>
				</form>
			</view>
		</view>
		<!-- 场景 -->
		<view class="scene">
			<view class="title">服务场景图 服务满意为止</view>
			<view class="tag">
				<view class="item">
					<p>自家员工<span class="iconfont iconcircle-check"></span></p>
					<p>自家员工<span class="iconfont iconcircle-check"></span></p>
					<p>自家员工<span class="iconfont iconcircle-check"></span></p>
				</view>
			</view>
			<view class="mdl">
				<view class="list">
					<image class="listpic" src="../../static/logo.png" mode=""></image>
					<view class="des">
						<image src="../../static/logo.png" mode=""></image>
						<p>玻璃清洁</p>
					</view>
				</view>
				<view class="list">
					<image class="listpic" src="../../static/logo.png" mode=""></image>
					<view class="des">
						<image src="../../static/logo.png" mode=""></image>
						<p>玻璃清洁</p>
					</view>
				</view>
				<view class="list">
					<image class="listpic" src="../../static/logo.png" mode=""></image>
					<view class="des">
						<image src="../../static/logo.png" mode=""></image>
						<p>玻璃清洁</p>
					</view>
				</view>
				<view class="list">
					<image class="listpic" src="../../static/logo.png" mode=""></image>
					<view class="des">
						<image src="../../static/logo.png" mode=""></image>
						<p>玻璃清洁</p>
					</view>
				</view>
			</view>
			<view class="tip">
				<h2>温馨提示:</h2>
				<p>仅适用于日常家庭室内保洁，新房开荒保洁不在服务范围。不可用于学校、办公室、商铺、出(群)群)租房、新装修房、长期未入住房、					宿舍楼、自建房等房子类型保洁
				</p>
			</view>
		</view>
		<!-- 服务标准 -->
		<view class="standard">
			<view class="standard-hand">
				<view class="line"></view>
				<h2>满意服务</h2>
				<view class="line"></view>
			</view>
			<view class="pip"><span>日常保洁服务标准</span></view>
			<image src="../../static/logo.png" mode=""></image>
			<view class="contain">
				<view class="item">
					<h2></h2>
					<p></p>
				</view>
			</view>
		</view>
		<!-- 服务内容 -->
		<view class="insturces">
			<h2>厨房</h2>
			<p>墙体、不锈钢管件、地面、灶台水池、油烟机表面、台面、厨房电器表面、柜子表面无污渍灰尘油渍、垃圾清理。</p>
		</view>
		<!-- 服务说明 -->
		<view class="introduce">
			<view class="standard-hand">
				<view class="line"></view>
				<h2>服务说明</h2>
				<view class="line"></view>
			</view>
			<view class="pip"><span>日常保洁服务标准</span></view>
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
		<image src="procedurepic" width ="100%" mode=""></image>
		<image src="procedurepic2" width ="100%" mode=""></image>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		},
	}
</script>

<style scoped>
	/* 视频 */
	#myVideo {
		width: 100%;
		height: 600upx;
		padding: 0 !important;
	}

	/* 九宫格 */
	.gird {
		display: flex;
		padding: 9upx;
		/* border: 1upx solid #CCCCCC; */
		justify-content: space-between;
	}

	.gird-item {
		width: 20%;
		height: 78upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		/* padding-left: 3%; */
	}

	.gird-item image {
		width: 100%;
		height: 100%;
	}

	/* 报价 */
	.baojia {
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
		text-align: center;
	}

	.baojia image {
		width: 80%;
		height: 112upx;
		margin-left: 15upx;
		margin-right: 15upx;
		margin-top: 30upx;
		border-radius: 0.2rem;
		/* display: block; */

	}

	.baojia p {
		text-align: center;
	}

	/* 表单 */
	.uni-padding-wrap{
		box-sizing: border-box;
		width: 100% !important;
	}
	.uni-padding-wrap .uni-list{
		border: none;
		margin-bottom: 30upx;
	}
	.uni-padding-wrap .uni-list::before{
		display: none;
	}
	.uni-padding-wrap .uni-list .uni-list-cell {
		height: 96upx;
		background-color: #e9e9e9;
		border-radius: 0.4rem;
		box-shadow: 0px 0px 2px 1px rgba(233, 233, 233, 0.5);
		border: none;
	}
	.uni-padding-wrap .uni-list::after{
		display: none;
	}

	#skills {
		padding-left: 24upx;
		background-color: #e9e9e9;
		appearance:none;
		 -moz-appearance:none; 
		 -webkit-appearance:none;
		 outline: none;
		 border: none;
		 background: url(../../static/select/left.png) no-repeat scroll 90% center transparent;
		 padding-right: 560upx;
		 background-size: 30upx;//此三项按情况调整
	}
	option{
		width: 100% !important;
	}
	.uni-padding-wrap .uni-list input{
		background-color:#e9e9e9 ;
		text-align: left;
		outline: none;//边框样式
	}
	.btn-submit{
		background-color: #4cb334;
	}
	.baojia .tips{
		color: #CCCCCC;
		padding-bottom: 40upx;
	}
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
	}
	.tip p{
		margin-bottom: 30upx;
	}
	/* 服务标准 */
	.standard{
		margin-left: 9upx;
		margin-right: 9upx;
		margin-top: 30upx;
		border-radius: 0.4rem;
		border: 1upx solid #CCCCCC;
	}
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
		width: 40%;
		background-color:#007635;
		text-align: center;
		padding-left: 30upx;
		padding-right: 30upx;
		border-radius: 1rem;
		color: #FFFFFF;
		line-height: 70upx;
		font-size: 30upx;
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
	.insturces h2{
		color:#007635;
		
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
