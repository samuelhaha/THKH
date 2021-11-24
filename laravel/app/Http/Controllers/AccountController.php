<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class AccountController extends Controller
{
    //
    public function fetchdata(){
        $users = User::all();
        return response()->json([
            'users'=>$users,
        ]);
    }
    public function modify(Request $request,$staff_id){
         $user = User::where('staff_id','=',$staff_id)->first();
        $user->name=$request->name;
         $result=$user->save();
        if($result){
            return ["result"=>"data is updated"];
        }
        else{
            return ["result"=>"update operation failed"];
        }
        //return ["result"=>"updated"];
    }
    public function remove($staff_id){
        $user = User::where('staff_id','=',$staff_id)->first();
        $result=$user->delete();
        if($result){
            return ["result"=>"record has been deleted"];
        }
        else{
            return ["result"=>'record was not able to delete'];
        }
        
    }
    // public function check(Request $request)
    // {  
    //     $user = $request->username;
    //     $pass  = $request->password;
 
    //     if (Auth::attempt($user,$pass))
    //     {
    //         return response()->json([ [1] ]); //success
    //     }
    //     else
    //      {  
    //         return response()->json([ [3] ]); //failure
    //      }  
    // }
    public function login(Request $request)
    {
        return response()->json(['result'=>$request->username]);
        //$credentials = $request->getCredentials();

        
        
        // $request->validate([
        //     'staff_id' => 'required',
        //     'password' => 'required|string'
        // ]);

        // $credentials = request(['staff_id', 'password']);

        // if(!Auth::attempt($credentials)){
        //     return response()->json(['message' => 'Unauthorized. Please login.'],401);
        // }




        // $user = $request->user();
        //return ["Result"=>"Data post"];
    }

//     protected function authenticated(Request $request){
//         return redirect()->intended();
//     }
// }
}