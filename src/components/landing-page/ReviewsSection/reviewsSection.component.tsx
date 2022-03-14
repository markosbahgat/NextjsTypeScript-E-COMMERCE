import React from "react";
import styles from "./style.module.scss";

interface Props {}

const ReviewsSection: React.FC<Props> = () => {
	return (
		<div>
			<div className={styles.main_container}>
				<div className={styles.title_container}>What Our Customers Are Saying</div>
				<div className={styles.middel_container}>
					<div className={styles.post_container}>
						<div className={styles.stars_container}>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
						</div>
						<h3>I’m so thankful for this product!</h3>
						<p>
							As a life long stomach sleeper, I’ve become picky about finding the perfect pillow and was
							reluctant to make a change from the all-down pillow. Well, I simply didn’t know what I was
							missing. After trying the Everpillow, I won’t be going back! The customizable stuffing,
							support, and breathability are all on point.
						</p>
						<h3>–DAVE</h3>
					</div>
					<div className={styles.post_container}>
						<div className={styles.stars_container}>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
						</div>
						<h3>I’m so thankful for this product!</h3>
						<p>
							As a life long stomach sleeper, I’ve become picky about finding the perfect pillow and was
							reluctant to make a change from the all-down pillow. Well, I simply didn’t know what I was
							missing. After trying the Everpillow, I won’t be going back! The customizable stuffing,
							support, and breathability are all on point.
						</p>
						<h3>–DAVE</h3>
					</div>
					<div className={styles.post_container}>
						<div className={styles.stars_container}>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
						</div>
						<h3>I’m so thankful for this product!</h3>
						<p>
							As a life long stomach sleeper, I’ve become picky about finding the perfect pillow and was
							reluctant to make a change from the all-down pillow. Well, I simply didn’t know what I was
							missing. After trying the Everpillow, I won’t be going back! The customizable stuffing,
							support, and breathability are all on point.
						</p>
						<h3>–DAVE</h3>
					</div>
				</div>
				<div className={styles.button_container}>
					<button>READ MORE TESTIMONIALS</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewsSection;
