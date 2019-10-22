<script>
	import HeaderMain from './HeaderMain';
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<HeaderMain />
<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>NEW IN</a></li>
		<li><a class='{segment === "designers" ? "selected" : ""}' href='designers'>DESIGNERS</a></li>
		<li><a class='{segment === "clothing" ? "selected" : ""}' href='clothing'>CLOTHING</a></li>
		<li><a class='{segment === "shoes" ? "selected" : ""}' href='shoes'>SHOES</a></li>
		<li><a class='{segment === "bags" ? "selected" : ""}' href='bags'>BAGS</a></li>
		<li><a class='{segment === "accessories" ? "selected" : ""}' href='accessories'>ACCESSORIES</a></li>
		<li><a class='{segment === "communities" ? "selected" : ""}' href='communities'>COMMUNITIES</a></li>
		<li><a class='{segment === "blog" ? "selected" : ""}' href='blog'>BLOG</a></li>
	</ul>
</nav>