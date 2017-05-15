<?php

namespace Plugin\StripeDonate;

class Event
{
    public static function ipBeforeController()
    {
        ipAddJs('Plugin/StripeDonate/assets/StripeDonate.js');
    }
}
