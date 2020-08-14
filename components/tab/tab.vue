<template>
	<view class="tab">
		
		<view class="tablist">
			<a style="text-decoration: none;color: black;" href="mqqwpa://im/chat?chat_type=wpa&uin=1453375133&version=1&src_type=web&web_src=oicqzone.com" rel="nofollow">
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
				
			}
		},
		methods:{
			qq(){
				uni.showToast({
					title: '调用qq接口'
				});
			},
			call(){
				uni.makePhoneCall({
				
					// 手机号
					phoneNumber: '400-836-0510',
				
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
