<template>
	<view class="tab">
		
		<view class="tablist">
			<a style="text-decoration: none;color: black;" href="http://ser.sudayijia.com/public/applet/service/index" rel="nofollow">
				<view class="iconfont iconkefu"></view>
				<view class="txt">在线咨询</view>
			</a>
			
		</view>
		<view class="tablist" @tap="call">
			<view class="iconfont icondianhua"></view>
			<view class="txt">电话咨询</view>
		</view>
		<view class="tablist" @tap="wexin">
			<view class="iconfont iconweixin"></view>
			<view class="txt">添加微信</view>
		</view>
		<view class="tablist" @tap="baojia">
			<view class="iconfont iconbaojia"></view>
			<view class="txt">获取报价</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			}
		},
		mounted() {
			// this.broadcast.$on("companyinfo",function(e){
			// 	this.data=e;
			// 	console.log("全局监听数据");
			// 	console.log(e);
				
			// })
		},
		created() {
			// uni.$on('companyinfo',function(data){
			// 	console.log('监听到事件来自 update ，携带参数 msg 为：' + data.data);
			// 	console.log(this.data);
			// })
			this.getCompanyinfo();
		},
		methods:{
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
							// console.log(this.data);
					}else if(res.data.code == 1){
						console.log(res.data.msg);
					}else{
						console.log(res.data.msg)
					}
				})
			},
			qq(){
				uni.showToast({
					title: '调用qq接口'
				});
			},
			call(){
				uni.makePhoneCall({
				
					// 手机号
					phoneNumber: this.data.phone,
				
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
				
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				
				});
				},
			wexin(){
				uni.showToast({
					title: '添加客服微信：1234567890',
					duration:5000
				});
			},
			baojia(){
				uni.navigateTo({
					url: '../../pages/baojia/baojia',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.tab{
		position: fixed;
		bottom: 0;
		height: 100upx;
		width: 100%;
		display: flex;
		background-color: #FFFFFF;
	}
	.tablist{
		width: 25%;
		height: 100upx;
		text-align: center;
	}
	.tablist .iconfont{
		color: red;
		font-size: 30upx;
		font-weight: bold;
	}
</style>
