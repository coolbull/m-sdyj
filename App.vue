<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	/* iconfont字体库 */
	@import "./common/iconfont.css";
	/* #ifdef H5 */
			::-webkit-scrollbar {
			    display: none;  
			    width: 0 !important;  
			    height: 0 !important;  
			    -webkit-appearance: none;  
			    background: transparent;  
			}
		/* #endif */
</style>
