export default function PayPal() {
	return (
		<div>
			<form
				action='https://www.paypal.com/cgi-bin/webscr'
				method='post'
				target='_top'
			>
				<button input type='hidden' name='cmd' value='_s-xclick' />
				<button
					type='hidden'
					name='hosted_button_id'
					value='X8GNTGK7HMWXA'
				/>
				<button
					type='image'
					src='https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif'
					border='0'
					name='submit'
					alt='PayPal - The safer, easier way to pay online!'
				/>
				<img
					alt=''
					border='0'
					src='https://www.paypalobjects.com/es_XC/i/scr/pixel.gif'
					width='1'
					height='1'
				/>
			</form>
		</div>
	);
}
