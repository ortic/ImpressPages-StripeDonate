<div class="ipsContainer">
    <?php
    if (!isset($name) || !isset($description) || !isset($amount)) {
        echo _e('Please fill in mandatory values', 'StripeDonate');
    }
    else {
        echo esc($name);
    }
    ?>
</div>
