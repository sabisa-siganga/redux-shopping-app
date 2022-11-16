import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./CheckOut.scss";

const CheckOut = () => {
	return (
		<div>
			<Navbar hideCart />

			<div className="first-part">
				{/* left */}
				<div className="left">
					<div className="shopping-fee">
						<div className="border">
							<h4>Shipping fee</h4>
							<p>Buy R59 more to enjoy FREE STANDARD SHIPPING</p>
						</div>
					</div>
					<div className="item-summary">
						<h1>Item Summary</h1>
						<table className="table">
							<tr>
								<th>
									<input className="input" type="checkbox" />
									All
								</th>
								<th>Item</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Total</th>
							</tr>
							<tr>
								<td>
									<input className="check-b" type="checkbox" />
								</td>
								<td>
									<div className="img">
										<img
											src="https://picsum.photos/536/354.jpg?random=1"
											alt=""
										/>
										<span>testing</span>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>

				{/* right */}
				<div className="right">
					<div className="order">
						<span>Order Summary</span>
						<div className="os">
							<h4>Subtotal</h4>
							<p>R249</p>
						</div>
						<div className="reward">
							<span>Reward 7 Points</span>
						</div>
						<div className="button">
							<button>checkout securely now</button>
						</div>
						<div className="paragh">
							<p>Apply a Coupon Code, points on the next step.</p>
						</div>
					</div>
					<div className="payment-methods">
						<p>We Accept</p>
						<div className="bank-img">
							<img
								src="	https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.webp"
								alt="visa"
							/>
							<img
								src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.webp"
								alt=""
							/>
							<img
								src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.webp"
								alt=""
							/>
							<img
								src="https://img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.webp"
								alt=""
							/>
							<img
								src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282731342688549608.webp"
								alt=""
							/>
							<img
								src="https://img.ltwebstatic.com/images2_pi/2018/06/06/1528273151799711689.webp"
								alt=""
							/>
							<img
								src="	https://img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
