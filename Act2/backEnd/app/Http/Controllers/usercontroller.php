<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;

class usercontroller extends Controller
{
    public function getUsers(){
        return response()->json(users::all(), 200);
    }


    public function addUser(Request $request){        
        $user = new users;    

        $repetido = users::select('email')->where('email', $request->email)->get();        

        if(count($repetido) != 1){            
            $user -> name = $request->name;            
            $user -> email = $request->email;            
            $user -> password = $request->password;                        
            $user -> save();
            
            return response()->json(['message' => 'Registrado con exito ya puede iniciar sesion'], 200);                
                
        }else{
            return response()->json(['message' => 'Correo electronico ya registrado'], 200);
        }

        
    }

    public function loginComplete(Request $request){    

        return response()->json(['warning' => 'Ha ocurrido un problema en el servidor'], 200);
        /*$repetido = users::select('password')->where('email', $request->email)->get();
        
        if(count($repetido) === 1){
            return response()->json( $repetido, 200);
        }else{
            return response()->json(['message' => 'La cuenta no existe o mal ingresada'], 200);
        }*/
    }

}
