<template>
	<view>
		<view class="baojia">
			<image src="../../static/dailycleaning/boajia.png" mode=""></image>
			<p>算一算你所在的地区日常保洁多少钱?</p>
			<!-- 表单 -->
			<view class="uni-padding-wrap">
				<form @submit="formSubmit" @reset="formReset">
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<picker @change="bindPickerChange" :value="index" :range="array" id="skills">
								        <view class="uni-input" style="width: 170upx;padding-left: 0;text-align: left;background: none;">{{array[index]}}</view>
								</picker>
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input class="uni-input" name="name" placeholder="请输入你的称呼:" />
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<!-- <view>{{date}}</view> -->
									<input type="text" class="uni-input" name="time" :value="date" v-model="date" placeholder="请输入预约时间:" disabled="disabled"/>
								</picker>
								
							</view>
						</view>
					</view>
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="text" class="uni-input" name="phone" placeholder="请输入手机号:" />
							</view>
						</view>
					</view>
					<!-- 地址 -->
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="text" class="uni-input" name="address" placeholder="请填写大概位置地区:" />
							</view>
						</view>
					</view>
					<!-- 备注 -->
					<view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<input type="text" class="uni-input" name="remarks" placeholder="备注:" />
							</view>
						</view>
					</view>
					<view class="uni-btn-v uni-common-mt">
						<button class="btn-submit" form-type="submit" type="primary">立即获取报价</button>
					</view>
					<p class="tips">找在线客服获取报价/拨打400-836-0510获取报价</p>
				</form>
			</view>
		</view>
		<!-- 时间选择 -->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				 array: ['日常保洁', '开荒保洁', ,'家电清洗','上门除甲醛'],
				 index:0,
				 date:""
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods:{
			//选择预约时间
			bindDateChange: function(e) {
				this.date = e.target.value;
				console.log(this.date);
			},
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value;
						// console.log(this.array[this.index]);
			},
			formSubmit(e){
				uni.showLoading({
					title:"提交中"
				});
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value;
				console.log(formdata);
				
				//获取数据
				this.$myRequest({
					url:'other/reservation',
					data:{
						name:formdata.name,
						phone:formdata.phone,
						address:formdata.address,
						time:formdata.time,
						remarks:formdata.remarks,
						type:this.index+1,
					},
					methods:"POST"
				}).then(res=>{
					if(res.data.code == 0){
						console.log(res.data.msg);
							this.data = res.data.data;
							uni.hideLoading();
							uni.showModal({
							    title: '提示',
							    content: res.data.msg,
							    success: function (res) {
							        if (res.confirm) {
							            console.log('用户点击确定');
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
					}else if(res.data.code == -1){
						console.log(res.data.msg);
						uni.hideLoading();
						uni.showModal({
						    title: '提示',
						    content: res.data.msg,
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}else{
						console.log(res.data.msg)
						uni.hideLoading();
					}
				})
			},
			getDate(type) {
						const date = new Date();
						let year = date.getFullYear();
						let month = date.getMonth() + 1;
						let day = date.getDate();
			
						if (type === 'start') {
							year = year - 60;
						} else if (type === 'end') {
							year = year + 2;
						}
						month = month > 9 ? month : '0' + month;;
						day = day > 9 ? day : '0' + day;
						return `${year}-${month}-${day}`;
					}
		}
	}
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
		margin-left: 32upx;
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
		 padding-right: 510upx;
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
