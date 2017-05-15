<div class="ip">
    <div id="ipWidgetDonateButtonPopup" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><?= _e('Edit Donate Button', 'StripeDonate') ?></h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="name">Description</label>
                        <input type="text" class="form-control" id="description" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="amount">Amount</label>
                        <input type="number" class="form-control" id="amount" placeholder="">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><?= _e('Cancel', 'StripeDonate') ?></button>
                    <button type="button" class="btn btn-primary ipsConfirm"><?= _e('Confirm', 'StripeDonate') ?></button>
                </div>
            </div>
        </div>
    </div>
</div>