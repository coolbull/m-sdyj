<template>
	<view>
		<view class="footer">
			<p>网址:{{data.website}}</p>
			<p>意见投诉邮箱：{{data.mail}}</p>
			<p>全国服务电话：{{data.phone}}</p>
			<p>客服在线时间：{{data.service_time}}</p>
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
			// this.broadcast.$emit("companyinfo",this.data)
		},
		created() {
			this.getCompanyinfo();
			// uni.$emit('companyinfo',{data:this.data})
			// console.log('aaa');
			
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
					}else if(res.data.code == 1){
						console.log(res.data.msg);
					}else{
						console.log(res.data.msg)
					}
				})
			}
		}
	}
</script>

<style scoped>
	/* 底部版权 */
	.footer{
		padding-top: 30upx;
		padding-bottom: 20upx;
		background-color: #373940;
		text-align: center;
		color: #f3f3f3;
		margin-bottom: 100upx;
	}
</style>
