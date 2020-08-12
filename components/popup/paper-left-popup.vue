<template>
	<view>
		<view class="paper-left-popup-mask" v-show="show" @tap="hidepopup">
			<view class="paper-left-popup" v-show="show">
				<block v-for="(item ,index) in list" :index="index">
					<view class="u-f-ac" hover-class="paper-left-popup-h"  @tap="navpage(index)">
						<p>{{item.theme}}</p>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{theme:"日常保洁"},
					{theme:"开荒保洁"},
					{theme:"家电清洗"},
					{theme:"上门除甲醛"},
					{theme:"关于我们"},
					
				],
				page:[
					{path:"../../pages/dailycleaning/dailycleaning"},
					{path:"../../pages/wasteland/wasteland"},
					{path:"../../pages/formaldehyde/formaldehyde"},
					{path:"../../pages/formaldehyde/formaldehyde"},
					{path:"../../pages/about/about"},
				]
			}
		},
		props: {
				show: Boolean,
		},
		methods:{
			hidepopup(){
				this.$emit('hide');
			},
			addfrined(){
				this.$emit('addfriend');
			},
			clear(){
				this.$emit('clear');
			},
			navpage(index){
				const path =this.page[index].path;
				console.log(path);
				uni.navigateTo({
					url: path,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.paper-left-popup-mask{
		position: fixed;
		right: 0;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 1999;
		/* background-color: #aba8a8; */
		/* opacity: 0.5; */
	}
	.paper-left-popup{
		position: fixed;
		right: 9upx;
		top: 92upx;
		background-color: #7a7a7a;
		z-index: 2000;
		width: 25%;
		height: ;
		opacity: 1 !important;
		border-radius: 0.4rem;
		box-shadow:1upx 1upx 20upx 2upx #CCCCCC;
	}
	.paper-left-popup>view{
		padding-left: 20upx;
		padding-right: 20upx;
		padding-bottom: 10upx;
		padding-top: 10upx;
		font-size: 24upx;
		color: #FFFFFF;
		text-align: center;
		/* border-bottom: 1upx solid #FFFFFF; */
	}
	.paper-left-popup>view p{
		border-bottom: 0.5upx solid #858585;
	}
	.paper-left-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
		color: #FFFFFF;
		padding-left: 30upx;
		padding-right: 30upx;
		
	}
	.paper-left-popup-h{
		color: #EEEEEE;
	}
</style>
