import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { setStorage, setJsonStorage, delStorage } from "@/services/Storage";
import { AuthCheck } from "@/controllers/AuthController";

const useAuthModel = defineStore('auth', () => {
    const token = ref('');
    const user = ref('');
    const isAuth = ref(false);

    function setToken(value) {
        if (value) {
          token.value = setStorage("access_token", value);
        } else {
          console.log("Token não foi salvo");
        }
      }
    
      function setUser(value) {
        if (value) {
          user.value = setJsonStorage("access_user", value);
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
        return  await  AuthCheck();
      }

      function authLogout() {
        delStorage('access_token');
        delStorage('access_user');
        token.value = null;
        user.value = null;
        isAuth.value = false;
        window.location.href = "/";
      }


      const getUser = computed(() => {
        return user.value;
      });
    
      const getToken = computed(() => {
        return token.value;
      });
    
    
      const getIsAuth = computed (
        () => {
          return isAuth.value;
        }
      );

      return {
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