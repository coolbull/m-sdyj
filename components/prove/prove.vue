<template>
	<view>
		<view class="prove">
			<block v-for="(item,index) in prove" :index="index">
				<view class="item">
					<view class="iconfont iconnvren"></view>
					<view class="txt">{{item.txt}}</view>
				</view>
			</block>
			<view class="list">
				<block v-for="(items,indexs) in list" :index="indexs">
					<view class="listitem">
						<image :src="items.src" width="150upx" height="150upx" mode=""></image>
						<p>{{items.p}}</p>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			prove:Array,
			list:Array
		}
	}
</script>

<style scoped>
	.prove{
		background-color: #f0ffe2;
		padding-left: 24upx;
		padding-right: 24upx;
		padding-top: 30upx;
	}
	.prove .item{
		display: flex;
		align-items: center;
		margin-bottom: 30upx;
	}
	.item .iconfont{
		padding-right: 30upx;
		color: #007635;
		font-weight: bold;
	}
	.item .txt{
		
	}
	.prove .list{
		display: flex;
		justify-content: space-between;
		padding-bottom: 40upx;
	}
	.prove .list .listitem image{
		border: 2upx solid #007635;
		border-radius: 0.3rem;
		width: 200upx;
		height: 180upx;
	}
	.prove .list .listitem p{
		text-align: center;
		font-size: 18upx;
	}
</style>
