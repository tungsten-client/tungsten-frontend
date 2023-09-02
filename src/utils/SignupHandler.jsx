async function SignupHandler ({backend_url, email, username, password}) {
   const response = await fetch(backend_url, {});
}
//authentication_check (toss in) -> returns if we are authenticated

export default SignupHandler;