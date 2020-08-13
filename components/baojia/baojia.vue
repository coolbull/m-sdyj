<template>
	<view>
		<view class="baojia">
			<image src="../../static/dailycleaning/boajia.png" mode=""></image>
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
	</view>
</template>

<script>
</script>

<style scoped>
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
		width: 83%;
		height: 136upx;
		margin-left: 15upx;
		margin-right: 15upx;
		margin-top: 30upx;
		border-radius: 0.2rem;
		/* display: block; */
	
	}
	
	.baojia p {
		text-align: center;
		margin-bottom: 30upx;
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
</style>
