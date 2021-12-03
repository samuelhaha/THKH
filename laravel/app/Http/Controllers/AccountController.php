<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Validator;
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
     public function check(Request $request)
     {  
         $validation = Validator::make($request->all(),[
             'username'=>['required','string'],
             'password'=>['required','string']
         ]);

         $credentials = $request->only('staff_id','password');
    
         if ($validation->fails()){
             return response()->json(['code'=>400,'msg'=>$validation->errors()->first()]);
         }
         else{
            if(Auth::attempt($credentials)){
                $code = 200;
                //return redirect()->intended('/login');
                return redirect(route('/home'));
            }
             //return response()->json(['code'=>200, 'msg'=>"data passed"]);
            //redirect
             
         }
     }
    public function login()
    {
       return redirect()->away('http://localhost/THKH/html/views/login.html'); 
        
    }

    public function home(){
        return redirect()->away('http://localhost/THKH/html/views/homepage.html');
    }

    public function logout(){
        Session::flush();
        Auth::logout();

        return redirect('login');
    }
}