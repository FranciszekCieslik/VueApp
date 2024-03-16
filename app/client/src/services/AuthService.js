import Api from '@/services/Api'

export default{
    signin (){
        return Api().get('login/federated/google', Api().passport.authenticate('google'))
    }
}