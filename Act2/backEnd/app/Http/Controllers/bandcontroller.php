<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\band;

class bandcontroller extends Controller
{

    public function getBands(){
        return response()->json(band::all(), 200);
    }

    public function search(Request $request){
        
        $posts = band::where('name', 'LIKE', '%'.$request->band.'%')->get();
        
        return \response()->json($posts);
    }


    public function getBandId($id){
        $band = band::find($id);

        if(is_null($band)) {
            return response()->json(['warning' => 'Error 400 de peticion']);
        }

        return response()->json($band::find($id),200);
    }
    

}
