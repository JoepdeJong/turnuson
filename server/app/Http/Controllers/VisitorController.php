<?php

namespace App\Http\Controllers;

use App\Exceptions\AlreadyConfirmedException;
use App\Exceptions\DomainNotAllowedException;
use App\Exceptions\EmailAlreadyExistsException;
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
        $visitor->save();

        Mail::to($visitor->email)->send(new ConfirmEmail($visitor->code));

        return new VisitorResource($visitor);
    }

    public function validateEmail($email){
        $domain = explode("@", $email)[1];
        $whitelist = ['tudelft.nl', 'student.tudelft.nl', 'hhs.nl', 'student.hhs.nl'];
        if(!in_array($domain, $whitelist)){
            throw new DomainNotAllowedException('The given email domain is not allowed.', 405);
        }

        $visitor = Visitor::where('email', $email)->first();
        if($visitor){
            throw new EmailAlreadyExistsException('The given email address is already known in the system, check your email to confirm!', 405);
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
        return Visitor::where('confirmed', 1)->count();
    }
}