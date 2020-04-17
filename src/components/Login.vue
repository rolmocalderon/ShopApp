<template>
  <div class="login-form">
    <form v-on:submit="validateLogin" id="login" method="POST" action="#">
        <div class="form-element">
            <label for="username">User:</label>
            <input type="text" name="username" id="username" aria-label="Username" />
        </div>
      <div class="form-element">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" />
        </div>
        <div class="form-element">
          <button id="loginButton">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    validateLogin: function(event) {
      event.preventDefault();
    }
  }
};
</script>

<style>
  .login-form {
    display: flex;
    align-items: center;
  }

  .login-form form{
    display: flex;
  }

  .form-element {
    padding: 5px;
    color: black;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
  }

  .form-element label{
    margin-right: 2px;
  }

  .form-element input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-element button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

</style>
