<script>
	import { fly } from 'svelte/transition';
	import Abis from '../assets/images/abis_market.png';
	import AbisLogo from '../assets/images/edited.png';
	import UsCard from '../components/UsCard.svelte';
	import Footer from '../components/Footer.svelte';
	import menu from '../assets/images/open-menu.png';
	import menuPdf from '../assets/images/files/menu.pdf';
	import apple from '../assets/images/apple-app-store.png';
	import android from '../assets/images/android-playstore.png';
	import FoodCard from '../components/FoodCard.svelte';
	import food1 from "../assets/images/food/1.jpg"

	let imageModal = '';
	let openModalImage = false;

	function closeModal() {
		openModalImage = false;
	}
	function openModal(src) {
		openModalImage = true;
		imageModal = src;
		// return src;
	}
</script>

<svelte:head>
	<title>Abi's | Home</title>
</svelte:head>

<section
	class="section-a"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
<!-- {#if openModalImage}
		<div class="modal" in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ duration: 500 }}>
			<button on:click={closeModal}>x</button>
			<div class="modal-content">
				<img src={imageModal} alt="" />
			</div>
		</div>
	{/if} -->
	<div class="container">
		<div class="title-logo">
			<img src={AbisLogo} alt="" />
			<!-- <h1>Abi's Kitchen</h1> -->
		</div>

		<!-- motto and foods -->
		<div class="motto-food-display">
			<div class="motto">
				<h1><span class="justabis">Abi's</span> Kitchen</h1>
				<p class="my-motto">Food you can't resist 😋</p>
				<!-- <a sveltekit:prefetch sveltekit:noscroll href="/menu">Our Menu</a> -->
			</div>
			<!-- <div class="side-img">
				<img src={Abis} alt="abis_market_side_image" />
			</div> -->
		</div>
		<br />
		<br />
		<div class="just-menu">
			<h1>Our Menu</h1>
			<FoodCard />
		</div>
		<br />
		<h3>Why Choose Us?</h3>
		<br />
		<UsCard />
		<h3>Apps Coming Soon</h3>
		<div class="coming-soon">
			<img src={apple} alt="" />
			<img src={android} alt="" />
		</div>
		<Footer />
	</div>
</section>

<style lang="scss">
	// .section-a{
	// 	background: #d3d3d3;
	// }
	.container {
		.coming-soon {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			padding: 2rem;

			img {
				width: 300px;
				height: 100px;
			}
		}
		h3 {
			text-align: center;
			padding: 2rem;
			font-size: 30px;
		}
		// padding-right: 2rem;
		// padding-left: 2rem;
		padding-top: 2rem;

		.title-logo {
			display: flex;
			gap: 1rem;
			align-items: center;
			padding-left: 2rem;
			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
			}
		}

		.motto-food-display {
			// width: 100%;
			display: grid;
			grid-template-columns: auto;
			align-items: center;
			gap: 1rem;
			.motto {
				span{
					color: #ec2027;
				}
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				h1 {
					font-size: 4rem;
					padding-left: 20px;
				}
				p {
					color: grey;
					font-style: italic;
					padding-bottom: 20px;
				}
				a {
					background-color: #ec2027;
					color: white;
					padding-left: 10px;
					padding-right: 10px;
					padding-top: 5px;
					padding-bottom: 5px;
					border-radius: 20px;
					cursor: pointer;
					transition: 1s ease;
					box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
					&:hover {
						background-color: #f38822;
					}
				}
			}
			.side-img {
				img {
					animation: rotation 11s infinite linear;
					max-width: 50%;

					// display: block;
				}
			}
		}
		.just-menu {
			h1 {
				text-align: center;
				padding: 20px;
			}
			p {
				text-align: center;
				color: gray;
				padding-bottom: 20px;
			}
			.special-container {
				padding-bottom: 20px;
			}
			.glow {
				display: flex;
				padding: 20px;
				justify-content: center;
				a {
					font-size: 25px;
					color: #fff;
					text-align: center;
					-webkit-animation: glow 1s ease-in-out infinite alternate;
					-moz-animation: glow 1s ease-in-out infinite alternate;
					animation: glow 1s ease-in-out infinite alternate;
				}
			}
		}
		.fixed-menu {
			position: fixed;
			z-index: 1;
			top: 410px;
			right: 10px;
			overflow: hidden;
			img {
				// box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
	// media query
	@media (max-width: 991px) {
	}
	@media (max-width: 768px) {
		.container {
			.motto-food-display {
				display: flex;
				justify-content: center;
				.motto {
					h1 {
						font-size: 30px;
					}
				}
				.side-img {
					display: none;
				}
			}
		}
	}
	@media (max-width: 500px) {
		.container {
			.motto-food-display {
				display: flex;
				justify-content: center;
				.motto {
					h1 {
						font-size: 30px;
					}
				}
				.side-img {
					display: none;
				}
			}
		}
	}

	@-webkit-keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
				0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
		}
		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6,
				0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
		}
	}
</style>
