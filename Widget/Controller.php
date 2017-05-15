<?php

namespace Plugin\StripeDonate\Widget\StripeDonate;

use Ip\WidgetController;

class Controller extends WidgetController
{
    public function getTitle()
    {
        return __('Stripe Donate Button', 'StripeDonate', false);
    }

    public function adminHtmlSnippet()
    {
        return ipView('snippet/edit.php')->render();
    }

}
