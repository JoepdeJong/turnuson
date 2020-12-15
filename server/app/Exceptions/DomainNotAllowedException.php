<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class DomainNotAllowedException extends Exception
{
    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        Log::debug('The given email domain is not allowed.');
    }
}
