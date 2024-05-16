import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { setStorage, setJsonStorage, delStorage, getStorage, getJsonStorage } from "@/services/Storage";
import { AuthCheck } from "@/controllers/AuthController";


const useAuthModel = defineStore('auth', () => {
    const token = ref('');
    const user = ref('');
    const isAuth = ref(false);

    function setData(data){
      setToken(data.token);
      setUser(data.user);
      setIsAuth(true);
    }

    function setToken(value) {
        if (value) {
          token.value = setStorage("token", value);          
        } else {
          console.log("Token não foi salvo");
        }
      }
    
      function setUser(value) {
        if (value) {
          user.value = setJsonStorage("user", value);
        } else {
          console.log("Usuário não foi salvo");
        }
      }
   
      function setIsAuth(value) {        
        if (value) {
          isAuth.value = value;
        } else {
          isAuth.value = false;          
        }
      }

      async function checkToken() {
        try {
           const  isValid = await AuthCheck();
           if (!isValid) {
              authLogout();
           }
        } catch (error) {
          console.log(error.message);
          throw new Error(error)
        }
        
      }

      function authLogout() {
        delStorage('token');
        delStorage('user');
        token.value = null;
        user.value = null;
        isAuth.value = false;
        window.location.href = "/";
      }


      const getUser = computed(() => {
        const data = getJsonStorage('user');
        return data.user;
      });
    
      const getToken = computed(() => {
        return getStorage('token');
      });
    
    
      const getIsAuth = computed (
        () => {
          return isAuth.value;
        }
      );

      return {
        setData,
        setToken,
        setUser,  
        setIsAuth,
        authLogout,
        checkToken,
        getToken,
        getUser,
        getIsAuth,
      }

} );


export default useAuthModel;