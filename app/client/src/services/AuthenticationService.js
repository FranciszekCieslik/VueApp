import Api from '@/services/Api'

export default{
    register (credentials){
        return Api().prost('register', credentials)
    }
}

// AuthentocationService.register(
//     {
//         email:'',
//         password:''
//     }
// )