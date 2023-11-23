import axios from 'axios';



export const loginUser = (email , password) => async (dispatch) => {
    try {
        
       dispatch({
        type:"LoginRequest"
       });

       const { data } = await axios.post('/user/login' , {email , password});

       dispatch({
        type:"LoginSuccess",
        payload: data.user,
       });

    } catch (error) {

        console.log(error); 

        dispatch({
            type:"LoginFailure",
            payload : error,
        });
        
    }
}


export const loadUser = () => async (dispatch) => {
  try {

    dispatch({
        type : "LoadUserRequest",
    });

    const token = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('token'));

    console.log(token);

    const headers = {
      'Authorization' : `${token}`,
    };

    console.log(headers);
    const { data } =  await axios.get('/user/profile/me', {headers});

    dispatch({
        type : "LoadUserSuccess",
        payload : data.User,
    }); 

  } catch (error) {
    
    dispatch({
        type : "LoadUserFailure",
        payload : error,
    });

  }
}