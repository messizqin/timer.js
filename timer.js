(function(){
function render_element(styles, el){
	for(const [kk, vv] of Object.entries(styles)){
		el.style[kk] = vv;
	}
}

class Timer{
	constructor(
		width, 
		height, 
		borderRadius, 
	){
		this.width = width;
		this.height = height;
		this.borderRadius = borderRadius;
		[
			this.el,
			this.hour_el,
			this.min_el,
			this.sec_el,  

			this.hour_ten, 
			this.hour_one, 
			this.min_ten,
			this.min_one,
			this.sec_ten,
			this.sec_one,

			this.hour_ten_num, 
			this.hour_one_num, 
			this.min_ten_num,
			this.min_one_num,
			this.sec_ten_num,
			this.sec_one_num,
		] = Array.from({length: 16}, ()=>document.createElement('div'));
		render_element({
			width: width.toString() + 'px',
			height: height.toString() + 'px',
			background: '#333',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly', 
			alignItems: 'center', 
			borderRadius: borderRadius.toString() + 'px',
		}, this.el);
		let timer_styles = {
			borderRadius: borderRadius.toString() + 'px',
			height: '90%',
			width: '30%',
			background: '#555',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		};
		render_element(timer_styles, this.hour_el);
		render_element(timer_styles, this.min_el);
		render_element(timer_styles, this.sec_el);
		this.el.appendChild(this.hour_el);
		this.el.appendChild(this.min_el);
		this.el.appendChild(this.sec_el);
		let stripe_styles = {
			width: '45%',
			height: '100%', 
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden',
			fontSize: (height / 2).toString() + 'px',
		};
		let left_stripe_styles = {
			borderRadius: '5px 0 0 5px',
			background: '#666',
			color: '#eee',
		};
		let right_stripe_styles = {
			borderRadius: '0 5px 5px 0',
			background: '#777',
			color: '#fff',
		};
		render_element(Object.assign({}, stripe_styles, left_stripe_styles), this.hour_ten);
		render_element(Object.assign({}, stripe_styles, left_stripe_styles), this.min_ten);
		render_element(Object.assign({}, stripe_styles, left_stripe_styles), this.sec_ten);
		render_element(Object.assign({}, stripe_styles, right_stripe_styles), this.hour_one);
		render_element(Object.assign({}, stripe_styles, right_stripe_styles), this.min_one);
		render_element(Object.assign({}, stripe_styles, right_stripe_styles), this.sec_one);
		this.hour_el.appendChild(this.hour_ten);
		this.hour_el.appendChild(this.hour_one);
		this.min_el.appendChild(this.min_ten);
		this.min_el.appendChild(this.min_one);
		this.sec_el.appendChild(this.sec_ten);
		this.sec_el.appendChild(this.sec_one);
		this.collapse = this.collapse.bind(this);
		this.interval = setInterval(this.collapse, 1000);
	}

	collapse(timer_el){
		let today = new Date();
		let hour = today.getHours();
		let min = today.getMinutes();
		let sec = today.getSeconds();
		[this.hour_ten.innerText, this.hour_one.innerText] = (hour < 10 ? '0' + hour.toString() : hour.toString()).split('');
		[this.min_ten.innerText, this.min_one.innerText] = (min < 10 ? '0' + min.toString() : min.toString()).split('');
		[this.sec_ten.innerText, this.sec_one.innerText] = (sec < 10 ? '0' + sec.toString() : sec.toString()).split('');
	}
}

window.Timer = Timer;
})();
