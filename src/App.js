import './App.css'
import {h, Component} from 'preact'
import tracked from 'tracked';
export default class App extends Component {

	@tracked time = 0;

	componentDidMount() {
		this.loadTime();
	}

	async loadTime() {
		let response = await fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=4eq2-Kc22KTPKScJcIpT7QwWTm0ulvURnhUAvQ5uoj56XCM3m8uRCYl8ckU9BqSoS7-VVhJI-gEBortQlZWku9MsRqJO0Mdam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6bwVq0tbM60-_IQDS8gp7-yKHe_C4eJUZEKxBMsj9Z72&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk`)
		this.time = await response.json();
    setTimeout(()=>{this.loadTime()},1000);
	};

	render() {
		return (
			<div class="time">
				<h2>Current Time</h2>
				<adress>Fortaleza CE, Brazil</adress>
				<div>
          <strong>{this.time.hours} - {this.time.minutes} - {this.time.seconds}</strong>
				</div>
			</div>
		)
	}
}
