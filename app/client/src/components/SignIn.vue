<template>
<div>
  <section class="prompt">
			<h3>LookLoom</h3>
			<h1>Sign in</h1>
			<a class="button google" @click="signin">Sign in with Google</a>
		</section>	
</div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default{
  data(){
    return{
      txt: 'working',
    }
  },
  methods:{
    async signin(){
      await AuthService.signin()
  }
  }
}
</script>

<style>
.prompt {
	max-width: 400px;
	margin: 50px auto;
	padding: 25px;
	background: #fff;
	border: 1px solid #e6e6e6;
	border-radius: 8px;
}


a.button {
	box-sizing: border-box;
	display: block;
	padding: 10px;
	width: 100%;
	border-radius: 3px;
	background: #000;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	color: white;
}

a.google {
	background: #4787ed;
}
a.button:hover{
  background-color: #3a70c5;
}

h1 {
	margin: 0 0 20px 0;
	padding: 0 0 5px 0;
	font-size: 24px;
	font-weight: 500;
}

h3 {
	margin-top: 0;
	font-size: 24px;
	font-weight: 300;
	text-align: center;
}

label {
	display: block;
	margin: 0 0 3px 0;
	font-size: 14px;
	font-weight: 500;
}


</style>