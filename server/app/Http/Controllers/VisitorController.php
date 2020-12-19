<?php

namespace App\Http\Controllers;

use App\Exceptions\AlreadyConfirmedException;
use App\Exceptions\DomainNotAllowedException;
use App\Exceptions\EmailAlreadyExistsException;
use App\Exceptions\EmailFormatNotAllowedException;
use App\Exceptions\IncorrectCodeException;
use App\Http\Requests\ConfirmVisitorRequest;
use App\Http\Requests\RegisterVisiterRequest;
use App\Http\Resources\VisitorResource;
use App\Mail\ConfirmEmail;
use App\Models\Visitor;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class VisitorController extends Controller
{
    public function register(RegisterVisiterRequest $request)
    {
        $this->validateEmail(strtolower($request->email));

        $visitor = new Visitor();
        $visitor->email = strtolower($request->email);
        $visitor->code = Str::uuid()->toString();
        if(strpos($visitor->email, "@student.tudelft.nl") !== false){
            $visitor->confirmed = true;
        }
        $visitor->save();

        Mail::to($visitor->email)->send(new ConfirmEmail($visitor->code));

        return new VisitorResource($visitor);
    }

    public function validateEmail($email){
        // $domain = explode("@", $email)[1];
        // $whitelist = ['tudelft.nl', 'student.tudelft.nl', 'hhs.nl', 'student.hhs.nl'];
        // if(!in_array($domain, $whitelist)){
        //     throw new DomainNotAllowedException('The given email domain is not allowed.', 405);
        // }

        if(strpos($email, "+") !== false){
            throw new EmailFormatNotAllowedException('The given email does not match the required format.', 405);
        }

        $visitor = Visitor::where('email', $email)->first();
        if($visitor){
            throw new EmailAlreadyExistsException('The given email address is already known in the system, it can take a few minutes before you receive the email.. Check also your spambox.', 405);
        }
    }

    public function confirm(ConfirmVisitorRequest $request)
    {
        $visitor = Visitor::where('code', $request->code)->first();
        if(!$visitor){
            throw new IncorrectCodeException('The confirmation code is incorrect.', 405);
        }
        if($visitor->confirmed){
            throw new AlreadyConfirmedException('Your light is already on.', 405);
        }

        $visitor->confirmed = true;
        $visitor->save();

        return new VisitorResource($visitor);
    }

    public function total(){
        return 600 + Visitor::where('confirmed', 1)->count();
    }
}
