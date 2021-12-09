<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Validator;
//use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Exception;
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
     public function check1(Request $request)
     {  
        
             $user = $request->staff_id;
            // $request->session()->put('staff_id',$user);
            $query = User::where('staff_id','=',$user)->first();
            if($query === null){
                //return code 401 - unauthorized, msg = 'Wrong credentials entered'
                return response()->json(['code'=>401, 'msg'=>"Wrong credentials entered."]);
            }
            // else{
            //     $role = User::select('select role from users');
            //     // foreach($role as $r){
            //         $userrole = User::select('select role from users where staff_id = $user');
            //         if($userrole = 'rps'){ //reporting staff
            //             return 
            //         //}
            //         else if($userrole = 'sup'){ //supervisor
            //             //return supervisor();
                        
            //         }
            //         else if($userrole = 'doc'){//doctor
            //             return ;
            //         }
            //         else if($userrole = 'pha'){//pharmacy
            //             return ;
            //         }
            //         else if($userrole = 'hod'){//hod
            //             return ;
            //         }
            //         else if($userrole = 'hpo'){//hpo
            //             return ;
            //         }
            //         else if($userrole = 'dms'){//dms
            //             return ;
            //         }
            //     //}
            //     //$request->session()->put('staff_id',$user);
            //     //response()->json(['code'=>200]);
            //     http_response_code(200);
            //     //return home();
            // }

            // if(Auth::attempt($credentials)){
            //     $request->session()->regenerate();
            //     //return redirect()->intended('THKH/laravel/home');
            //     return response()->json(['msg'=>'Login successful']);
            // }
            // else{
            //     return response()->json(['msg'=>"User credentials are not correct"]);
            // }
             //return response()->json(['code'=>200, 'msg'=>"data passed"]);
            //redirect
             
         //}
     }
    public function check(Request $request){
        $input = $request->only('staff_id', 'password');
        $jwt_token = null;
  
        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Staff ID or Password',
            ]);
        }
        $staff_id = $request->staff_id;
        $query = User::where('staff_id',$staff_id)->first();
        return response()->json([
            'success' => true,
            'token' => $jwt_token,
            'user' => $query
        ]);
    }
    // public function login()
    // {
    //    return redirect()->away('http://localhost/THKH/html/views/login.html'); 
        
    // }

    public function home(){
        return redirect()->away('http://localhost/THKH/html/views/index.html');
    }

    public function supervisor(){
        return redirect()->away('http://localhost/THKH/html/views/SupervisorReport.html');
    }

    public function logout(){
        session()->flush();

        // Session::flush();
        // Auth::logout();

        return redirect('login');
    }
}